import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CambioTituloService {

    event: Subject<string> = new Subject();

    constructor() {
    }
}
