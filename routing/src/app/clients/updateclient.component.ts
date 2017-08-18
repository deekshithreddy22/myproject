import { customers } from './../customer';
import { Component } from '@angular/core';
import { AllService } from '../all.service';
@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css'],
  providers:[AllService],
})
export class UpdateclientComponent{
 customers : customers[]=[];
 id:string;
  Customer_name: string;
  Age: number;
  Gender: string;
  Date_birth: string;
  Company_info: string;
  Adress_info: string;
  customername:string;

  
  constructor(private allservice : AllService) { }
   ngOnInit() {
    this.allservice.getCustomer()
    .subscribe(customers =>
    this.customers = customers);
  }
   view(){
    for(var i=0;i<this.customers.length;i++)
      {
          if(this.customers[i].Customer_name.toString() == this.customername){
                this.Customer_name = this.customers[i].Customer_name.toString();
                this.Age = this.customers[i].Age;
                this.Gender = this.customers[i].Gender.toString();
                this.Date_birth = this.customers[i].Date_birth.toString();
                this.Company_info = this.customers[i].Company_info.toString();
                this.Adress_info = this.customers[i].Adress_info.toString();
                   this.id = this.customers[i]._id;
          }
    }
   }

    updateclient(id)
    {
      const newCustomer ={
        Customer_name : this.Customer_name,
        Age : this.Age,
        Gender : this.Gender,
        Date_birth : this.Date_birth,
        Company_info : this.Company_info,
        Adress_info : this.Adress_info,
    }
      this.allservice.updateCustomer(this.id,newCustomer)
          .subscribe(customers =>{
                this.customers.push(customers);
          })
              window.alert("succesfully updated...!");
  }
}
