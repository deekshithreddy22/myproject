import {Component, ElementRef} from '@angular/core';
import {AuthenticationempService, User} from './employee.service';
@Component({
  selector: 'app-elogin',
  templateUrl: './elogin.component.html',
 providers:[AuthenticationempService],
})
export class EloginComponent {
     public user = new User('','');
    public errorMsg = '';
 
    constructor(
        private _service:AuthenticationempService) {}
 
    emplogin() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
            
        }
         window.alert(" logged in succesfully ...!");
    }
  
}