import {Component, OnInit} from '@angular/core';
import {Encuestador} from '../../models/encuestador';
import {TipoDocumento} from '../../models/tipo-documento';
import {TipoDocumentoService} from '../../services/tipo-documento.service';
import {Usuario} from '../../models/usuario';
import { EncuestadorService } from 'app/services/encuestador.service';

@Component({
    selector: 'app-registrar-encuestador',
    templateUrl: './registrar-encuestador.component.html',
    styleUrls: ['./registrar-encuestador.component.scss']
})
export class RegistrarEncuestadorComponent implements OnInit {
    tiposDocumentos: TipoDocumento[] = [];
    encuestador: Encuestador = new Encuestador();
    usuario: Usuario = new Usuario();

    constructor(
        private tipoDocumentoService: TipoDocumentoService,
        private encuestadorService: EncuestadorService,
        ) {
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

    registrarEncuestador(): void {
        if(this.encuestador.primer_nombre.length === 0) {

        } else if(this.encuestador.primer_apellido.length === 0) {

        } else if(this.encuestador.direccion.length === 0) {

        } else if(this.encuestador.numero_documento.length === 0) {

        } else if(this.encuestador.barrio.length === 0) {

        } else if(this.encuestador.numero_celular.length === 0) {

        } else if(this.usuario.nombre_usuario.length === 0){

        } else {
            this.encuestadorService.addPollster(this.encuestador, this.usuario).subscribe((item) => {
                console.log(item);
            });
        }
    }
}
