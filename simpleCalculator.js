import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track previewResults = [];
    @track checkPreviewResults = false;

    firstNumber;
    secundNumber;

    numberChangeHandler(event){
        const inputFieldName = event.target.name;
        if(inputFieldName === 'firstNumber'){
            this.firstNumber = event.target.value;
        } else if(inputFieldName === 'secundNumber'){
            this.secundNumber = event.target.value;
        }
    }

    addHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secundNum = parseInt(this.secundNumber);
        this.currentResult = `Result of ${firstNum} + ${secundNum} is ${firstNum+secundNum}`;
        this.previewResults.push(this.currentResult);
        console.log(this.currentResult);
    }
    
    subHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secundNum = parseInt(this.secundNumber);
        this.currentResult = `Result of ${firstNum} - ${secundNum} is ${firstNum-secundNum}`;
        this.previewResults.push(this.currentResult);
        console.log(this.currentResult);
    }

    multiplyHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secundNum = parseInt(this.secundNumber);
        this.currentResult = `Result of ${firstNum} * ${secundNum} is ${firstNum*secundNum}`;
        this.previewResults.push(this.currentResult);
        console.log(this.currentResult);
    }

    divisionHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secundNum = parseInt(this.secundNumber);
        this.currentResult = `Result of ${firstNum} / ${secundNum} is ${firstNum/secundNum}`;
        this.previewResults.push(this.currentResult);
        console.log(this.currentResult);
    }

    showPreviewResults(event){
        this.checkPreviewResults = event.target.checked;
    }
}