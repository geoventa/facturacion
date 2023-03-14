import {Injectable} from '@angular/core';
import {Services} from '../models/services';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Invoice} from '../models/invoice';
import {ItemInvoice} from '../models/itemInvoice';
import {BillingDate} from '../models/billingDate';
import {Enterprice} from '../models/enterprice';
import {Client} from '../models/client';
import {Payment} from "../models/payment";

const api = `${environment.apiNodejs}invoice/`;

@Injectable({
    providedIn: 'root'
})
export class InvoiceService extends Services<any> {

    constructor(public readonly http: HttpClient,
                public _router: Router) {
        super(http, _router);
    }

    addInvoice(
        factura: Invoice,
        item_facturas: ItemInvoice[],
        fecha_cobros: BillingDate[],
        valor_abonado: number
    ): Observable<{cod: number; message: string; data: {
            enterprice: Enterprice;
            invoice: Invoice;
            client: Client;
            itemInvoice: ItemInvoice[];};
        }> {
        return this.post(`${api}web`, JSON.stringify({factura: factura, item_facturas: item_facturas, fecha_cobros: fecha_cobros, valor_abonado: valor_abonado}));
    }

    getDetailedInvoices(
        dateStart: string,
        dateEnd: string,
        seller: number,
    ): Observable<{cod: number; message: string; data: {
            invoics: Invoice[];
            itemsInvoice: ItemInvoice;
            clients: Client[];
            payment: Payment[];};
    }> {
        if(dateStart.length === 0) {
            dateStart = 'null';
        }
        if(dateEnd.length === 0) {
            dateEnd = 'null';
        }
        return this.get(`${api}detailed_invoices/?dateStart=${dateStart}&dateEnd=${dateEnd}&seller=${seller}`);
    }
}
