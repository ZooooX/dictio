import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  isLoggedIn = false;
  username: string;

  constructor(private authService : AuthService, private tokenStorageService : TokenStorageService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.isLoggedIn = true;
    }
  }

  logout(){
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
