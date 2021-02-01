import { Component } from '@angular/core';
import { UserRegisterService } from './services/user-register.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { Login2Component } from './login2/login2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thd-app';
  constructor( public userRegister: UserRegisterService, private dialog:MatDialog) { }

  on_create(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.width = "60%"
    this.dialog.open(Login2Component);
  }


}
