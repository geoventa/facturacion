import { Injectable } from '@angular/core';
import {Services} from '../models/services';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Product} from '../models/product';

const api = `${environment.apiNodejs}product`;

@Injectable({
  providedIn: 'root'
})
export class ProductService extends Services<any> {

    constructor(public readonly http: HttpClient,
                public _router: Router) {
        super(http, _router);
    }

    getAll(): Observable<Product[]> {
        return this.get(`${api}`);
    }
}
