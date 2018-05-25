import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth.service';
import { SocialUser } from '../../entities/user';
import { GoogleLoginProvider } from '../../providers/google-login-provider';
import { FacebookLoginProvider } from '../../providers/facebook-login-provider';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {
  user: SocialUser;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}