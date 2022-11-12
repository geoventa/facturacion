import { Injectable } from '@angular/core';
import {Services} from '../models/services';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {GetService} from '../models/get-service';
import {environment} from '../../environments/environment';
import {Encuestador} from '../models/encuestador';
import { Usuario } from 'app/models/usuario';

const api = `${environment.apiNodejs}pollster`;

@Injectable({
  providedIn: 'root'
})
export class EncuestadorService extends Services<any> {

    constructor(public readonly http: HttpClient,
                public _router: Router) {
        super(http, _router);
    }

    getEncuestadores(): Observable<Encuestador[]> {
        return this.get(api);
    }

    addPollster(encuestador: Encuestador, usuario: Usuario): Observable<Encuestador[]> {
        return this.post(api, JSON.stringify({encuestador: encuestador, usuario: usuario}));
    }
}
