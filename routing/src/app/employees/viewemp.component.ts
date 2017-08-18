import { Pssearchpipe } from './../pipe1.file';
import { Component,OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { employees } from './../employee';
@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  providers: [AllService]
})
export class ViewempComponent implements OnInit{
  employees : employees[]=[];

  constructor(private allservice : AllService) { }

  ngOnInit(){
    this.allservice.getEmployee()
    .subscribe(employees =>
    this.employees = employees);
}

}