import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId = '';
  user: User = new User;

  constructor(
    private route: ActivatedRoute, 
    private firestore: AngularFirestore,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paraMap => {
      this.userId = paraMap.get('id');
      this.getUser();
    })
  }

  getUser() {
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((user: any) => {
      this.user = new User(user);
    });
  }

  previousPage() {
    window.history.back();
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  deleteUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .delete()
      .then(() => {
        console.log('User deleted successfully');
      })

    window.alert('The customer has been successfully deleted.');

    window.history.back();
  }
}
