import { ShowMessage } from "../interfaces/ListMessage";

export class TransactionStatus {
  constructor(private container: HTMLUListElement){}

  render(item: ShowMessage, heading: string, statusPayment: string){
    const li:HTMLLIElement = document.createElement('li');
    const h4:HTMLHeadingElement = document.createElement('h4');
    const p:HTMLParagraphElement = document.createElement('p');

    h4.innerText = `Transaction ${statusPayment} : ${heading}`;
    li.append(h4);
    p.innerText = item.message();
    li.append(p);
    this.container.prepend(li);
  }
}

export class TransactionDetail implements ShowMessage {
  constructor(
    private recipient: string,
    private details: string,
    private amount: number,
  ){};

  message() {
    return`Rp ${this.amount} sent to ${this.recipient} for ${this.details}`;
  }
}


