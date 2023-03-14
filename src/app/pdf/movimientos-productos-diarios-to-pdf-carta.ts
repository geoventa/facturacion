import {Cell, Img, PdfMakeWrapper, Table, Txt} from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {Enterprice} from '../models/enterprice';
import {Seller} from '../models/seller';
import {Invoice} from '../models/invoice';
import {ItemInvoice} from '../models/itemInvoice';
import {Product} from '../models/product';

export class MovimientosProductosDiariosToPdfCarta {

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
    PdfMakeWrapper.setFonts(pdfFonts);
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('A4');

    pdf.pageMargins([40, 60, 40, 60]);
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
    pdf.add(new Cell(new Txt('Vendedoras').bold().end).lineHeight(2).end);
    vendedores.forEach((vendedor) => {
      pdf.add(new Cell(new Txt(`${vendedor.primer_nombre_vendedor} ${vendedor.primer_apellido_vendedor}`).bold().fontSize(14).alignment('left').width(100).end).width('100%').end);
      const productosVendedora = this.getProductosPorVendedora(vendedor.id_vendedor);
      if (productosVendedora.length > 0) {
        pdf.add(new Cell(new Txt(' ').end).lineHeight(2).end);
        pdf.add(new Cell(new Txt('Total').bold().end).end);
        productosVendedora.forEach((producto) => {
          pdf.add(new Cell(new Txt(`${producto?.name} => ${producto.cantidad}`).end).end);
        });
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
