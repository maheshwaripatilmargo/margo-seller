import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-getsocial',
  templateUrl: './getsocial.component.html',
  styleUrls: ['./getsocial.component.css']
})
export class GetsocialComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: AuthService) { }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    console.log(FacebookLoginProvider.PROVIDER_ID);
    


  }

   signOut(): void {
    
     
    localStorage.removeItem('fbToken');
    localStorage.clear();
    sessionStorage.clear();
    this.loggedIn = !true;
    this.authService.signOut();
     
   }

  ngOnInit() {
    if (localStorage.fbToken) {
      this.loggedIn = true;
    }
    
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user.facebook.picture.data.url);
     
    });
  }

}
