import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent implements OnInit {

  constructor(private location: Location) {

   }

  ngOnInit() {
  }
  goToMarketLanding() {
    this.location.go('/directseller/propspectLanding');
  }

}
