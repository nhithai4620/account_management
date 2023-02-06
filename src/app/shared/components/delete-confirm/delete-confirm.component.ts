import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '../../../core/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss'],
})
export class DeleteConfirmComponent implements OnInit {
  @Input() data: any;

  constructor(
    public activeModal: NgbActiveModal,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onDelete() {
    this.accountService.deleteAccount(this.data?._id);
    this.activeModal.close('Close click');
    this.router.navigate(['/accounts']);
  }
}
