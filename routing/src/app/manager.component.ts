import { Component } from '@angular/core';
import {AuthenticationService, User} from './login.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  providers:[AuthenticationService]
})
export class ManagerComponent {
  constructor(
        private _service:AuthenticationService) {}
 logoutt() {
        this._service.logout();
            
      }
      
}
