import {LightningElement} from 'lwc';

export default class Example2 extends LightningElement {

    name = '[ Blank ]';

    arr = ['John', 'Sally', 'Fedor'];
    handleChange(event) {
        this.name = event.target.value
    }
}
