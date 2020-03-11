export class Invoice {
    constructor() { }
    entryList = [];
    invoiceDate = "";
    invoiceAmt = 0;

}
export class Entry {
    constructor() { }
    product: String;
    price: number;
    qty: number;
    amt: number;
    type: string;

}