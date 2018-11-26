import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ContactListComponent } from "./contact-list.component";

@NgModule({
    declarations: [ContactListComponent],
    imports: [CommonModule, RouterModule]
})

export class ContactListModule {

}