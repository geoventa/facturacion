import { Injectable } from '@angular/core';
import {Services} from '../models/services';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {GetService} from '../models/get-service';
import {environment} from '../../environments/environment';
import {Zona} from '../models/zona';

@Injectable({
  providedIn: 'root'
})
export class ZonaService extends Services<any> {

    constructor(public readonly http: HttpClient,
                public _router: Router) {
        super(http, _router);
    }

    getZonas(): Observable<GetService<Zona[]>> {
        return this.get(`${environment.apiUrl}zona/get_zonas.php`);
    }
}
