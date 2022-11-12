import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrarEncuestadorComponent} from './registrar-encuestador.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        RegistrarEncuestadorComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        FormsModule
    ],
    exports: [
        RegistrarEncuestadorComponent
    ]
})
export class RegistrarEncuestadorModule {
}
