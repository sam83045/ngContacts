import { NgModule } from "@angular/core";
import { SearchContactPipe } from "./search-contact.pipe";

@NgModule({
    declarations:[SearchContactPipe],
    exports:[SearchContactPipe]
})
export class PipesModule {

}