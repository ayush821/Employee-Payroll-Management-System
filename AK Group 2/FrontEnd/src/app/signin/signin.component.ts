import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeOfUser:new FormControl()
  });
  msg:string=""
  constructor(public ls:LoginService,public router:Router) { }

  ngOnInit(): void {
  }

  signin(){
    let login = this.loginRef.value;
    console.log(login);
    this.ls.signIn(login).subscribe({
      next:(result:any)=>{
        console.log(result);
        if(result=="Admin sucessfully login"){
          sessionStorage.setItem("userDetails",login.emailid);
          this.router.navigate(["adminHome"])
      }else if(result=="User successfully login"){
        sessionStorage.setItem("userDetails",login.emailid);
        this.router.navigate(["userHome"])
      }else {
          this.msg=result;
      }
    },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }
}