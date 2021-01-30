import { Injectable } from '@angular/core';
import { CanActivate,  Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserRegisterService } from './../services/user-register.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userRegister: UserRegisterService, private router: Router) {}

  canActivate(): boolean {
    if (this.userRegister.loggedIn()){
      return true;
    }
    else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }


}
