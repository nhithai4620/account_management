import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAccountComponent } from './add-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [AddAccountComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BsDatepickerModule],
  exports: [AddAccountComponent],
})
export class AddAccountModule {}
