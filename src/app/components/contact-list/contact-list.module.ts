import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { ContactListComponent } from "./contact-list.component";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
    declarations: [ContactListComponent],
    imports: [
        CommonModule, 
        FormsModule,
        PipesModule,
        RouterModule,
    ]
})

export class ContactListModule {

}