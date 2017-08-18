import {Component, ElementRef} from '@angular/core';
import {AuthenticationService, User} from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 providers:[AuthenticationService],
})
export class LoginComponent {
     public user = new User('','');
    public errorMsg = '';
 
    constructor(
        private _service:AuthenticationService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
            
        }
    }
  
}
