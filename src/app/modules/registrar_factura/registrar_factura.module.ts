import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarFacturaComponent } from './registrar-factura.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";

const routing: Routes = [
    {
        path: '',
        component: RegistrarFacturaComponent
    },
];

@NgModule({
  declarations: [
    RegistrarFacturaComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routing),
        MatRadioModule,
        MatInputModule,
    ]
})
export class Registrar_facturaModule { }
