import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRouterModule } from './app-routes.module';
import { ContactListModule } from './components/contact-list/contact-list.module';
import { RouterModule } from '@angular/router';
import { NewContactModule } from './components/new-contact/new-contact.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    ContactListModule,
    NewContactModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
