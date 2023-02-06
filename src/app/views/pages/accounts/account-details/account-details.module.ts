import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailsComponent } from './account-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AccountDetailsComponent,
  },
];

@NgModule({
  declarations: [AccountDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AccountDetailsModule {}
