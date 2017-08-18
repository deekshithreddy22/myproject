import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { customers } from './customer';
import {  employees} from './employee';


@Injectable()
export class AllService {

  constructor (private http: Http) { }
    //**********************************Movie RELATED*********************************************
  //retrieving Movies
getCustomer(){
  return this.http.get('http://localhost:3000/apis/customerinfo')
    .map(res => res.json());
}

  //adding Movies
addCustomer(newCustomer){
  var headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/apis/addcustomerinfo',newCustomer,{headers:headers})
    .map(res => res.json());
}

updateCustomer(id,newCustomer){
   let headers = new Headers();
   headers.append('Content-Type','application/json');
   var url = 'http://localhost:3000/apis/updatecustomerinfo/'+id;
   return this.http.put(url,newCustomer,{headers:headers})
   .map(res =>res.json())
 }


//deleting Movies
deleteCustomer(id){
  return this.http.delete('http://localhost:3000/apis/deletecustomerinfo/'+id)
    .map(res => res.json())
}


       //***************************actor related*********************************************
  //retrieving Actor
getEmployee(){
  return this.http.get('http://localhost:3000/apis/employeeinfo')
    .map(res => res.json());
}

  //adding Actors
addEmployee(newEmployee){
  var headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/apis/addemployeeinfo',newEmployee,{headers:headers})
    .map(res => res.json())
}

//deleting Actors
deleteEmployee(id){
  return this.http.delete('http://localhost:3000/apis/deleteemployeeinfo/'+id)
    .map(res => res.json())
}

updateEmployee(id,newEmployee){
   let headers = new Headers();
   headers.append('Content-Type','application/json');
   var url = 'http://localhost:3000/apis/updateemployeeinfo/'+id;
   return this.http.put(url,newEmployee,{headers:headers})
   .map(res =>res.json())
 }


}