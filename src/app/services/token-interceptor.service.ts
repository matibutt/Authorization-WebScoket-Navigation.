import { UserRegisterService } from './user-register.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor  {

  constructor(private injector: Injector, private userRegister: UserRegisterService) { }
  intercept(req, next){
    const tokenAuthen = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userRegister.getToken()}`
      }
    });
    return next.handle(tokenAuthen);
  }
}
