import {Component, OnInit} from '@angular/core';
import {CambioTituloService} from '../../services/cambio-titulo.service';
import {ClientService} from '../../services/client';
import {Client} from '../../models/client';
import {UserService} from '../../core/user/user.service';
import {Invoice} from '../../models/invoice';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';
import {SellerService} from '../../services/seller.service';
import {Seller} from '../../models/seller';
import {ItemInvoice} from '../../models/itemInvoice';
import {ToastrService} from 'ngx-toastr';
import Swal from 'sweetalert2';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {Route} from "../../models/route";
import {RouteService} from "../../services/rout.service";
import {BillingDate} from "../../models/billingDate";
import {Time} from "../../help/time";
import {InvoiceService} from "../../services/invoice.service";
import {ImprimirFacturaPdfTicket} from "../../pdf/imprimir_factura-pdf-ticket";

export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@Component({
    selector: 'app-mapa',
    templateUrl: './registrar-factura.component.html',
    styleUrls: ['./registrar-factura.component.scss'],
    styles: [
        `
            .grid-articulos {
                grid-template-columns: 120px auto 200px 200px 200px;
                @screen sm {
                    grid-template-columns:  120px auto 200px 200px 200px
                }

                @screen md {
                    grid-template-columns:  120px auto 200px 200px 200px
                }
            }
        `
    ],
    providers: [
        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
        // application's root module. We provide it at the component level here, due to limitations of
        // our example generation script.
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },

        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
})
export class RegistrarFacturaComponent implements OnInit {
    clients: Client[] = [];
    filteredCLient: Client[] = [];
    itemInvioces: ItemInvoice[] = [];
    invoices: Invoice[] = [];
    products: Product[] = [];
    sellers: Seller[] = [];
    filteredProducts: Product[] = [];
    routBySeller: Route[] = [];
    selectedEnterprice: number = 0;
    selectedClient: number = 0;
    selectedClientModel: Client = null;
    selectedItemInvoice: number = 0;
    selectedProduct: number = 0;
    selectedSeller: number = 0;
    selectedRoute: number = 0;
    quantityProducts: number = 0;
    invoiceType = 1;
    valueToPay = 0;
    billingDate: Date[] = [];
    public min = new Date();
    valorTotal = 0;
    cantidadTotal = 0;
    availableCredit = 0;

    constructor(
        private cambioTituloService: CambioTituloService,
        private clientService: ClientService,
        private userService: UserService,
        private sellerService: SellerService,
        private routeService: RouteService,
        private invoiceService: InvoiceService,
        private toastr: ToastrService,
        private productService: ProductService
    ) {
        cambioTituloService.event.next('Registrar factura');
    }

    async ngOnInit(): Promise<void> {
        this.userService.user$.subscribe((user) => {
            this.selectedEnterprice = user.empresa;
            this.clientService.getClients(this.selectedEnterprice).subscribe((clientes) => {
                this.clients = clientes;
                this.filteredCLient = [];
            });
            this.sellerService.getSellerByEnterprice(this.selectedEnterprice).subscribe((item) => {
                this.sellers = item;
            });
        });
        this.productService.getAll().subscribe((item) => {
            this.products = item;
        });
    }

    filterClients($value): void {
        if ($value.length < 2) {
            this.filteredCLient = [];
            this.selectedClient = 0;
        } else {
            this.filteredCLient = this.clients.filter(item =>
                item.numero_documento_cliente === $value
                || item.primer_nombre_cliente.toLowerCase().indexOf($value.toLowerCase()) >= 0
                || item.nombre_empresa_cliente.toLowerCase().indexOf($value.toLowerCase()) >= 0
            );
            if(this.filteredCLient.length > 0) {
                this.selectedClient = this.filteredCLient[0].id_cliente;
            } else {
                this.selectedClient = 0;
            }
        }
    }

    filterProduct($value): void {
        if ($value.length < 2) {
            this.filteredProducts = [];
            this.selectedProduct = 0;
        } else {
            this.filteredProducts = this.products.filter(item =>
                item.nombre_producto.toLowerCase().indexOf($value.toLowerCase()) >= 0
            );
            if(this.filteredProducts.length > 0) {
                this.selectedProduct = this.filteredProducts[0].id_producto;
            } else {
                this.selectedProduct = 0;
            }
        }
    }

    agregarItemFactura(): void {
        console.log(this.selectedProduct);
        if (this.selectedProduct === 0) {
            this.toastr.warning('Selecione un producto.');
        } else if (this.quantityProducts <= 0) {
            this.toastr.warning('Ingrese una cantidad de productos mayor a cero');
        } else {
            const itemInvoice = new ItemInvoice();
            const producto = this.getProductById(this.selectedProduct);
            if (producto) {
                const itemInvoiceEncontrado = this.getItemInvoiceByProduct(this.selectedProduct);
                if (itemInvoiceEncontrado) {
                    itemInvoiceEncontrado.unidades_item_factura = this.quantityProducts;
                    itemInvoiceEncontrado.precio_venta_total_item_factura = +producto.precio_venta_uno_producto * this.quantityProducts;
                } else {
                    itemInvoice.nombre_producto_item_factura = producto.nombre_producto;
                    itemInvoice.producto_item_factura = this.selectedProduct;
                    itemInvoice.unidades_item_factura = this.quantityProducts;
                    itemInvoice.precio_venta_item_factura = +producto.precio_venta_uno_producto;
                    itemInvoice.precio_venta_total_item_factura = +producto.precio_venta_uno_producto * this.quantityProducts;
                    itemInvoice.costo_item_factira = +producto.costo_producto * +this.quantityProducts;
                    itemInvoice.ganancia_item_factura = +itemInvoice.costo_item_factira - (+producto.precio_venta_uno_producto * this.quantityProducts);
                    this.itemInvioces.push(itemInvoice);
                    this.toastr.success('Articulo agregado');
                }
            } else {
                this.toastr.warning('Selecione un producto');
            }
        }
        this.calcularValorFactura();
    }

    getProductById(id: number): Product | null {
        return this.products.find(item => item.id_producto == id);
    }

    getItemInvoiceByProduct(id: number): ItemInvoice | null {
        return this.itemInvioces.find(item => item.producto_item_factura == id);
    }

    sumarCantidad(itemInvoice: ItemInvoice): void {
        itemInvoice.unidades_item_factura = +itemInvoice.unidades_item_factura + +1;
        itemInvoice.precio_venta_total_item_factura = +itemInvoice.precio_venta_item_factura * itemInvoice.unidades_item_factura;
        const producto = this.getProductById(itemInvoice.producto_item_factura);
        itemInvoice.costo_item_factira = +producto.costo_producto * +this.quantityProducts;
        itemInvoice.ganancia_item_factura = +itemInvoice.costo_item_factira - (+producto.precio_venta_uno_producto * this.quantityProducts);
        this.toastr.success('Cantidad sumada.');
        this.calcularValorFactura();
    }

    restarCantidad(itemInvoice: ItemInvoice): void {
        itemInvoice.unidades_item_factura -= 1;
        itemInvoice.precio_venta_total_item_factura = +itemInvoice.precio_venta_item_factura * itemInvoice.unidades_item_factura;
        const producto = this.getProductById(itemInvoice.producto_item_factura);
        itemInvoice.costo_item_factira = +producto.costo_producto * +this.quantityProducts;
        itemInvoice.ganancia_item_factura = +itemInvoice.costo_item_factira - (+producto.precio_venta_uno_producto * this.quantityProducts);
        this.toastr.success('Cantidad restada.');
        this.calcularValorFactura();
    }

    quitarArticulo(itemInvoice: ItemInvoice): void {
        let posicion = -1;
        for (let i = 0; i < this.itemInvioces.length; i++) {
            if (itemInvoice.producto_item_factura === this.itemInvioces[i].producto_item_factura) {
                posicion = i;
                break;
            }
        }
        if (posicion >= 0) {
            this.itemInvioces.splice(posicion, 1);
            this.toastr.success('Articulo quitado.');
        }
        this.calcularValorFactura();
    }

    registrarFactura(): void {
        if (this.selectedClient === 0) {
            Swal.fire({
                text: 'No ha selecionado un cliente, primero debe selecionar un cliente.',
                icon: 'warning'
            });
        } else if (this.selectedSeller === 0) {
            Swal.fire({
                text: 'No ha selecionado un vendedor, primero debe selecionar un vendedor.',
                icon: 'warning'
            });
        } else if (this.selectedRoute === 0) {
            Swal.fire({
                text: 'No se ha selecionado una ruta.',
                icon: 'warning'
            });
        } else if (this.itemInvioces.length === 0) {
            Swal.fire({
                text: 'No se ha agregado ningun articulo a la lista.',
                icon: 'warning'
            });
        } else if (this.invoiceType === 1 && this.billingDate.length === 0) {
            Swal.fire({
                text: 'Agregue primero las fechas de cobro, en las facturas a credito debe indicar las fechas en que se va a cobrar.',
                icon: 'warning'
            });
        } else if (this.valueToPay < 0) {
            Swal.fire({
                text: 'El valor a abonar no puede ser menor a 0.',
                icon: 'warning'
            });
        } else {
            const invoice = new Invoice();
            invoice.valor_factura = this.valorTotal;
            invoice.cantidad_productos_factura = this.valorTotal;
            invoice.cliente_factura = this.selectedClientModel.id_cliente;
            invoice.vendedor_factura = this.selectedSeller;
            invoice.numero_cuotas_factura = this.billingDate.length;
            invoice.valor_cuota_factura = +this.valorTotal/+this.billingDate.length;
            invoice.ruta_factura = this.selectedRoute;
            invoice.tipo_factura_factura = this.invoiceType;
            invoice.tipo_pago_factura = 1;
            const billingDatesAdd: BillingDate[] = [];
            this.billingDate.forEach((billingDate) => {
                const fecha = new Time().getDateString(billingDate.toString());
                const billingDateAdd = new BillingDate();
                billingDateAdd.fecha_fecha_cobro = fecha;
                billingDatesAdd.push(billingDateAdd);
            });
            this.invoiceService.addInvoice(invoice, this.itemInvioces, billingDatesAdd, this.valueToPay).subscribe((response) => {
                if(response.cod === 0) {
                    Swal.fire({
                        text: 'Factura registrada.',
                        icon: 'success'
                    });
                    this.clientService.getClients(this.selectedEnterprice).subscribe((clientes) => {
                        this.clients = clientes;
                    });
                    console.log(response);
                    new ImprimirFacturaPdfTicket().crearPdf(
                        response.data.enterprice,
                        this.sellers.find(item => item.id_vendedor == this.selectedSeller),
                        response.data.invoice,
                        this.itemInvioces,
                        true,
                        this.selectedClientModel,
                        billingDatesAdd
                    );
                } else {
                    Swal.fire({
                        text: response.message,
                        icon: 'warning'
                    });
                }
            });
        }
    }

    setCliente(): void {
        this.selectedClientModel = this.clients.find(item => this.selectedClient == item.id_cliente);
        this.calcularCupoDisponible();
    }

    agregarFechaDeCobro(): void {
        console.log('Fecha de cobro agregada');
    }

    calcularValorFactura(): void {
        this.valorTotal = 0;
        this.cantidadTotal = 0;
        this.itemInvioces.forEach((itemInvoice) => {
            this.valorTotal += itemInvoice.precio_venta_total_item_factura;
            this.cantidadTotal += itemInvoice.unidades_item_factura;
        });
        this.calcularCupoDisponible();
    }

    sellerChangue(): void {
        if (this.selectedSeller > 0) {
            this.routeService.getBySeller(this.selectedSeller).subscribe((item) => {
                this.routBySeller = item;
                if (this.routBySeller.length > 0) {
                    this.selectedRoute = this.routBySeller[0].id_ruta;
                } else {
                    this.selectedRoute = 0;
                }
            });
        } else {
            this.routBySeller = [];
            this.selectedRoute = 0;
        }
    }

    calcularCupoDisponible(): void {
        if(this.selectedClientModel) {
            this.availableCredit = +this.selectedClientModel.cupo_credito_disponible_cliente - +this.valorTotal + +this.valueToPay;
        } else {
            this.availableCredit = 0;
        }
    }

    cambiarCupoCLiente($value): void {
        this.clientService.updateAvailableCredit(this.selectedClientModel.id_cliente, $value).subscribe( (item) => {
            if(item.cod === 0) {
                this.selectedClientModel = item.data;
                this.calcularCupoDisponible();
                Swal.fire({
                    text: 'Cupo de cleinte actualizado.',
                    icon: 'success'
                });
            } else {
                Swal.fire({
                    text: item.message,
                    icon: 'warning'
                });
            }
        });
    }

}
