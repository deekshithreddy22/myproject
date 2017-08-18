import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { employees } from './../employee';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css'],
   providers:[AllService],
})
export class UpdateempComponent implements OnInit {
  employees : employees[]=[];
  employeename:string;
  id:string;
  Employee_name: string;
  Age: number;
  Gender: string;
  Date_birth: string;
  Experience_info: number;
  Adress_info: string;
  Project_info : string;

  constructor(private allservice : AllService) { }
  ngOnInit() {
    this.allservice.getEmployee()
    .subscribe(employees =>
    this.employees = employees);
  }
   view(){
    for(var i=0;i<this.employees.length;i++)
      {
          if(this.employees[i].Employee_name.toString() == this.employeename){
                this.Employee_name = this.employees[i].Employee_name.toString();
                this.Age = this.employees[i].Age;
                this.Gender = this.employees[i].Gender.toString();
                this.Date_birth = this.employees[i].Date_birth.toString();
                this.Experience_info = this.employees[i].Experience_info;
                this.Adress_info = this.employees[i].Adress_info.toString();
                this.Project_info = this.employees[i].Project_info.toString();
                   this.id = this.employees[i]._id;
          }
    }
   }

    updateemployee(id)
    {
      const newEmployee ={
        Employee_name : this.Employee_name,
        Age : this.Age,
        Gender : this.Gender,
        Date_birth : this.Date_birth,
        Experience_info : this.Experience_info,
        Adress_info : this.Adress_info,
        Project_info : this.Project_info
    }
      this.allservice.updateEmployee(this.id,newEmployee)
          .subscribe(employees =>{
                this.employees.push(employees);
          })
              window.alert("succesfully updated...!");
  }
}