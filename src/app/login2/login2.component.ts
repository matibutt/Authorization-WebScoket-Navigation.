import { UserRegisterService } from './../services/user-register.service';
import { MatDialogRef} from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { Singup2Component } from '../singup2/singup2.component';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})

export class Login2Component {

 
  loginForm: FormGroup;

  constructor( private router: Router, 
      private userService: UserRegisterService,
      private dialog:MatDialog,
      public dialogRef : MatDialogRef<Login2Component>  ) {}


  ngOnInit(): void {
   this.loginForm = new FormGroup({
     email: new FormControl('', [
       Validators.required,
       Validators.email ]),
     password: new FormControl('', [
       Validators.required ])
   });
  }
  onSubmit(){
    if (this.loginForm.invalid){
      console.log('Invalid Form');
      return;
    }
    this.userService.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data => {console.log(data); localStorage.setItem('token', data.toString()); this.router.navigate(['/International']); },
      error => {}
      );

      this.onClose(); 
  }

  onClose(){
    this.loginForm.reset();
    this.dialogRef.close();
  }

  on_signup(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.width = "40%"
    this.dialog.open(Singup2Component);
  }
}

