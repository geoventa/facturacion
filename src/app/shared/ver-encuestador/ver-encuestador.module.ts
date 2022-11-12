import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VerEncuestadorComponent} from './ver-encuestador.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
    declarations: [
        VerEncuestadorComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule
    ],
    exports: [
        VerEncuestadorComponent
    ]
})
export class VerEncuestadorModule {
}
