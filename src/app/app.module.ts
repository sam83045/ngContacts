import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToasterModule, ToasterService } from 'angular2-toaster';


import { AppComponent } from './app.component';
import { AppRouterModule } from './app-routes.module';
import { ContactListModule } from './components/contact-list/contact-list.module';
import { RouterModule } from '@angular/router';
import { NewContactModule } from './components/new-contact/new-contact.module';
import { NavPagesModule } from './nav-pages/nav-pages.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    ContactListModule,
    HttpClientModule,
    NavPagesModule,
    NewContactModule,
    RouterModule,
    ToasterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
