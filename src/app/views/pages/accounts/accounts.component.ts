import { Component, OnInit } from '@angular/core';
import { Account } from '../../../core/models/account.model';
import { AccountService } from '../../../core/services/account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAccountComponent } from './add-account/add-account.component';
import { DeleteConfirmComponent } from '../../../shared/components/delete-confirm/delete-confirm.component';
import { Router } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  accountList: Account[] = [];
  searchValue: any;
  key: string = 'id';
  reverse: boolean = false;
  p: number = 1;
  itemsPerPage: number = 10;
  view: String = 'List';

  constructor(
    private accountService: AccountService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accountService.getAccounts();
    this.accountService.accounts$.subscribe((data: Account[] = []) => {
      this.accountList = data;
    });
  }

  setSort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  openDetails(id: String) {
    this.router.navigate(['/accounts', id]);
  }

  openAdd(data: any) {
    const modalRef = this.modalService.open(AddAccountComponent, {
      centered: true,
      size: 'md',
    });
    modalRef.componentInstance.data = data;
  }

  openDelete(data: any) {
    const modalRef = this.modalService.open(DeleteConfirmComponent, {
      centered: true,
      size: 'md',
    });
    modalRef.componentInstance.data = data;
  }

  drop(event: CdkDragDrop<Account[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
