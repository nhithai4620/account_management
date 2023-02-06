import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account.model';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private url = environment.apiUrl;

  private _accounts$ = new BehaviorSubject<Account[]>([]);

  public accounts$ = this._accounts$.asObservable();

  private _account$ = new BehaviorSubject<any>({});

  public account$ = this._account$.asObservable();

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getAccounts() {
    return this.http.get<Account>(this.url).subscribe({
      next: (res: any) => {
        this._accounts$.next(res);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  getAccount(id: String) {
    this.getAccounts();
    let accounts: Account[] = this._accounts$.getValue();
    let arr = accounts.filter((item) => item._id === id);
    this._account$.next(arr[0]);
  }

  addAccount(account: Account) {
    setTimeout(() => {
      let accounts: Account[] = this._accounts$.getValue();
      accounts.push(account);
      this._accounts$.next(accounts);
      this.toastr.success('Add new account success', 'Success !');
    }, 1000);
  }

  deleteAccount(id: String) {
    setTimeout(() => {
      let accounts: Account[] = this._accounts$.getValue();
      let arr = accounts.filter((item) => item._id != id);
      this._accounts$.next(arr);
      this.toastr.success('Delete account success', 'Success !');
    }, 1000);
  }

  updateAccount(account: Account, id: String) {
    setTimeout(() => {
      let accounts: Account[] = this._accounts$.getValue();

      const index = accounts.findIndex((obj) => {
        return obj._id === id;
      });

      accounts[index] = account;
      this._account$.next(accounts[index]);
      this._accounts$.next(accounts);
      this.toastr.success('Update account success', 'Success !');
    }, 1000);
  }
}
