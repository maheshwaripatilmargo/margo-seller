import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socialpost',
  templateUrl: './socialpost.component.html',
  styleUrls: ['./socialpost.component.css']
})
export class SocialpostComponent implements OnInit {
  public postValue:String = 'first';
  constructor(public router:Router) { }

  ngOnInit() {
   
  
  }

  checkPosting(val){
    console.log("radioTwoWorking:",val);
    this.postValue = val;
  }
  
}
