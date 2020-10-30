import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm : FormGroup = new FormGroup({
    email : new FormControl(),
    username : new FormControl(),
    password : new FormControl(),
    roles : new FormControl()
  });

  rolesList = [
    {name : 'user' , explanation : 'Can only see the data !'},
    {name : 'admin' , explanation : 'Can see and update the data !'}
  ]

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submitSignUp(){

    this.authService.signup(this.signUpForm.value).subscribe(res => {
      this.router.navigate(['/signin']);
    },
    err => {
      console.log(err);
    });
  }

  getErrorMessage(inputName) {
    if (this.signUpForm.controls[inputName].hasError('required')) {
      return 'You must enter a value';
    }
    return;
  }
}
