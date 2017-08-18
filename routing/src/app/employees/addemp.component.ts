import { Component } from '@angular/core';
import { AllService } from '../all.service';
import { employees } from './../employee';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css'],
   providers:[AllService],
})
export class AddempComponent {
  employees : employees[]=[];
  _id?:string;
  Employee_name: string;
  Age: number;
  Gender: string;
  Date_birth: string;
  Experience_info: number;
  Adress_info: string;
  Project_info : string;

  constructor(private allservice : AllService) { }
 addEmployee()
  {
    const newEmployee ={
        Employee_name : this.Employee_name,
        Age : this.Age,
        Gender : this.Gender,
        Date_birth : this.Date_birth,
        Experience_info : this.Experience_info,
        Adress_info :this . Adress_info,
        Project_info : this . Project_info,
        
    }
      this.allservice.addEmployee(newEmployee)
          .subscribe(employees =>{
                this.employees.push(employees);
          })
           window.confirm("succesfully added...!");
  } 
}