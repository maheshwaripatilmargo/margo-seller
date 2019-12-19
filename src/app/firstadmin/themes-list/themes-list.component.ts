import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }
  showConfirm(modalName) {
    this.modalService.open(modalName, {})
  }
}
