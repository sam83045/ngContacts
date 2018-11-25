import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { NewContactComponent } from "./new-contact.component";

@NgModule({
    declarations: [
        NewContactComponent
    ],
    imports: [CommonModule, ReactiveFormsModule]
})

export class NewContactModule {

}