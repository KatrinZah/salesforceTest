import {LightningElement} from 'lwc';

export default class ExampleDiary extends LightningElement {

    arr = ['John Diary', 'Sally Diary', 'Fedor Diary'];

    handleChange(event) {
        this.name = event.target.value
    }
}