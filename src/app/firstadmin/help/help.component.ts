import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(public router:Router) {
    
   this.router.navigateByUrl("directseller/help")
   
   }

  ngOnInit() {
   
  }

}
