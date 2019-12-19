import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-firstadmin',
  templateUrl: './firstadmin.component.html',
  styleUrls: ['./firstadmin.component.css']
})
export class FirstadminComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }

}
