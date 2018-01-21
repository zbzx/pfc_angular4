// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { AccountDetailComponent } from './page/account-detail/account-detail.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HomeComponent } from './page/home/home.component';
import { DataManagerComponent } from './page/data-manager/data-manager.component';
import { ExtractManagerComponent } from './page/extract-manager/extract-manager.component';
import { CometJobManagerComponent } from './page/comet-job-manager/comet-job-manager.component';
import { NraComponent } from './page/nra/nra.component';
import { ReportToolComponent } from './page/report-tool/report-tool.component';
import { ProcessManagerComponent } from './page/process-manager/process-manager.component';
import { ToolkitComponent } from './page/toolkit/toolkit.component';

// Services
import { AccountService } from './service/account.service';
import { SecurityService } from './service/security.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountDetailComponent,
    DashboardComponent,
    HomeComponent,
    DataManagerComponent,
    ExtractManagerComponent,
    CometJobManagerComponent,
    NraComponent,
    ReportToolComponent,
    ProcessManagerComponent,
    ToolkitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AccountService, SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
