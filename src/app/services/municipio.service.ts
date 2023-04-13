import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Services} from '../models/services';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Route} from '../models/route';
import {Municipality} from "../models/municipality";

const api = `${environment.apiNodejs}municipality`;

@Injectable({
  providedIn: 'root'
})
export class MunicipioService extends Services<any> {

    constructor(public readonly http: HttpClient,
                public _router: Router) {
        super(http, _router);
    }

    getRouteBySeller(seller: number): Observable<Route[]> {
        return this.get(`${api}/seller/${seller}`);
    }

    public municipioConsultaConCoordenada(): Observable<Municipality[]> {
        return this.http.get<Municipality[]>(`${api}witch_coordinate`);
    }
}
