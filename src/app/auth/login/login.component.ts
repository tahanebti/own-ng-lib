import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  private readonly userDisposable: Subscription|undefined;

  showLoginButton = false;
  showLogoutButton = false;
  myForm: FormGroup;
  submitted = false
  loading = false
  constructor(

    private fb: FormBuilder,
    private router: Router,
     
     ) {
 

    this.myForm = this.fb.group({
      usernameOrEmail: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });


  

  }

  

  get f() { return this.myForm.controls; }

  get email() {
    return this.myForm.get('email')
  }

  ngOnInit(): void {

   }



  



  logout() {
   // this.auth.logout()
  }




    ngOnDestroy(): void {
    if (this.userDisposable) {
      this.userDisposable.unsubscribe();
    }
  }


  springLogin(loginForm){

    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.myForm.invalid) {
     return;
 }


    let usernameOrEmail = loginForm.value.usernameOrEmail
    let password =  loginForm.value.password

    if(usernameOrEmail === 'taha' && password === '12345678'){
      this.router.navigate(['/dashboard', 'categories'])
    }else{
      console.log('sorry' )
    }

  
  }


   loggedIn = false;



}








