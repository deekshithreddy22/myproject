import { customers } from './../customer';
import { Component } from '@angular/core';
import { AllService } from '../all.service';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css'],
  providers:[AllService],
})
export class AddclientComponent{
 customers : customers[]=[];
 _id?:string;
  Customer_name: string;
  Age: number;
  Gender: string;
  Date_birth: string;
  Company_info: string;
  Adress_info: string;

  
  constructor(private allservice : AllService) { }

  addCustomer()
  {
    const newCustomer ={
        Customer_name : this.Customer_name,
        Age : this.Age,
        Gender : this.Gender,
        Date_birth : this.Date_birth,
        Company_info : this.Company_info,
        Adress_info :this . Adress_info,
        
    }
      this.allservice.addCustomer(newCustomer)
          .subscribe(customers =>{
                this.customers.push(customers);
          })
           window.alert("succesfully added...!");
  } 
}