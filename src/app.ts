import { TransactionStatus, TransactionDetail } from './classes/TransactionList.js';
import { ShowMessage } from './interfaces/ListMessage.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// DOM Input Form
const paymentType = document.querySelector('#payment-type') as HTMLInputElement;
const recipientName = document.querySelector('#recipient-name') as HTMLInputElement;
const detailsTransaction = document.querySelector('#details-transaction') as HTMLInputElement;
const amountTransaction = document.querySelector('#amount-transaction') as HTMLInputElement;
const ul:HTMLUListElement = document.querySelector('ul')!;

// Create instance of Transaction Status and Transaction Detail
const list = new TransactionStatus(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let values: [string, string, number];
  let status: ShowMessage;
  values = [recipientName.value, detailsTransaction.value, amountTransaction.valueAsNumber];

  if (recipientName.value !== null && detailsTransaction.value !== null && amountTransaction.valueAsNumber !== null) {
    status = new TransactionDetail(...values);
    list.render(status, paymentType.value, `success`);
  } else {
    status = new TransactionDetail(...values);
    list.render(status, paymentType.value, `failed`);
  }
});
