import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Services} from "../models/services";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Route} from "../models/route";
import {Invoice} from "../models/invoice";
import {InvoiceList} from "../models/invoice-list";

const api = `${environment.apiNodejs}invoice_list`;

@Injectable({
  providedIn: 'root'
})
export class ListaFacturaService extends Services<any> {

    constructor(public readonly http: HttpClient,
                public _router: Router) {
        super(http, _router);
    }

    getRouteBySeller(seller: number): Observable<InvoiceList> {
        return this.get(`${api}/seller/${seller}`);
    }
}
