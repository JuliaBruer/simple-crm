import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  user: User;
  loading = false;
  birthDate: Date = new Date;
  userId: string;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: AngularFirestore) { }

  saveUser() {
    if (this.user.firstName.trim().length > 0 && this.user.lastName.trim().length > 0) {
      this.loading = true;
      this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(() => { 
        this.loading = false;
        this.dialogRef.close();
      }); 
    }
  }
}
