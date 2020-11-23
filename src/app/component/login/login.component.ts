import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
// import { MatDialog } from '@angular/material';
// import {User} from 'src/app/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  userid: string;
  password: string;

  // const users: User[] = [{ userid: 'test', password: 'test' }];

 ngOnInit(): void {
   console.log("inside ngoninit");
   
  }


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