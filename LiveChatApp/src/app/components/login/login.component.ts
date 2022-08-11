import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenthicationService } from 'src/app/services/authenthication.service';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //login form

  loginform = new UntypedFormGroup({
    email: new UntypedFormControl('',[Validators.required,Validators.email]),// adding validations
    password: new UntypedFormControl('',Validators.required),



  });


  constructor(private authService: AuthenthicationService,

    private router: Router,
    private toast: HotToastService


  ) { }

  ngOnInit(): void {
  }

 get email(){
   return this.loginform.get('email')
 }

 get password(){
  return this.loginform.get('password')
}



// check if the login form is valid and submit
submit(){

  if(!this.loginform.valid){
    return;
  }
  const{email,password} = this.loginform.value;
  this.authService.login(email,password).pipe( this.toast.observe({
    // Login Message authentication
    success: 'Logged in successfully',
    loading: 'Logging in...',
    error: ({ message }) => `There was an error: ${message} `
  })

  ).subscribe(()=>{
    this.router.navigate(['/home'])// route to home page when logging in
  })

}
}

