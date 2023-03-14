import { Injectable } from '@angular/core';
import {Services} from '../models/services';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Seller} from '../models/seller';

const api = `${environment.apiNodejs}seller`;

@Injectable({
  providedIn: 'root'
})
export class SellerService extends Services<any> {

    constructor(public readonly http: HttpClient,
                public _router: Router) {
        super(http, _router);
    }

    getSellerByEnterprice(empresa: number): Observable<Seller[]> {
        return this.get(`${api}/enterprice/${empresa}`);
    }

    getSellerByMunicipality(municipality: number): Observable<Seller[]> {
        return this.get(`${api}/municipality/${municipality}`);
    }
}
