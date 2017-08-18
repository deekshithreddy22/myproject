import { Component } from '@angular/core';
import { Sssearchpipe } from './../pipe2.file';
import { AllService } from '../all.service';
import { customers} from './../customer';
@Component({
  selector: 'app-deleteclient',
  templateUrl: './deleteclient.component.html',
  providers:[AllService]
})
export class DeleteclientComponent {
  
  customers : customers[]=[];


  constructor(private allservice : AllService) { }


  deleteCustomer(id:any){
  var customers = this.customers;
  this.allservice.deleteCustomer(id)
  .subscribe(data =>{
    if(data.n == 1){
        for(var i=0;i<customers.length;i++){
            if(customers[i]._id == id){
                customers.splice(i,1);
            }
            
        }
         window.alert("succesfully deleted...!");
    }
  })
}

  ngOnInit() {
    this.allservice.getCustomer()
    .subscribe(customers =>
    this.customers = customers);
  }
}