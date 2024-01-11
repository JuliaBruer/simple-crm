import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate: Date = new Date;
  loading = false;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void { }

  saveUser() {
    if (this.user.firstName.trim().length > 0 && this.user.lastName.trim().length > 0) {
      this.user.birthDate = this.birthDate.getTime();
      this.loading = true;
      this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => { 
        console.log(result);
        this.loading = false;
        this.dialogRef.close();
      }); 
    }
  }

  async autofillCity() {
    let zipInput = document.getElementById('zip') as HTMLInputElement;
    let city = document.getElementById('city') as HTMLInputElement;
    let url = `https://openplzapi.org/de/Localities?postalCode=${zipInput.value}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
  
    if (responseAsJson && responseAsJson.length > 0) {
      let cityName = responseAsJson[0].name;
      this.user.city = cityName;
      city.value = cityName;
      this.streetOptions();
    } else {
      zipInput.classList.add('error');
      setTimeout(() => {
        zipInput.classList.remove('error');
      }, 3000);
    }
  }  
  
  async streetOptions() {
    let inputText = (document.getElementById('streetInput') as HTMLInputElement).value;
    let cityName = (document.getElementById('city') as HTMLInputElement).value;
  
    let url = `https://openplzapi.org/de/Streets?name=${inputText}&locality=${cityName}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
  
    let streetList = document.getElementById('streetList') as HTMLSelectElement;
    streetList.innerHTML = '';
  
    for (let i = 0; i < responseAsJson.length; i++) {
      const street = responseAsJson[i].name;
      let option = document.createElement('option');
      option.value = street;
      streetList.appendChild(option);
    }
  }
}