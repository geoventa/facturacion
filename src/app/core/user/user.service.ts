import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of, ReplaySubject} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from 'app/core/user/user.types';

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: User)
    {
        // Store the value
        console.log(value);
        localStorage.setItem('usuario', JSON.stringify(value));
        this._user.next(value);
    }

    get user$(): Observable<User>
    {
        const userLocal = localStorage.getItem('usuario');
        console.log(userLocal);
        const userResponse = userLocal == null ? null : JSON.parse(userLocal);
        console.log(userResponse);
        this._user.next(userResponse);
        return of(userResponse);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in user data
     */
    get(): Observable<User>
    {
        return this._httpClient.get<User>('api/common/user').pipe(
            tap((user) => {
                const userLocal = localStorage.getItem('usuario');
                const userResponse = userLocal == null ? null : JSON.parse(userLocal);
                console.log(userResponse);
                this._user.next(userResponse);
            })
        );
    }

    /**
     * Update the user
     *
     * @param user
     */
    update(user: User): Observable<any>
    {
        return this._httpClient.patch<User>('api/common/user', {user}).pipe(
            map((response) => {
                this._user.next(response);
            })
        );
    }
}
