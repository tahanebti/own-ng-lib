import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'tn-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 
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

 Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})


   
  }


   loggedIn = false;


}
