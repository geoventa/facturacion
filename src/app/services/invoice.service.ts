import { Injectable } from '@angular/core';
import {Services} from '../models/services';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {GetService} from '../models/get-service';
import {environment} from '../../environments/environment';
import {Encuestador} from '../models/encuestador';
import { Usuario } from 'app/models/usuario';

const api = `${environment.apiNodejs}invoice`;

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends Services<any> {

    constructor(public readonly http: HttpClient,
                public _router: Router) {
        super(http, _router);
    }

    getInvoice(empresa: number): Observable<Encuestador[]> {
        return this.get(`${api}`);
    }
}
