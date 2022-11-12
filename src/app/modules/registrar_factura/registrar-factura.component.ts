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
})
export class RegistrarFacturaComponent implements OnInit {
    clients: Client[] = [];
    filteredCLient: Client[] = [];
    itemInvioces: ItemInvoice[] = [];
    invoices: Invoice[] = [];
    products: Product[] = [];
    sellers: Seller[] = [];
    filteredProducts: Product[] = [];
    filteredSellers: Seller[] = [];
    selectedEnterprice: number = 0;
    selectedClient: number = 0;
    selectedClientModel: Client = null;
    selectedItemInvoice: number = 0;
    selectedProduct: number = 0;
    selectedSeller: number = 0;
    quantityProducts: number = 0;
    invoiceType = 0;
    valueToPay = 0;

    constructor(
        private cambioTituloService: CambioTituloService,
        private clientService: ClientService,
        private userService: UserService,
        private sellerService: SellerService,
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
        } else {
            this.filteredCLient = this.clients.filter(item =>
                item.numero_documento_cliente === $value
                || item.primer_nombre_cliente.toLowerCase().indexOf($value.toLowerCase()) >= 0
                || item.nombre_empresa_cliente.toLowerCase().indexOf($value.toLowerCase()) >= 0
            );
        }
    }

    filterSeller($value): void {
        if ($value.length < 2) {
            this.filteredSellers = [];
        } else {
            this.filteredSellers = this.sellers.filter(item =>
                item.numero_documento_vendedor === $value
                || item.primer_nombre_vendedor.toLowerCase().indexOf($value.toLowerCase()) >= 0
                || item.primer_apellido_vendedor.toLowerCase().indexOf($value.toLowerCase()) >= 0
                || item.nombre_cuenta_vendedor.toLowerCase().indexOf($value.toLowerCase()) >= 0
            );
        }
    }

    filterProduct($value): void {
        if ($value.length < 2) {
            this.filteredProducts = [];
        } else {
            this.filteredProducts = this.products.filter(item =>
                item.nombre_producto.toLowerCase().indexOf($value.toLowerCase()) >= 0
            );
        }
    }

    agregarItemFactura(): void {
        console.log(this.selectedProduct);
        if(this.selectedProduct === 0) {
            this.toastr.warning('Selecione un producto.');
        } else if(this.quantityProducts <= 0) {
            this.toastr.warning('Ingrese una cantidad de productos mayor a cero');
        } else {
            const itemInvoice = new ItemInvoice();
            const producto = this.getProductById(this.selectedProduct);
            if(producto) {
                const itemInvoiceEncontrado = this.getItemInvoiceByProduct(this.selectedProduct);
                if(itemInvoiceEncontrado) {
                    itemInvoiceEncontrado.unidades_item_factura = this.quantityProducts;
                    itemInvoiceEncontrado.precio_venta_total_item_factura = +producto.precio_venta_uno_producto * this.quantityProducts;
                } else {
                    itemInvoice.nombre_producto_item_factura = producto.nombre_producto;
                    itemInvoice.producto_item_factura = this.selectedProduct;
                    itemInvoice.unidades_item_factura = this.quantityProducts;
                    itemInvoice.precio_venta_item_factura = +producto.precio_venta_uno_producto;
                    itemInvoice.precio_venta_total_item_factura = +producto.precio_venta_uno_producto * this.quantityProducts;
                    this.itemInvioces.push(itemInvoice);
                    this.toastr.success('Articulo agregado');
                }
            } else {
                this.toastr.warning('Selecione un producto');
            }
        }
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
        this.toastr.success('Cantidad sumada.');
    }

    restarCantidad(itemInvoice: ItemInvoice): void {
        itemInvoice.unidades_item_factura -= -1;
        this.toastr.success('Cantidad restada.');
    }

    quitarArticulo(itemInvoice: ItemInvoice): void {
        let posicion = -1;
        for (let i = 0; i < this.itemInvioces.length; i++) {
            if(itemInvoice.producto_item_factura === this.itemInvioces[i].producto_item_factura) {
                posicion = i;
                break;
            }
        }
        if(posicion >= 0) {
            this.itemInvioces.splice(posicion, 1);
            this.toastr.success('Articulo quitado.');
        }
    }

    registrarFactura(): void {
        if(this.selectedClient === null) {
            Swal.fire({
                text: 'No ha selecionado un cliente, primero debe selecionar un cliente.',
                icon: 'warning'
            });
        } else if(this.selectedSeller === 0) {
            Swal.fire({
                text: 'No ha selecionado un vendedor, primero debe selecionar un vendedor.',
                icon: 'warning'
            });
        } else if(this.itemInvioces.length === 0) {
            Swal.fire({
                text: 'No se ha agregado ningun articulo a la lista.',
                icon: 'warning'
            });
        } else {
            const invoice = new Invoice();
            let valorTotal = 0;
            let cantidadTotal = 0;
            this.itemInvioces.forEach((itemInvoice) => {
                valorTotal += itemInvoice.precio_venta_total_item_factura;
                cantidadTotal += itemInvoice.unidades_item_factura;
            });
            invoice.valor_factura = valorTotal;
            invoice.cantidad_productos_factura = valorTotal;
            invoice.cliente_factura = this.selectedClientModel.id_cliente;
            invoice.vendedor_factura = this.selectedSeller;
            invoice.cliente_factura = this.selectedClientModel.ruta_cliente;
        }
    }

    setCliente(): void {
        this.selectedClientModel = this.clients.find(item => this.selectedClient == item.id_cliente);
    }

    agregarFechaDeCobro(): void {
        console.log('Fecha de cobro agregada');
    }

}
