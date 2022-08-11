import { Component, OnInit } from '@angular/core';
import {  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { AuthenthicationService } from 'src/app/services/authenthication.service';


export function passwordsMatchValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors| null=>{
const password = control.get('password')?.value;
const confirmPassword = control.get('confirmPassword')?.value;

// if statement comparing password values
if (password && confirmPassword && password !== confirmPassword ){
  return {
    passwordsDontMatch: true
  }
}
return null;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  // sign up form attributes
signUpForm= new FormGroup(
  {
  name: new FormControl('',Validators.required),
 email: new FormControl('',[Validators.email,Validators.required]),
 password: new FormControl('',Validators.required),
 confirmPassword: new FormControl('',Validators.required),
}, {validators : passwordsMatchValidator()}// check if passord matches

)


  constructor(private authService: AuthenthicationService, private toast: HotToastService, private router: Router) { }

  ngOnInit(): void {}

  get name() {
    return this.signUpForm.get('name');

  }
  get email() {
    return this.signUpForm.get('email');

  }
  get password() {
    return this.signUpForm.get('password');

  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');

  }

  submit() {
    if (!this.signUpForm.valid) {return};

      const {name, email, password,  }= this.signUpForm.value;
      if (typeof name !== 'string') return;
      if (typeof email !== 'string') return;
      if (typeof password !== 'string') return;


      this.authService
      .signUp(  name, email, password ).pipe(
        this.toast.observe({
          success: 'Congrats, you are Signed up',
          loading: 'signing in',
          error: ({ message }) => `${message}`,

        })
      ).subscribe(()=>{
        this.router.navigate(['/home'])
      })



}
}


