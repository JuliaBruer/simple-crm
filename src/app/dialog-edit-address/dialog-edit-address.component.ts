import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user: User;
  loading = false;
  userId: string;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: AngularFirestore) { }

  async autofillCity() {
    let zipInput = document.getElementById('zip') as HTMLInputElement;
    let city = document.getElementById('city') as HTMLInputElement;
    let url = `https://openplzapi.org/de/Localities?postalCode=${zipInput.value}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();

      if (responseAsJson && responseAsJson.length > 0) {
          let cityName = responseAsJson[0].name;
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

  saveUser() {
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
