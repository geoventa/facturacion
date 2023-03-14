import {Client} from "./client";
import {Invoice} from "./invoice";
import {Payment} from "./payment";

export class InvoiceList {
    clients: Client[] = [];
    invoices: Invoice[] = [];
    payments: Payment[] = [];
}
