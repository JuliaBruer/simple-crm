import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddDealComponent } from '../dialog-add-deal/dialog-add-deal.component';
import { Deal } from 'src/models/deal.class'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
  leads = ['Pharma AG', 'Infrastructure City', 'Airport', 'Zenith Strategies GmbH'];
  offers = ['Roll-Out new IT', 'Campaign 2024'];
  orders = ['Supply Chain in new Factory Hall', 'IT: React to Angular', 'Company Stat AG', 'Innovix Solutions AG'];
  newLead = new Deal();
  allLeads = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
    .collection('leads')
    .valueChanges()
    .subscribe((changes: any) => {
      this.allLeads = changes;
    }); 
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openDialog() {
    this.dialog.open(DialogAddDealComponent);
  }
}