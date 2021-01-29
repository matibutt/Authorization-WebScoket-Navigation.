import { UserRegisterService } from './../services/user-register.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor( private router: Router, private userService: UserRegisterService  ) {}


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
  }
}
