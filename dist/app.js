import { TransactionStatus, TransactionDetail } from './classes/TransactionList.js';
const form = document.querySelector('.new-item-form');
// DOM Input Form
const paymentType = document.querySelector('#payment-type');
const recipientName = document.querySelector('#recipient-name');
const detailsTransaction = document.querySelector('#details-transaction');
const amountTransaction = document.querySelector('#amount-transaction');
const ul = document.querySelector('ul');
// Create instance of Transaction Status and Transaction Detail
const list = new TransactionStatus(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    let status;
    values = [recipientName.value, detailsTransaction.value, amountTransaction.valueAsNumber];
    status = new TransactionDetail(...values);
    list.render(status, paymentType.value);
});
