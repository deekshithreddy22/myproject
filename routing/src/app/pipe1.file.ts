import{Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:"filter2",
})
export class Pssearchpipe implements PipeTransform{
    transform(employee:any, search:any):any{
        if(search===undefined) return employee;
        return employee.filter(function(employee){
            return employee.Employee_name.toLowerCase().includes(search.toLowerCase());
        })
        
    }
}