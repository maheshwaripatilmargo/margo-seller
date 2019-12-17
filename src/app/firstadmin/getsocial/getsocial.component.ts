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

  constructor(private authService: AuthService, public fb: FbService,private cookieService: CookieService) { }

  

  

   ngOnInit() {
    if (localStorage.fbToken) {

      this.loggedIn = true;
    }
   
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user.facebook.picture.data.url);
      // console.log("@@@", this.user);
     
    }
    );
   }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    // localStorage.setItem('fbToken', this);
    let token = localStorage.getItem("accesToken")

    if (this.loggedIn) {
      let obj = {
        fbid: this.user.id,
        fbusername: this.user.name,
        fbprofilepic: this.user.photoUrl,
        fbauth: this.user.authToken
      }
      this.fb.addingFbUsers(obj, token).subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);

      })

    }
  }
  signOut(): void {
    console.log("haii");
     
    // CookieService.cle();
    // deleteAll(path?:string,domain?:string):void;
    
    
  
    localStorage.clear();
    sessionStorage.clear();
  
    
    // this.loggedIn = false;
    this.authService.signOut();
    this.cookieService.deleteAll('authtoken');
    localStorage.removeItem('fbToken');
    localStorage.removeItem('authToken');

  }
}

