import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAccountComponent } from '../add-account/add-account.component';
import { DeleteConfirmComponent } from 'src/app/shared/components/delete-confirm/delete-confirm.component';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../../../../core/models/account.model';
import { AccountService } from '../../../../core/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  id!: any;
  account!: Account;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.accountService.getAccount(this.id);
    this.accountService.account$.subscribe((res) => {
      this.account = res;
    });
  }

  openUpdate() {
    const modalRef = this.modalService.open(AddAccountComponent, {
      centered: true,
      size: 'md',
    });
    modalRef.componentInstance.data = this.account;
  }

  openDelete() {
    const modalRef = this.modalService.open(DeleteConfirmComponent, {
      centered: true,
      size: 'md',
    });
    modalRef.componentInstance.data = this.account;
  }
}
