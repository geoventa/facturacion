import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutenticacionPorTokenComponent} from './autenticacion-por-token.component';
import {RouterModule, Routes} from '@angular/router';

const routing: Routes = [
    {
        path: '',
        component: AutenticacionPorTokenComponent
    },
];

@NgModule({
  declarations: [AutenticacionPorTokenComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(routing),
  ]
})
export class AutenticacionPorTokenModule { }
