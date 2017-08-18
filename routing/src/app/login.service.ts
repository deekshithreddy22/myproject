import {Injectable} from '@angular/core';
import {Router,RouterModule} from '@angular/router';
 
export class User {
  constructor(
    public username: string,
    public password: string) { }
}
 
var users = [
  new User('deekshith','deekshith123'),
  new User('gopi','gopi123'),
  new User('venkatesh','venkatesh123'),
  new User('manoj','manoj123'),
];
 
@Injectable()
export class AuthenticationService {
 
  constructor(
    private _router: Router){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }
  authenticatedUser:string;
 
  login(user){
    var authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", this.authenticatedUser);
      this._router.navigate(['manager']);      
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  } 


  
}