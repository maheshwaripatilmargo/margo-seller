import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-join-confirm',
  templateUrl: './join-confirm.component.html',
  styleUrls: ['./join-confirm.component.css']
})
export class JoinConfirmComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  showSuccess(modalName) {
    this.modalService.open(modalName, {})
  }
}
