import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-campaign',
  templateUrl: './confirm-campaign.component.html',
  styleUrls: ['./confirm-campaign.component.css']
})
export class ConfirmCampaignComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  showSuccess(modalName) {
    this.modalService.open(modalName, {})
  }

}
