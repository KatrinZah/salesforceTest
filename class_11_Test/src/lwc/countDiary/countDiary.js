/**
 * Created by appleroom on 8/25/21.
 */

import {LightningElement, api, wire} from 'lwc';
import getCount from '@salesforce/apex/getCountDiary.getCount';
import deleteDiary from '@salesforce/apex/deleteDiary.deleteDiary';
import { getRecord } from 'lightning/uiRecordApi';

export default class countDiary extends LightningElement {
    @api innertext;
    @api Myresult;

    handleClick(event) {
        console.log('button tap ->');

        deleteDiary()
            .then(() => {
                this.Myresult = 0;
                console.log('delete diary ->');
            });

    }

    connectedCallback() {
        getCount()
            .then(result =>  {
                console.log('res: ' + result);
                this.Myresult = result;
            })
            .catch(error => {
                console.log('error' + error);
            })


    }


}