import { InvestmentComponent } from './Lines/investment.component';
import { UpdateclientComponent } from './clients/updateclient.component';
import { UpdateempComponent } from './employees/updateemp.component';
import { EmpComponent } from './empdetails.component';
import { ViewempComponent } from './employees/viewemp.component';
import { DeleteempComponent } from './employees/deleteemp.component';
import { AddempComponent } from './employees/addemp.component';
import { EmployeeComponent } from './employee.component';

import { EloginComponent } from './elogin.component';

import { ViewclientComponent } from './clients/viewclient.component';
import { DeleteclientComponent } from './clients/deleteclient.component';
import { AddclientComponent } from './clients/addclient.component';
import { ClientComponent } from './client.component';

import { ManagerComponent } from './manager.component';
import { LoginComponent } from './login.component';
import { TransactionComponent } from './Transaction.component';
import { HotelComponent } from './Property/hotel.component';
import { AffordableComponent } from './Property/affordable.component';
import { IndustryComponent } from './Property/industry.component';
import { RetailComponent } from './Property/retail.component';
import { LandComponent } from './Property/land.component';
import { FamilyComponent } from './Property/family.component';
import { PropertyComponent } from './property.component';


import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
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





export const routes:Routes=[{path:'news',component:TransactionComponent},
         {path:'login',component:LoginComponent},
         {path:'login1',component:EloginComponent},
         
         
        

          {path:'berkadia',component:BerkadiaComponent,
 children: [
      { path: 'vision',    component:VisionComponent},
      { path: 'values',    component: ValuesComponent}, 
      { path: 'history',   component: HistoryComponent},
      { path: 'leadership', component: LeadershipComponent},
      { path:'offices' ,   component: OfficeComponent},
      { path: 'careers',   component: CareerComponent},
      { path:'ratings' ,   component: RatingComponent},
      ]},

      {path:'lines',component:LinesComponent,
 children: [
      { path: 'investment',    component:InvestmentComponent},
      { path: 'banking',    component: BankingComponent}, 
      { path: 'gse',   component: GseComponent},
      { path: 'hud', component: HudComponent},
      { path:'lending' ,   component: LendingComponent},
      { path: 'life',   component: LifeComponent},
      { path:'seniors' ,   component: SeniorsComponent},
      { path:'servicing' ,   component: ServicingComponent},
      { path:'server' ,   component: ServerComponent},
      { path:'asset' ,   component: AssetComponent},
      ]},
      
        {path:'property',component:PropertyComponent,
 children: [
      { path: 'family',    component:FamilyComponent},
      { path: 'office',    component: OfficeComponent}, 
      { path: 'affordable',   component: AffordableComponent},
      { path: 'retail', component: RetailComponent},
      { path:'hotel' ,   component: HotelComponent},
      { path: 'industrial',   component: IndustryComponent},
      { path:'land' ,   component: LandComponent},
 ]},

      
         {path:'manager',component:ManagerComponent, 
 children: [
      { path: 'viewclients',    component:ViewclientComponent},
      { path: 'addclients',    component: AddclientComponent}, 
      { path: 'deleteclients',   component: DeleteclientComponent},
      { path: 'updateclients',   component: UpdateclientComponent},
      
      ]},
      
         {path:'employeedetails',component:EmployeeComponent,
 children: [
      { path: 'viewemployees',    component:ViewempComponent},
      { path: 'addemployees',    component: AddempComponent}, 
      { path: 'deleteemployees',   component: DeleteempComponent},
       { path: 'updateemployees',   component: UpdateempComponent},
      
      ]},];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);