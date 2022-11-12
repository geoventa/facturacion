import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Services} from "../models/services";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {TipoDocumento} from "../models/tipo-documento";
import {GetService} from "../models/get-service";

@Injectable({
    providedIn: 'root'
})
export class TipoDocumentoService extends Services<any> {

    constructor(public readonly http: HttpClient,
                public _router: Router) {
        super(http, _router);
    }

    getTiposDocumentos(): Observable<GetService<TipoDocumento[]>> {
        return this.get(`${environment.apiUrl}tipo_documento/get_tipo_documento.php`);
    }
}
