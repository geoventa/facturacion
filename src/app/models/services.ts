import {HttpHeaders, HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

export class Services<T> {
    constructor(
        public http: HttpClient,
        public _router: Router,) {

    }

    get token(): string {
        const token = localStorage.getItem('token');
        return (token) ? token : '';
    }

    set token(token: string) {
        localStorage.setItem('token', token);
    }

    getHeaderConToken(): HttpHeaders {
        const token = this.token;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token
        });
        return headers;
    }

    get getHeader(): HttpHeaders {
        return new HttpHeaders({'Content-Type': 'application/json'});
    }

    postSinAutenticacion(url: string, data: string): Observable<any> {
        return this.http.post(url, data, {headers: this.getHeader});
    }

    post(url: string, data: string = ''): Observable<any> {
        return this.http.post(url, data, {headers: this.getHeaderConToken()});
    }

    get(url: string): Observable<any> {
        return this.http.get(url, {headers: this.getHeaderConToken()}).pipe(
            catchError((err, caught) => {
                console.log(err);
                return throwError(err);
            })
        );
    }

    patch(url: string, data: string = ''): Observable<any> {
        return this.http.patch(url, data, {headers: this.getHeaderConToken()});
    }

    put(url: string, data: string = ''): Observable<any> {
        return this.http.put(url, data, {headers: this.getHeaderConToken()});
    }

    delete(url: string): Observable<any> {
        return this.http.delete(url, {headers: this.getHeaderConToken()});
    }

}
