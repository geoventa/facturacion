import {Canvas, Cell, Line, PdfMakeWrapper, Table, Txt} from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {Enterprice} from '../models/enterprice';
import {Seller} from '../models/seller';
import {Invoice} from '../models/invoice';
import {ItemInvoice} from '../models/itemInvoice';
import {Client} from '../models/client';
import {Product} from '../models/product';
import {BillingDate} from '../models/billingDate';

export class ImprimirFacturaPdfTicket {
    productos: Product[] = [];
    facturas: Invoice = null;
    itemFacturas: ItemInvoice[] = [];
    vendedores: Seller = null;

    async crearPdf(
        enterprice: Enterprice,
        vendedor: Seller,
        factura: Invoice,
        itemFacturas: ItemInvoice[],
        isImprimir: boolean,
        cliente: Client,
        billinsDate: BillingDate[]): Promise<any> {
        const textSmall = 9;
        this.facturas = factura;
        this.vendedores = vendedor;
        this.itemFacturas = itemFacturas;
        PdfMakeWrapper.setFonts(pdfFonts);
        const pdf = new PdfMakeWrapper();
        const pageDimensionsInPt = 80 * 2.84527559055;
        pdf.pageSize({width: pageDimensionsInPt, height: 'auto'});

        pdf.pageMargins([20, 10, 20, 60]);
        pdf.info({
            title: `${cliente.nombre_empresa_cliente || (cliente.primer_nombre_cliente + ' ' + cliente.primer_apellido_cliente)} - Fact. # ${factura.id_factura}`,
            author: 'Adalberto Contreras',
        });
        pdf.add(
            new Cell(new Txt(enterprice.nombre_empresa).alignment('center').fontSize(16).bold().width(100).end).width('100%').end);
        pdf.add(new Cell(new Txt(enterprice.nit_empresa + '').alignment('center').bold().width(100).end).width('100%').end);
        pdf.add(new Cell(new Txt(enterprice.direccion_empresa).alignment('center').bold().width(100).end).width('100%').end);
        pdf.add(new Cell(new Txt(enterprice.numero_telefono_uno_empresa).alignment('center').bold().width(100).end).width('100%').end);
        pdf.add(new Cell(new Txt(' ').end).lineHeight(1).end);
        pdf.add(new Canvas([
            new Line([0, 0], [200, 0]).end
        ]).end);
        pdf.add(new Cell(new Txt(' ').end).lineHeight(1).end);
        pdf.add(new Cell(new Txt(`FACTURA DE VENTA: ${factura.id_factura}`).bold().alignment('right').end).end);
        pdf.add(new Cell(new Txt(' ').end).lineHeight(1).end);
        pdf.add(new Cell(new Txt(`FECHA : ${factura.fecha_registro_factura} ${factura.hora_registro_factura}`).end).end);
        pdf.add(new Cell(new Txt('CLIENTE :').end).end);
        pdf.add(new Cell(new Txt(
            `${cliente.primer_nombre_cliente} ${cliente.segundo_nombre_cliente} ${cliente.primer_apellido_cliente} ${cliente.segundo_apellido_cliente}`
        ).end).end);
        pdf.add(new Cell(new Txt(`C.C. / NIT : # ${cliente.numero_documento_cliente}`).end).end);
        pdf.add(new Cell(new Txt('...........................................................').end).lineHeight(1).end);
        pdf.add(new Cell(new Txt('VENDEDOR :').end).end);
        pdf.add(new Cell(new Txt(`${vendedor.nombre_cuenta_vendedor}`).end).end);
        pdf.add(new Cell(new Txt(' ').end).lineHeight(1).end);
        pdf.add(new Canvas([
            new Line([0, 0], [200, 0]).end
        ]).end);
        pdf.add(new Cell(new Txt(' ').end).lineHeight(1).end);
        pdf.add(new Table([[
                new Cell(new Txt('Descripción').fontSize(textSmall).end).end,
                new Cell(new Txt('Cant.').fontSize(textSmall).end).end,
                new Cell(new Txt('Valor').fontSize(textSmall).end).end
        ]]).widths(['60%', '10%', '30%']).width('100%').layout('noBorders').end);
        itemFacturas.forEach((itemFactura) => {
            const valor = +itemFactura.precio_venta_total_item_factura;
            const cantidad = +itemFactura.unidades_item_factura;
            pdf.add(new Table([
                [
                    new Cell(new Txt(itemFactura.nombre_producto_item_factura).fontSize(textSmall).end).end,
                    new Cell(new Txt(cantidad.toFixed(0) + '').alignment('right').fontSize(textSmall).end).end,
                    new Cell(new Txt('$ ' + valor.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')).fontSize(10).alignment('right').end).end
                ]
            ]).widths(['60%', '10%', '30%']).width(100).width('100%').layout('noBorders').end);
        });
        const valorFactura = +factura.valor_factura;
        pdf.add(new Cell(new Txt('...........................................................').end).lineHeight(1).end);
        pdf.add(new Table([
            [
                new Cell(new Txt('Total : ').bold().alignment('right').end).end,
                new Cell(new Txt('$ ' + valorFactura.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')).bold().alignment('right').end).end
            ]
        ]).widths(['60%', '40%']).width('100%').layout('noBorders').end);
        pdf.add(new Cell(new Txt(' ').end).lineHeight(1).end);
        pdf.add(new Canvas([
            new Line([0, 0], [200, 0]).end
        ]).end);
        pdf.add(new Cell(new Txt(' ').end).lineHeight(1).end);
        pdf.add(new Table([
            [
                new Cell(new Txt('Tipo pago :').bold().alignment('right').end).end,
                new Cell(new Txt('Credito').bold().alignment('left').end).end
            ]
        ]).widths(['60%', '40%']).width('100%').layout('noBorders').end);
        pdf.add(new Cell(new Txt(' ').end).lineHeight(2).end);
        pdf.add(new Cell(new Txt('Fechas de pago').bold().end).lineHeight(2).end);
        billinsDate.forEach((billingDate) => {
            pdf.add(new Cell(new Txt(billingDate.fecha_fecha_cobro + '                ').end).lineHeight(1).end);
            pdf.add(new Cell(new Txt(' ').end).lineHeight(3).end);
            pdf.add(new Cell(new Txt('Firma:................................................').end).lineHeight(1).end);
            pdf.add(new Cell(new Txt(' ').end).lineHeight(1).end);
        });
        if (!isImprimir) {
            pdf.create().download();
        } else {
            pdf.create().print();
        }
    }
}
