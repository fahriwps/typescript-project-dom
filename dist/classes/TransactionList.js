export class TransactionStatus {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, statusPayment) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        h4.innerText = `Transaction ${statusPayment} : ${heading}`;
        li.append(h4);
        p.innerText = item.message();
        li.append(p);
        this.container.prepend(li);
    }
}
export class TransactionDetail {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    ;
    message() {
        return `Rp ${this.amount} sent to ${this.recipient} for ${this.details}`;
    }
}
