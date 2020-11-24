import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  loginErrorStatus : boolean;
  

  ngOnInit(): void {  
  }

  
  constructor(private router: Router, private frmbuilder:FormBuilder) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }


  get login() {
    return this.loginForm.controls;
  }

  onSubmit(){
    if(this.login.email.value == "admin@ibm.com" && this.login.password.value == "password")
    {
      alert('Welcome !');
      this.router.navigate(['/dashboard']);
    }
    else{  
      
      this.loginErrorStatus=true;
      console.log(this.loginErrorStatus)
      
     
    }
  }

  
}
