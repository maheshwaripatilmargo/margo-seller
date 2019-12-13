import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socialpost',
  templateUrl: './socialpost.component.html',
  styleUrls: ['./socialpost.component.css']
})
export class SocialpostComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  // onChangeEvent(){
  //   console.log("ïn fun");
    
  //   this.router.navigateByUrl("business/eventhost")
  // }
}
