import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-host-confirm',
  templateUrl: './host-confirm.component.html',
  styleUrls: ['./host-confirm.component.css']
})
export class HostConfirmComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  showSuccess(modalName) {
    this.modalService.open(modalName, {})
  }

}
