import { Component } from '@angular/core';
import { UserRegisterService } from './services/user-register.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thd-app';
  constructor( public userRegister: UserRegisterService) { }

}
