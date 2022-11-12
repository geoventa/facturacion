import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConsultarEncuestasComponent} from './consultar-encuestas.component';
import {RouterModule, Routes} from '@angular/router';

const routing: Routes = [
    {
        path: '',
        component: ConsultarEncuestasComponent
    },
];

@NgModule({
    declarations: [
        ConsultarEncuestasComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routing),
    ]
})
export class ConsultarEncuestasModule {
}
