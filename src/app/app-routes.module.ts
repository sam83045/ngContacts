import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { NewContactComponent } from "./components/new-contact/new-contact.component";

const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: ContactListComponent },
    { path: 'new', component: NewContactComponent },
];

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forRoot(routes)
    ]
})

export class AppRouterModule {

}