import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { AddAccountModule } from './add-account/add-account.module';
import { DeleteConfirmModule } from '../../../shared/components/delete-confirm/delete-confirm.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EmptyDataModule } from '../../../shared/components/empty-data/empty-data.module';

const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./account-details/account-details.module').then(
        (m) => m.AccountDetailsModule
      ),
  },
];

@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxPaginationModule,
    MatButtonToggleModule,
    Ng2SearchPipeModule,
    OrderModule,
    NgbModule,
    MdbDropdownModule,
    AddAccountModule,
    DeleteConfirmModule,
    DragDropModule,
    EmptyDataModule,
  ],
})
export class AccountsModule {}
