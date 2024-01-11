import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Company } from 'src/models/company.class'
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-add-company',
  templateUrl: './dialog-add-company.component.html',
  styleUrls: ['./dialog-add-company.component.scss']
})
export class DialogAddCompanyComponent {
  loading = false;
  newCompany = new Company();
  allCompanies = [];

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddCompanyComponent>) { }

  saveCompany() {
    if (this.newCompany.companyName.trim().length > 0) {
      this.loading = true;
      this.firestore
        .collection('companies')
        .add(this.newCompany.toJSON())
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