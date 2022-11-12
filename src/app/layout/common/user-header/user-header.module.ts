import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserHeaderComponent} from "./user-header.component";


@NgModule({
    declarations: [UserHeaderComponent],
    exports: [UserHeaderComponent],
    imports: [
        CommonModule
    ]
})
export class UserHeaderModule {
}
