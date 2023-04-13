import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Services} from '../models/services';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {InvoiceList} from '../models/invoice-list';
import {LISTA_FACTURAS_HOY} from '../extra/constantes';
import {AuthService} from '../core/auth/auth.service';
const api = `${environment.apiNodejs}invoice_list`;

@Injectable({
  providedIn: 'root'
})
export class ListaFacturaService extends Services<any> {

    constructor(public readonly http: HttpClient,
                public _router: Router,
                private autchService: AuthService) {
        super(http, _router);
    }

    getRouteBySeller(seller: number): Observable<InvoiceList> {
        return this.get(`${api}/seller/${seller}`);
    }

    public getHoy(vendedor: number): Observable<InvoiceList> {
        const token = this.autchService.accessToken;
        const data = JSON.stringify({tokenProperty: token, vendedorProperty: vendedor});
        return this.http.post<InvoiceList>(LISTA_FACTURAS_HOY, data);
    }
}
