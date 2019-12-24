import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {Location} from '@angular/common';

>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c

@Component({
  selector: 'app-firstadmin',
  templateUrl: './firstadmin.component.html',
  styleUrls: ['./firstadmin.component.css']
})
export class FirstadminComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }
=======
  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c

}
