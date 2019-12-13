import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> b06a8923425332357620626aab38c5f0dc65ddbf

@Component({
  selector: 'app-socialpost',
  templateUrl: './socialpost.component.html',
  styleUrls: ['./socialpost.component.css']
})
export class SocialpostComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(public router:Router) { }
>>>>>>> b06a8923425332357620626aab38c5f0dc65ddbf

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  // onChangeEvent(){
  //   console.log("ïn fun");
    
  //   this.router.navigateByUrl("business/eventhost")
  // }
>>>>>>> b06a8923425332357620626aab38c5f0dc65ddbf
}
