import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DealsComponent } from './deals/deals.component';
import { CompaniesComponent } from './companies/companies.component';
import { ProjectsComponent } from './projects/projects.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'legal-notice', component: LegalNoticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
