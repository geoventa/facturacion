import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MisFacturasComponent} from './mis-facturas.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";

const routing: Routes = [
    {
        path: '',
        component: MisFacturasComponent
    },
];

@NgModule({
    declarations: [
        MisFacturasComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routing),
        SharedModule,
    ]
})
export class MisFacturasModule {
}
