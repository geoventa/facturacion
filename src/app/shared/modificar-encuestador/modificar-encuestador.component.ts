import {Component, Inject, OnInit} from '@angular/core';
import {Encuestador} from '../../models/encuestador';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TipoDocumentoService} from '../../services/tipo-documento.service';
import {TipoDocumento} from '../../models/tipo-documento';

@Component({
    selector: 'app-modificar-encuestador',
    templateUrl: './modificar-encuestador.component.html',
    styleUrls: ['./modificar-encuestador.component.scss']
})
export class ModificarEncuestadorComponent implements OnInit {
    tiposDocumentos: TipoDocumento[] = [];

    encuestador: Encuestador = null;

    constructor(
        private tipoDocumentoService: TipoDocumentoService,
        @Inject(MAT_DIALOG_DATA) public data: Encuestador,
    ) {
        console.log(data);
        this.encuestador = data;
    }

    ngOnInit(): void {
        this.consultarTipoDocumentos();
    }

    consultarTipoDocumentos(): void {
        this.tipoDocumentoService.getTiposDocumentos().subscribe((item) => {
            if(item.cod === 0) {
                this.tiposDocumentos = item.data;
            }
        });
    }

}
