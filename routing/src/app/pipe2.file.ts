import{Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:"filter3",
})
export class Sssearchpipe implements PipeTransform{
    transform(customer:any, search:any):any{
        if(search===undefined) return customer;
        return customer.filter(function(customer){
            return customer.Customer_name.toLowerCase().includes(search.toLowerCase());
        })
        
    }
}