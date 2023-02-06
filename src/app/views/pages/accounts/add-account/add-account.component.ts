import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import CalculateDate from 'src/app/shared/utils/caculate-date';
import { AccountService } from '../../../../core/services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss'],
})
export class AddAccountComponent implements OnInit {
  @Input() data: any;

  submitted: boolean = false;

  accountForm: FormGroup = new FormGroup({});

  action: string = 'Add';

  bsValue = new Date();
  bsRangeValue: Date[] = [];
  maxDate = new Date();
  minDate = new Date();

  datePickerOptions = {
    isAnimated: true,
    dateInputFormat: 'YYYY-MM-DD',
    containerClass: 'theme-blue',
  };

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private accountSerivce: AccountService
  ) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group(
      {
        avatar: [''],
        account: [
          '',
          [
            Validators.required,
            Validators.pattern('^[A-Za-z0-9_.]+$'),
            Validators.minLength(8),
            Validators.maxLength(8),
          ],
        ],
        name: ['', [Validators.required, Validators.maxLength(20)]],
        dob: ['', [Validators.required]],
        gender: ['Male', [Validators.required]],
        address: ['', [Validators.required, Validators.maxLength(200)]],
        email: ['', [Validators.required, Validators.email]],
      },
      {
        validators: [CalculateDate.age('dob')],
      }
    );

    if (this.data) {
      this.action = 'Update';
      this.accountForm.patchValue({
        account: this.data?.account,
        name: this.data?.name,
        dob: this.data?.dob,
        gender: this.data?.gender,
        address: this.data?.address,
        email: this.data?.email,
      });
    }

    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 80, 0, 1);
    this.maxDate = new Date(currentYear - 12, 0, 1);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.accountForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.accountForm.invalid) {
      return;
    } else {
      if (this.accountForm.value.gender == 'Male') {
        this.accountForm.patchValue({
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        });
      } else {
        this.accountForm.patchValue({
          avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
        });
      }

      if (this.data) {
        this.accountSerivce.updateAccount(
          this.accountForm.value,
          this.data?._id
        );
      } else {
        this.accountSerivce.addAccount(this.accountForm.value);
      }

      this.activeModal.close('Close click');
    }
  }
}
