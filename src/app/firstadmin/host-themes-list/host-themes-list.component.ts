import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-host-themes-list',
  templateUrl: './host-themes-list.component.html',
  styleUrls: ['./host-themes-list.component.css']
})
export class HostThemesListComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  showConfirm(modalName) {
    this.modalService.open(modalName, {})
  } 

}
