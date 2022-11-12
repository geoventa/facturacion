import { Injectable } from '@angular/core';
import {Services} from '../models/services';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Invoice} from '../models/invoice';
import {Client} from "../models/client";

const api = `${environment.apiNodejs}client`;

@Injectable({
  providedIn: 'root'
})
export class ClientService extends Services<any> {

    constructor(public readonly http: HttpClient,
                public _router: Router) {
        super(http, _router);
    }

    getClients(empresa: number): Observable<Client[]> {
        console.log(`${api}/${empresa}`);
        return this.get(`${api}/${empresa}`);
    }
}
