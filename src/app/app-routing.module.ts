import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { DataManagerComponent } from './page/data-manager/data-manager.component';
import { AccountDetailComponent } from './page/account-detail/account-detail.component';
import { ExtractManagerComponent } from './page/extract-manager/extract-manager.component';
import { CometJobManagerComponent } from './page/comet-job-manager/comet-job-manager.component';
import { NraComponent } from './page/nra/nra.component';
import { ReportToolComponent } from './page/report-tool/report-tool.component';
import { ProcessManagerComponent } from './page/process-manager/process-manager.component';
import { ToolkitComponent } from './page/toolkit/toolkit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'datamanager',
    component: DataManagerComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
  // more routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
