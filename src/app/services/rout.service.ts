import { Injectable } from '@angular/core';
import {Services} from '../models/services';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Route} from '../models/route';

const api = `${environment.apiNodejs}route/`;

@Injectable({
  providedIn: 'root'
})
export class RouteService extends Services<any> {

    constructor(public readonly http: HttpClient,
                public _router: Router) {
        super(http, _router);
    }

    getBySeller(seller: number): Observable<Route[]> {
        return this.get(`${api}seller/${seller}`);
    }
}
