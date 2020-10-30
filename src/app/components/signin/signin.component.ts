import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm : FormGroup = new FormGroup({
    username : new FormControl(),
    password : new FormControl()
  });

  username  = new FormControl('', [Validators.required, Validators.email]);
  constructor(private authService : AuthService, private tokenStorageService : TokenStorageService) { }

  ngOnInit(): void {
  }


  submitSignIn(){
    this.authService.login(this.signInForm.value).subscribe(res => {
      this.tokenStorageService.saveToken(res.accessToken);
      window.location.reload();
    },
    err => {
      console.log(err);
    });
  }

  getErrorMessage(inputName) {
    if (this.signInForm.controls[inputName].hasError('required')) {
      return 'You must enter a value';
    }
    return;
  }
}
