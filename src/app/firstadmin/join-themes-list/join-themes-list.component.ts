import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-join-themes-list',
  templateUrl: './join-themes-list.component.html',
  styleUrls: ['./join-themes-list.component.css']
})
export class JoinThemesListComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  showConfirm(modalName) {
    this.modalService.open(modalName, {})
  } 
}
