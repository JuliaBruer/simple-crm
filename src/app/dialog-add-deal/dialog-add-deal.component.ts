import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Deal } from 'src/models/deal.class'
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-add-deal',
  templateUrl: './dialog-add-deal.component.html',
  styleUrls: ['./dialog-add-deal.component.scss']
})
export class DialogAddDealComponent {
  loading = false;
  newLead = new Deal();
  allLeads = [];

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddDealComponent>) { }

  saveDeal() {
    if (this.newLead.projectName.trim().length > 0) {
      this.loading = true;
      this.firestore
        .collection('leads')
        .add(this.newLead.toJSON())
        .then((result: any) => { 
          console.log(result);
          this.loading = false;
          this.dialogRef.close();
        })
        .catch(error => {
          console.error(error);
          this.loading = false;
        });
    }
  }
}