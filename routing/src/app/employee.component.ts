import { Component } from '@angular/core';
import {AuthenticationService, User} from './login.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  providers:[AuthenticationService]
})
export class EmployeeComponent {
  constructor(
        private _service:AuthenticationService) {}
 emplogoutt() {
        this._service.logout();
         window.alert("logged out successfully...!");
            
      }
       
      
}
