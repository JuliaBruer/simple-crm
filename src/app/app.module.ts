import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FirebaseOptions } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DialogEditAddressComponent } from './dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { DealsComponent } from './deals/deals.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgChartsModule, ThemeService } from 'ng2-charts';
import { DialogAddDealComponent } from './dialog-add-deal/dialog-add-deal.component';
import { CompaniesComponent } from './companies/companies.component';
import { DialogAddCompanyComponent } from './dialog-add-company/dialog-add-company.component';
import { ProjectsComponent } from './projects/projects.component';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatTabsModule} from '@angular/material/tabs';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBSYCO1VIfAO3JB5qvF93SvRhwpfRvSloM",
  authDomain: "test-b35c9.firebaseapp.com",
  projectId: "test-b35c9",
  storageBucket: "test-b35c9.appspot.com",
  messagingSenderId: "833193840543",
  appId: "1:833193840543:web:9a67452952df0fa4fcb7aa"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogAddUserComponent,
    UserDetailComponent,
    DialogEditAddressComponent,
    DialogEditUserComponent,
    DealsComponent,
    DialogAddDealComponent,
    CompaniesComponent,
    DialogAddCompanyComponent,
    ProjectsComponent,
    LegalNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule,
    AngularFireModule.initializeApp(firebaseConfig),
    DragDropModule,
    NgChartsModule,
    CdkDrag,
    CdkAccordionModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }