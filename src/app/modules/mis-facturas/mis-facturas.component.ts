import {Component, OnInit} from '@angular/core';
import {InvoiceService} from '../../services/invoice.service';
import {SellerService} from '../../services/seller.service';
import {Seller} from '../../models/seller';
import {Invoice} from '../../models/invoice';
import {UserService} from '../../core/user/user.service';
import {ListaFacturaService} from '../../services/lista-factura.service';
import {MunicipioService} from '../../services/municipio.service';
import {RutaService} from '../../services/ruta.service';
import {VendedorService} from '../../services/vendedor.service';
import {MatDialog} from '@angular/material/dialog';
import {Payment} from '../../models/payment';
import {Municipality} from '../../models/municipality';
import {Route} from '../../models/route';
import {SightInvoiceList} from '../../models/sight-invoice-list';
import {ItemInvoice} from "../../models/itemInvoice";
import {Client} from "../../models/client";
import {InvoiceList} from "../../models/invoice-list";

@Component({
    selector: 'app-mis-facturas',
    templateUrl: './mis-facturas.component.html',
    styleUrls: ['./mis-facturas.component.scss'],
    styles: [
        `
            .grid-articulos {
                grid-template-columns:  120px 120px 120px 120px 120px 120px 120px 120px 120px 120px 120px 120px 120px 120px 120px 120px 120px 120px;
            }
        `]
})
export class MisFacturasComponent implements OnInit {

    public listaFacturasVista: SightInvoiceList;
    public facturas: Invoice[] = [];
    public abonos: Payment[] = [];
    public municipios: Municipality[] = [];
    public facturasFiltradas: Invoice[] = [];
    public vendedores: Seller[] = [];
    public vendedoresSelect: Seller[] = [];
    public vendedorSelecionado: number;
    public rutas: Route[] = [];
    public rutasSelect: Route[] = [];
    public rutaSelecionada: number | undefined;
    public isFacturaPaga = 0;
    public numeroFacturas = 0;
    public valorFactura = 0;
    public valorCredito = 0;
    public numerofacturasPagadas = 0;
    public porcentajeFacturasPagas = 0;
    public porcentajeCredito = 0;
    dateUno: Date = new Date();
    dateDos: Date = new Date();
    facturaBuscar = '';
    facturaSelecionada: number;
    municipioSelecionado: number;
    anio = 2022;
    mes = 10;


    sellers: Seller[] = [];
    selectedSeller: number = 0;
    selectedEnterprice: number = 0;
    invoices: Invoice[] = [];
    itemInvoce: ItemInvoice[] = [];
    clients: Client[] = [];
    dateStart = '';
    dateEnd = '';

    constructor(
        private invoiceService: InvoiceService,
        private userService: UserService,
        private sellerService: SellerService,
        private listaFacturaService: ListaFacturaService,
        private municipioService: MunicipioService,
        private rutaService: RutaService,
        private vendedorService: VendedorService,
        private dialog: MatDialog
    ) {
        this.rutaSelecionada = 458;
        this.cargarVendedoresPorMunicipio();
    }

    ngOnInit(): void {
        this.userService.user$.subscribe((user) => {
            this.selectedEnterprice = user.empresa;
            this.sellerService.getSellerByEnterprice(user.empresa).subscribe((item) => {
                this.sellers = item;
            });
        });
        this.cargarMunicipios();
    }

    sellerChangue(): void {
        //consultar facturas
    }


    selecionarMunicipio(idMunicipio: number): void {
        this.municipioSelecionado = idMunicipio;
        this.cargarVendedoresPorMunicipio();
    }

    cargarVendedoresPorMunicipio(): void {
        (this.sellerService.getSellerByMunicipality(this.municipioSelecionado))
            .subscribe((response) => {
                this.vendedoresSelect = response;
                if (this.vendedoresSelect) {
                    if (this.vendedoresSelect.length > 0) {
                        this.vendedorSelecionado = this.vendedoresSelect[0].id_vendedor;
                    } else {
                        this.vendedorSelecionado = 0;
                    }
                } else {
                    this.vendedorSelecionado = 0;
                }
                this.cargarRutasPorVendedor();
            }, (error) => {
                this.vendedoresSelect = [];
                this.vendedorSelecionado = 0;
                this.cargarRutasPorVendedor();
            });
    }

    cargarRutasPorVendedor(): void {
        (this.rutaService.getRouteBySeller(this.vendedorSelecionado))
            .subscribe((response) => {
                this.rutasSelect = response;
                if (this.rutasSelect) {
                    if (this.rutasSelect.length > 0) {
                        this.rutaSelecionada = this.rutasSelect[0].id_ruta;
                    } else {
                        this.rutaSelecionada = 0;
                    }
                } else {
                    this.rutaSelecionada = 0;
                }
                this.crearConsulta();
            }, (error) => {
                this.rutaSelecionada = 0;
                this.crearConsulta();
            });
    }

    crearConsulta(): void {
        (this.listaFacturaService.getHoy(this.vendedorSelecionado))
            .subscribe((response) => {
                this.listaFacturasVista = response;
                this.clients = response.clients;
                this.facturas = response.invoices;
                this.abonos = response.payments;
                this.filtrarFacturas();
            }, (error) => {
                this.listaFacturasVista = new InvoiceList();
                this.facturas = [];
                this.facturasFiltradas = [];
                this.filtrarFacturas();
            });
    }

    filtrarFacturas(): void {
        const facturasAux: Invoice[] = [];
        this.numeroFacturas = 0;
        this.numerofacturasPagadas = 0;
        this.valorFactura = 0;
        this.valorCredito = 0;
        this.porcentajeCredito = 0;
        this.porcentajeFacturasPagas = 0;
        this.facturas.forEach((item) => {
            let filtroNombreValido = false;
            let filtroPorFacturaPaga = false;
            let filtroRuta = false;
            const cliente = this.getClienteModelo(item.cliente_factura);
            if (this.facturaBuscar.length > 0) {
                if (cliente.nombre_empresa_cliente.toLocaleLowerCase()
                    .indexOf(this.facturaBuscar.toLocaleLowerCase()) !== -1 || cliente.primer_nombre_cliente.toLocaleLowerCase()
                    .indexOf(this.facturaBuscar.toLocaleLowerCase()) !== -1 || cliente.segundo_nombre_cliente.toLocaleLowerCase()
                    .indexOf(this.facturaBuscar.toLocaleLowerCase()) !== -1 || cliente.primer_apellido_cliente.toLocaleLowerCase()
                    .indexOf(this.facturaBuscar.toLocaleLowerCase()) !== -1 || cliente.segundo_apellido_cliente.toLocaleLowerCase()
                    .indexOf(this.facturaBuscar.toLocaleLowerCase()) !== -1) {
                    filtroNombreValido = true;
                }
            } else {
                filtroNombreValido = true;
            }
            switch (this.isFacturaPaga) {
                case 0:
                    filtroPorFacturaPaga = true;
                    break;
                case 1:
                    if (item.valor_deuda_factura === 0) {
                        filtroPorFacturaPaga = true;
                    }
                    break;
                case 2:
                    if (item.valor_deuda_factura > 0) {
                        filtroPorFacturaPaga = true;
                    }
                    break;
            }
            if (this.rutaSelecionada === 0) {
                filtroRuta = true;
            } else {
                if (item.ruta_factura === this.rutaSelecionada) {
                    filtroRuta = true;
                }
            }
            if (filtroPorFacturaPaga && filtroNombreValido && filtroRuta) {
                this.numeroFacturas += +1;
                if (item.valor_deuda_factura === 0) {
                    this.numerofacturasPagadas += +1;
                }
                this.valorFactura += +item.valor_factura;
                this.valorCredito += +item.valor_deuda_factura;
                facturasAux.push(item);
            }
        });
        if (this.valorCredito > 0) {
            this.porcentajeCredito = +(this.valorCredito / this.valorFactura) * 100;
        }
        if (this.numerofacturasPagadas > 0) {
            this.porcentajeFacturasPagas = +(this.numerofacturasPagadas / this.numeroFacturas) * 100;
        }
        this.facturasFiltradas = facturasAux;
    }

    /*mostrarMenu(idFactura: number): void {
        this.facturaSelecionada = idFactura;
        this.dialog.open(MenuFacturaDialogComponent, {
            width: '300px'
        }).afterClosed().subscribe((result) => {
            console.log(result);
            switch (result) {
                case 'verFactura':
                    this.verFactura();
                    break;
                case 'modificarFactura':
                    break;
                case 'eliminarFactura':
                    break;
            }
        });
    }*/

    /*verFactura(): void {
        const factura = this.getFacturaModelo(this.facturaSelecionada);
        const cliente = this.getClienteModelo(factura.cliente_factura);
        const ruta = this.getRutaModelo(factura.ruta_factura);
        const vendedor = this.getVendedorModelo(factura.vendedor_factura);
        this.dialog.open(VerFacturaDialogComponent, {
            width: '600px',
            data: [cliente, ruta, vendedor, factura]
        }).afterClosed().subscribe((result) => {
            console.log(result);
        });
    }*/

    private cargarMunicipios(): void {
        (this.municipioService.municipioConsultaConCoordenada())
            .subscribe((response) => {
                this.municipios = response;
                if (this.municipios.length > 0) {
                    this.municipioSelecionado = this.municipios[0].id_municipio;
                } else {
                    this.municipioSelecionado = 0;
                }
            }, (error) => {
                this.municipios = [];
                this.municipioSelecionado = 0;
            });
    }

    eliminarFactura(): void {

    }

    getFacturaModelo(idFactura: number): Invoice {
        let factura: Invoice;
        this.facturas.forEach((item) => {
            if (item.id_factura == idFactura) {
                factura = item;
            }
        });
        return factura;
    }

    getClienteModelo(idCliente: number): Client {
        let cliente: Client;
        this.clients.forEach((item) => {
            if (item.id_cliente === idCliente) {
                cliente = item;
            }
        });
        return cliente;
    }

    getCliente(idCliente: number): string {
        let negocio = '';
        this.clients.forEach((item) => {
            if (item.id_cliente === idCliente) {
                negocio = item.primer_nombre_cliente + ' ' + item.segundo_nombre_cliente + '  ' + item.primer_apellido_cliente + ' ' + item.segundo_apellido_cliente;
            }
        });
        return negocio;
    }

    getAbono(factura: number, numeral: number): number {
        let valor = 0;
        let contador = 0;
        this.abonos.forEach((item) => {
            if (item.factura_abono === factura) {
                if (contador === numeral) {
                    valor = item.valor_cobrado_abono;
                }
                contador++;
            }
        });
        return valor;
    }

    getNegocio(idCliente: number): string {
        let negocio = '';
        this.clients.forEach((item) => {
            if (item.id_cliente === idCliente) {
                negocio = item.nombre_empresa_cliente;
            }
        });
        return negocio;
    }

    getVendedorModelo(idVendedor: number): Seller {
        let vendedor: Seller = null;
        this.vendedoresSelect.forEach((item) => {
            if (item.id_vendedor === idVendedor) {
                vendedor = item;
            }
        });
        return vendedor;
    }

    getVendedor(idVendedor: number): string {
        let vendedor = '';
        if (this.vendedoresSelect) {
            this.vendedoresSelect.forEach((item) => {
                if (item.id_vendedor === idVendedor) {
                    vendedor = item.nombre_cuenta_vendedor;
                }
            });
        }
        return vendedor;
    }

    getRutaModelo(idRuta: number): Route {
        let ruta: Route = null;
        this.rutasSelect.forEach((item) => {
            if (item.id_ruta === idRuta) {
                ruta = item;
            }
        });
        return ruta;
    }

    getRuta(idRuta: number): string {
        let ruta = '';
        if (this.rutasSelect) {
            this.rutasSelect.forEach((item) => {
                if (item.id_ruta === idRuta) {
                    ruta = item.nombre_ruta;
                }
            });
        }
        return ruta;
    }
}
