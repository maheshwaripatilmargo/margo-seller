import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { FbService } from 'src/app/services/fbservice/fb.service';

import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-getsocial',
  templateUrl: './getsocial.component.html',
  styleUrls: ['./getsocial.component.css']
})
export class GetsocialComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  cookieValue = 'UNKNOWN';

  constructor(private authService: AuthService, private fb: FbService,private cookieService: CookieService) { }

   ngOnInit() {
    if (localStorage.fbToken) {

      this.loggedIn = true;
    }
   
   }
  signInWithFB(): void {
    let token = localStorage.getItem("accesToken")
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user.facebook.picture.data.url);
      // console.log("@@@", this.user);
      if (this.loggedIn) {
        let obj = {
          fbid: user.id,
          fbusername: user.name,
          fbprofilepic: user.photoUrl,
          fbauth: user.authToken
        }
        console.log(user.id);
        console.log(user.name);
        console.log(user.photoUrl);
        console.log(user.authToken);
        
        this.fb.addingFbUsers(obj, token).subscribe(data => {
          console.log(data);
        }, err => {
          console.log(err);

        })

      }
    });

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
   
  }
  signOut(): void {
    console.log("haii",this.cookieService.deleteAll());
    this.cookieService.delete;

    this.cookieService.deleteAll();
    localStorage.clear();
    sessionStorage.clear();
  
    
     this.loggedIn = false;
    this.authService.signOut();
    
    localStorage.removeItem('fbToken');
    localStorage.removeItem('authToken');

  }
}

