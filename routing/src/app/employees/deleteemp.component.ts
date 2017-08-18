import { Component,OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { employees } from './../employee';
import { Pssearchpipe } from './../pipe1.file';
@Component({
  selector: 'app-delteemp',
  templateUrl: './deleteemp.component.html',
  providers:[AllService],
})
export class DeleteempComponent implements OnInit{

 employees : employees[]=[];


  constructor(private allservice : AllService) { }


  deleteEmployee(id:any){
  var employees = this.employees;
  this.allservice.deleteEmployee(id)
  .subscribe(data =>{
    if(data.n == 1){
        for(var i=0;i<employees.length;i++){
            if(employees[i]._id == id){
                employees.splice(i,1);
            }
            
        }
         window.alert("succesfully deleted...!");
    }
  })
}

  ngOnInit() {
    this.allservice.getEmployee()
    .subscribe(employees =>
    this.employees = employees);
  }
  
}