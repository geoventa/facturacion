import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModificarEncuestadorComponent} from './modificar-encuestador.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ModificarEncuestadorComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        FormsModule
    ],
    exports: [
        ModificarEncuestadorComponent
    ]
})
export class ModificarEncuestadorModule {
}
