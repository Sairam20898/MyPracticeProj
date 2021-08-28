import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/PracticeApexClass.getAccounts';

export default class Practice1Lwc extends LightningElement {
    text = 'Hai, I am Sairam yadav..';
    @track accounts;
    constructor(){
        super();
       console.log('parent constructor call');
   }
   connectedCallback(){
       console.log('parent connected callback call');
   }
   
   @wire(getAccounts)
   wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            console.log(this.accounts);
        } else if (error) {
            console.log(error);
            this.error = error;
        }
    }

    salesforcedriller = [
        {
            Id: 1,
            Name: 'salesforcedriller-I'
        },
        {
            Id: 2,
            Name: 'salesforcedriller-II'
        },
        {
            Id: 3,
            Name: 'salesforcedriller-III'
        },
    ];
}