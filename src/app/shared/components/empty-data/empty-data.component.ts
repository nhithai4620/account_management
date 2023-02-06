import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAccountComponent } from '../../../views/pages/accounts/add-account/add-account.component';

@Component({
  selector: 'app-empty-data',
  templateUrl: './empty-data.component.html',
  styleUrls: ['./empty-data.component.scss'],
})
export class EmptyDataComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openAdd(data: any) {
    const modalRef = this.modalService.open(AddAccountComponent, {
      centered: true,
      size: 'md',
    });
    modalRef.componentInstance.data = data;
  }
}
