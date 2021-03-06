import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../services/user-register.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-singup2',
  templateUrl: './singup2.component.html',
  styleUrls: ['./singup2.component.css']
})
export class Singup2Component implements OnInit {

  signInForm: FormGroup;
  successMessage: string = '';


  constructor( private router: Router,
               private userService: UserRegisterService,
               private formBuilder: FormBuilder,
               private http: HttpClient,
               public dialogRef : MatDialogRef<Singup2Component> )
    {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required, this.passValidator])

    });
    this.signInForm.controls.password.valueChanges
    .subscribe(
      x => this.signInForm.controls.confirm_password.updateValueAndValidity()
    );
  }

  ngOnInit(): void {
  }

  isValid(controlName) {
    return this.signInForm.get(controlName).invalid && this.signInForm.get(controlName).touched;
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }

   resetForm(){
     this.signInForm.reset();
   }

   onSubmit(){
    if (!this.signInForm.valid || (this.signInForm.controls.password.value !== this.signInForm.controls.confirm_password.value)){
      console.log('Invalid Form');
      return;
    }
    this.userService.register(JSON.stringify(this.signInForm.value))
    .subscribe(
      data =>  {
        alert('Your account has been created!');
        this.signInForm.reset();
        this.router.navigate(['/login']); },
        error => {
          alert('Please fill the form correctly.');
        });    // console.log(JSON.stringify(this.cdregisterForm.value));
        this.onClose();
  }

  onClose(){
    this.signInForm.reset();
    this.dialogRef.close();
  }

}
