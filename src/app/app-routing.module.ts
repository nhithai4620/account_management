import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accounts',
    pathMatch: 'full',
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./views/pages/accounts/accounts.module').then(
        (m) => m.AccountsModule
      ),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./views/pages/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
