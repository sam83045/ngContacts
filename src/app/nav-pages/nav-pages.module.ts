import { NgModule } from "@angular/core";
import { NavPagesComponent } from "./nav-pages.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [NavPagesComponent],
    exports: [NavPagesComponent],
    imports:[RouterModule]
})

export class NavPagesModule {

}