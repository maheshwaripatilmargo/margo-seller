import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseserviceService {
public baseUrl1;


  constructor() { 
    if(window.location.hostname == "localhost"){
      console.log('lcal');
<<<<<<< HEAD
      // this.baseUrl1 = 'http://ade48db0.ngrok.io/';
      this.baseUrl1 = 'http://192.168.100.74:8082/';
=======
      // this.baseUrl1="http://f93bdf6e.ngrok.io/";
      this.baseUrl1 = 'https://margo-dev-team.herokuapp.com/';
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
    }else{
      this.baseUrl1 = 'https://margo-dev-team.herokuapp.com/';
    }
  }
  public httpHeadersOptions() {
    let token = localStorage.getItem("accesToken");
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    if (token) {
      httpOptions.headers = httpOptions.headers.set('x-auth', token);
    }
    return httpOptions;
  }

}
