import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddCompanyComponent } from '../dialog-add-company/dialog-add-company.component';
import { Company } from 'src/models/company.class'
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  index: number;
  expandedIndex = 0;
  newCompany = new Company();
  allCompanies = [];
  searchInput: string = '';

  constructor(private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.firestore
    .collection('companies')
    .valueChanges()
    .subscribe((changes: any) => {
      this.allCompanies = changes;
    }); 
  }

  searchFunction(newCompany: any) {
    if (newCompany.companyName.toLowerCase().includes(this.searchInput.toLowerCase())
    || newCompany.mail.toLowerCase().includes(this.searchInput.toLowerCase())
    || newCompany.phoneNumber.toLowerCase().includes(this.searchInput.toLowerCase())
    || newCompany.website.toLowerCase().includes(this.searchInput.toLowerCase())
    || newCompany.companyHeadquarters.toLowerCase().includes(this.searchInput.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  }

  editCompany() {

  }

  deleteCompany() {
    this.firestore
    .collection('companies')
    .doc()
    .delete()
    .then(() => {
      console.log('Company deleted successfully');
    })

    window.alert('The company has been successfully deleted.');
  }

  openDialog() {
    this.dialog.open(DialogAddCompanyComponent);
  }
}