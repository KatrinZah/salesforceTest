import {LightningElement, api} from 'lwc';

export default class NameComponent extends LightningElement {
    @api name;

    property1 = 'property1';
    @api property2 = 'p2';
}