import {Cell, Img, PdfMakeWrapper, Table, Txt} from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {Enterprice} from '../models/enterprice';
import {Seller} from '../models/seller';
import {Invoice} from '../models/invoice';
import {ItemInvoice} from '../models/itemInvoice';
import {Product} from '../models/product';

export class MovimientosProductosDiariosToPdfTicket {

  productos: Product[] = [];
  facturas: Invoice[] = [];
  itemFacturas: ItemInvoice[] = [];
  vendedores: Seller[] = [];

  async crearPdf(enterprice: Enterprice, vendedores: Seller[], facturas: Invoice[], itemFacturas: ItemInvoice[], productos: Product[], isImprimir: boolean, date: Date): Promise<any> {
    this.productos = productos;
    this.facturas = facturas;
    this.vendedores = vendedores;
    this.itemFacturas = itemFacturas;
    const fechaActual = date.getFullYear() + '-' + ((date.getMonth() + 1 < 10) ? '0' : '') + (date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate();
    console.log(fechaActual);
    PdfMakeWrapper.setFonts(pdfFonts);
    const pdf = new PdfMakeWrapper();
    const pageDimensionsInPt = 80 * 2.84527559055;
    pdf.pageSize({width: pageDimensionsInPt, height: 'auto'});

    pdf.pageMargins([20, 10, 20, 60]);
    pdf.info({
      title: 'Movimientos diarios',
      author: 'Adalberto Contreras',
    });
    pdf.add(
      new Cell(new Txt(enterprice.nombre_empresa).alignment('center').bold().width(100).end).width('100%').end);
    pdf.add(new Cell(new Txt(enterprice.nit_empresa + '').alignment('center').bold().width(100).end).width('100%').end);
    pdf.add(new Cell(new Txt(enterprice.direccion_empresa).alignment('center').bold().width(100).end).width('100%').end);
    pdf.add(new Cell(new Txt(enterprice.numero_telefono_uno_empresa).alignment('center').bold().width(100).end).width('100%').end);
    pdf.add(new Cell(new Txt(' ').end).lineHeight(4).end);
    pdf.add(new Cell(new Txt('Dia consulta : ').bold().end).end);
    pdf.add(new Cell(new Txt(fechaActual).end).end);
    pdf.add(new Cell(new Txt(' ').end).lineHeight(2).end);
    pdf.add(new Cell(new Txt('VENDEDORAS').bold().end).lineHeight(2).end);
    vendedores.forEach((vendedor) => {
      pdf.add(new Cell(new Txt(`${vendedor.primer_nombre_vendedor} ${vendedor.primer_apellido_vendedor}`).bold().fontSize(14).alignment('left').width(100).end).width('100%').end);
      const productosVendedora = this.getProductosPorVendedora(vendedor.id_vendedor);
      if (productosVendedora.length > 0) {
        pdf.add(new Cell(new Txt(' ').end).lineHeight(2).end);
        pdf.add(new Cell(new Txt('Total').bold().end).end);
        productosVendedora.forEach((producto) => {
          pdf.add(new Cell(new Txt(`${producto?.name} => ${producto.cantidad}`).end).end);
        });
        /*pdf.add(new Cell(new Txt(' ').bold().end).lineHeight(2).end);
        pdf.add(new Cell(new Txt('Detallado').bold().end).end);
        this.getFacturasPorVendedor(vendedor.id_vendedor).forEach( (factura: Factura) => {
          console.log(factura);
          this.getItemFacturaPorFactura(factura.id_factura).forEach((itemfactura: ItemFactura) => {
            const producto = this.getProductById(itemfactura.producto_item_factura);
            pdf.add(new Cell(new Txt(`${producto?.nombre_producto} => ${parseFloat(itemfactura.unidades_item_factura + '')}`).end).end);
          });
        });*/
      } else {
        pdf.add(new Cell(new Txt('**Sin venta**').fontSize(12).end).lineHeight(2).end);
      }
      pdf.add(new Cell(new Txt('').end).lineHeight(2).end);
      pdf.add(new Cell(new Txt('---------------------------------------------------').end).lineHeight(2).end);
    });
    if (!isImprimir) {
      pdf.create().download();
    } else {
      pdf.create().print();
    }
  }

  getFacturasPorVendedor(vendedor: number): Invoice[] {
    return this.facturas.filter(item => item.vendedor_factura == vendedor);
  }

  getItemFacturaPorFactura(factura: number): ItemInvoice[] {
    return this.itemFacturas.filter(item => item.factura_item_factura == factura);
  }

  getProductById(product: number): Product {
    return this.productos.find(item => item.id_producto == product);
  }

  getProductosPorVendedora(vendedora: number): {id: number; name: string; cantidad: number}[] {
    const productos: {id: number; name: string; cantidad: number}[] = [];
    const facturas = this.getFacturasPorVendedor(vendedora);
    facturas.forEach((factura) => {
      const itemFacturasAux = this.getItemFacturaPorFactura(factura.id_factura);
      itemFacturasAux.forEach((itemFactura) => {
        const productoAux = this.getProductById(itemFactura.producto_item_factura);
        if (productoAux) {
          if (productos.filter(producto => producto.id == productoAux.id_producto).length == 0) {
            productos.push({id: productoAux.id_producto, name: productoAux.nombre_producto, cantidad: parseFloat(itemFactura.unidades_item_factura + '')});
          } else {
            console.log(productos);
            productos.find(item => item.id === productoAux.id_producto).cantidad += +itemFactura.unidades_item_factura;
          }
        }
      });
    });
    return productos;
  }
}
