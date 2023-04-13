import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of, ReplaySubject} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Navigation } from 'app/core/navigation/navigation.types';

@Injectable({
    providedIn: 'root'
})
export class NavigationService
{
    static ROUT_LISTA_ENCUESTADORES = 'lista-encuestadores';
    static ROUT_MIS_FACTURA = 'mis_facturas';
    static ROUT_REGISTRAR_FACTURA = 'registrar_factura';
    static ROUT_CONSULTAR_ENCUESTAS = 'consultar-encuestas';
    static ROUT_REGISTRAR_ENCUESTAS = 'registrar-encuestas';
    static ROUT_MODIFICAR_ENCUESTAS = 'modificar-encuestas';
    static ROUT_LISTA_ENCUESTAS = 'lista-encuestas';
    myNavigation: Navigation = {
        compact: [
            {
                id: 'example',
                title: 'Example',
                tooltip: 'Examples',
                type: 'aside',
                icon: 'mat_outline:person_outline',
                children: [
                    {
                        id: 'paciente.consulta_de_paciente',
                        title: 'Inventario',
                        type: 'basic',
                        icon: 'feather:search',
                        link:  `/${NavigationService.ROUT_LISTA_ENCUESTADORES}`
                    }
                ]
            }
        ],
        default: [
            {
                id: 'facturas',
                title: 'Facturas',
                type: 'group',
                icon: 'mat_outline:person_outline',
                children: [
                    /*{
                        id: 'facturas.lista_factura',
                        title: 'Lista de facturas',
                        type: 'basic',
                        icon: 'feather:search',
                        link:  `/${NavigationService.ROUT_MIS_FACTURA}`
                    },*/
                    {
                        id: 'facturas.registrar_factura',
                        title: 'Registrar factura',
                        type: 'basic',
                        icon: 'feather:search',
                        link:  `/${NavigationService.ROUT_REGISTRAR_FACTURA}`
                    }
                ]
            },
        ],
        futuristic: [
            {
                id: 'example',
                title: 'Example',
                type: 'group',
                children: [
                    {
                        id: 'example.example',
                        title: 'Example',
                        type: 'basic',
                        icon: 'feather:search',
                        link:  `/${NavigationService.ROUT_LISTA_ENCUESTADORES}`
                    }
                ]
            }
        ],
        horizontal: [
            {
                id: 'example',
                title: 'Example',
                type: 'group',
                icon: 'feather:users',
                children: [
                    {
                        id: 'example.example',
                        title: 'Example',
                        type: 'basic',
                        icon: 'feather:search',
                        link:  `/${NavigationService.ROUT_LISTA_ENCUESTADORES}`
                    }
                ]
            }
        ]
    };

    private _navigation: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);
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
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation>
    {
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(): Observable<Navigation>
    {
        return this._httpClient.get<Navigation>('api/common/navigation').pipe(
            tap((navigation) => {
                this._navigation.next(this.myNavigation);
            })
        );
    }
}
