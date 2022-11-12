import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    menu$: Subject<number> = new Subject<number>();

    constructor() {
    }
}
