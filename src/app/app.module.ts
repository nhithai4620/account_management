import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {
  BsDatepickerModule,
  BsDatepickerConfig,
} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [BsDatepickerConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
