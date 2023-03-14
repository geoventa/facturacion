import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {AuthUtils} from 'app/core/auth/auth.utils';
import {UserService} from 'app/core/user/user.service';
import {environment} from '../../../environments/environment';
import {Usuario} from '../../models/usuario';
import {GetService} from '../../models/get-service';

const apiUrl = `${environment.apiUrl}usuario/`;
const api = `${environment.apiNodejs}autch/`;

@Injectable()
export class AuthService {
    private _authenticated: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string) {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string {
        return localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(email: string): Observable<any> {
        return this._httpClient.post('api/auth/forgot-password', email);
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any> {
        return this._httpClient.post('api/auth/reset-password', password);
    }

    getHeader(): HttpHeaders {
        return new HttpHeaders({'Content-Type': 'application/json'});
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { userCode: string; password: string }): Observable<any> {
        // Throw error, if the user is already logged in
        if (this._authenticated) {
            return throwError('User is already logged in.');
        }
        const usuario = new Usuario();
        usuario.contrasena_usuario = credentials.password;
        usuario.nombre_usuario = credentials.userCode;
        return this._httpClient.post(`${api}`,
            JSON.stringify({nombreUsuario: usuario.nombre_usuario, contrasena: usuario.contrasena_usuario}),
            {headers: this.getHeader()}).pipe(
            switchMap((response: GetService<Usuario>) => {
                console.log(response);
                // Store the access token in the local storage
                this.accessToken = response.data.token;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = {
                    id: response.data.id_usuario,
                    name: response.data.nombre_usuario,
                    empresa:response.data.empresa || 0,
                    email: '',
                    avatar: null,
                    status: null,
                };

                // Return a new observable with the response
                return of(response);
            })
        );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(token: string): Observable<any> {
        // Renew token
        return this._httpClient.get(`${api}${token}`).pipe(
            catchError(() =>
                // Return false
                of(false)
            ),
            switchMap((response: any) => {
                if (response.cod === 0) {
                    console.log(response);
                    this.accessToken = response.token;
                    this._authenticated = true;
                    this._userService.user = {
                        id: response.data.id_usuario,
                        name: response.data.nombre_cuenta_usuario,
                        email: response.data.correo_usuario,
                        empresa: response.empresa,
                        avatar: null,
                        status: null,
                    };
                    return of(true);
                } else {
                    return of(true);
                }
            })
        );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any> {
        // Remove the access token from the local storage
        localStorage.removeItem('accessToken');

        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: { name: string; email: string; password: string; company: string }): Observable<any> {
        return this._httpClient.post('api/auth/sign-up', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string; password: string }): Observable<any> {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean> {
        // Check if the user is logged in
        if (this._authenticated) {
            return of(true);
        }

        // Check the access token availability
        if (!this.accessToken) {
            return of(false);
        }

        // Check the access token expire date
        if (AuthUtils.isTokenExpired(this.accessToken)) {
            return of(false);
        }
        // If the access token exists and it didn't expire, sign in using it
        //return this.signInUsingToken(this.accessToken);
        return of(true);
    }
}
