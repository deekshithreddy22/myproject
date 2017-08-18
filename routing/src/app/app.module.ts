import { InvestmentComponent } from './Lines/investment.component';
import { Pssearchpipe } from './pipe1.file';
import { AuthenticationService } from './login.service';
import { AuthenticationempService } from './employee.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import { routing, appRoutingProviders } from './app.route';
import { CareerComponent } from './BERKADIA/careers.component';
import { OfficeComponent } from './BERKADIA/offices.component';
import { LeadershipComponent } from './BERKADIA/leadership.component';
import { RatingComponent } from './BERKADIA/ratings.component';
import { HistoryComponent } from './BERKADIA/history.component';
import { ValuesComponent } from './BERKADIA/values.component';
import { VisionComponent } from './BERKADIA/vision.component';
import { BerkadiaComponent } from './Berkadia.component';

import { LinesComponent } from './lines.component';
import {AssetComponent} from './Lines/asset.component';
import {BankingComponent} from './Lines/banking.component';
import {SeniorsComponent} from './Lines/seniors.component';
import {ServicingComponent} from './Lines/servicing.component';
import {ServerComponent} from './Lines/server.component';
import {LifeComponent} from './Lines/life.component';
import {HudComponent} from './Lines/hud.component';
import {LendingComponent} from './Lines/lending.component';
import {GseComponent} from './Lines/gse.component';

import { HotelComponent } from './Property/hotel.component';
import { AffordableComponent } from './Property/affordable.component';
import { IndustryComponent } from './Property/industry.component';
import { RetailComponent } from './Property/retail.component';
import { LandComponent } from './Property/land.component';
import { FamilyComponent } from './Property/family.component';
import { PropertyComponent } from './property.component';
import { TransactionComponent } from './Transaction.component';
import { LoginComponent } from './login.component';
import { ManagerComponent } from './manager.component';


import { ViewclientComponent } from './clients/viewclient.component';
import { DeleteclientComponent } from './clients/deleteclient.component';
import { AddclientComponent } from './clients/addclient.component';
import { ClientComponent } from './client.component';

import { EmployeeComponent } from './employee.component';
import { EloginComponent } from './elogin.component';

import { ViewempComponent } from './employees/viewemp.component';
import { DeleteempComponent } from './employees/deleteemp.component';
import { AddempComponent } from './employees/addemp.component';
import { EmpComponent } from './empdetails.component';
import { AllService } from 'app/all.service';
import {Sssearchpipe} from './pipe2.file';
import { UpdateempComponent } from './employees/updateemp.component';
import { UpdateclientComponent } from './clients/updateclient.component';





@NgModule({
  declarations: [
    AppComponent,CareerComponent,BerkadiaComponent,VisionComponent,ValuesComponent,RatingComponent,OfficeComponent,LeadershipComponent,HistoryComponent,
   LinesComponent,AssetComponent,BankingComponent,SeniorsComponent,ServicingComponent,ServerComponent,LifeComponent,GseComponent,LendingComponent,HudComponent,
    TransactionComponent,HotelComponent,PropertyComponent,FamilyComponent,LandComponent,RetailComponent,IndustryComponent,AffordableComponent,
  LoginComponent,ManagerComponent,ViewclientComponent,DeleteclientComponent,AddclientComponent,ClientComponent,EmployeeComponent,EloginComponent,ViewempComponent,AddempComponent,
  DeleteempComponent,EmpComponent,Sssearchpipe,Pssearchpipe,UpdateempComponent,UpdateclientComponent,InvestmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

  ],
  providers: [appRoutingProviders,AllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
