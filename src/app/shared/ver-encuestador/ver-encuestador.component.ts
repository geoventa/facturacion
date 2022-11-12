import {Component, OnInit} from '@angular/core';
import {Encuestador} from '../../models/encuestador';

@Component({
    selector: 'app-ver-encuestador',
    templateUrl: './ver-encuestador.component.html',
    styleUrls: ['./ver-encuestador.component.scss']
})
export class VerEncuestadorComponent implements OnInit {
    encuestador: Encuestador = null;
    constructor() {
    }

    ngOnInit(): void {
    }

}
