import { Component, OnInit } from '@angular/core';
import {CambioTituloService} from '../../../services/cambio-titulo.service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

    titulo: string;

    constructor(
        private _cambioTituloService: CambioTituloService) { }

    ngOnInit(): void {
        this._cambioTituloService.event.subscribe((item) => {
            if(item) {
                this.titulo = item.toUpperCase();
            }
        });
    }

}
