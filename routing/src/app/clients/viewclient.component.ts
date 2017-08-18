import { Component,OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { customers } from './../customer';
import { Sssearchpipe } from './../pipe2.file';
@Component({
  selector: 'app-viewclient',
  templateUrl: './viewclient.component.html',
 providers:[AllService],
})
export class ViewclientComponent  implements OnInit {
  customers : customers[]=[];
 constructor(private allservice : AllService) { }

  ngOnInit(){
    this.allservice.getCustomer()
    .subscribe(customers =>
    this.customers = customers);
}
}