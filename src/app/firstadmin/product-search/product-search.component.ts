import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor(private modalService: NgbModal) {}


  ngOnInit() {
  }

  showProductInformation(modalName) {
    this.modalService.open(modalName, {
      windowClass: 'animated slideInDown'
    });
  }

}
