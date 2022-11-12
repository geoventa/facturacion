import { Injectable } from '@angular/core';
import {Services} from '../models/services';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {GetService} from '../models/get-service';
import {environment} from '../../environments/environment';
import {Encuestador} from '../models/encuestador';
import { Usuario } from 'app/models/usuario';
import {Seller} from "../models/seller";

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
}
