'use script';

class TransformText {
    constructor(block, valueInput, valueInputOption, valueForReplace) {
        this.block = document.querySelector(block);
        this.value1 = valueInput;
        this.value2 = valueInputOption;
        this.value3 = valueForReplace;
        this.init();
    }


    init() {
        this.transform();
    }

    transform() {
        let regExp = new RegExp(this.value1, this.value2);
        let regExpOutput = this.block.textContent.replace(regExp, this.value3);

        return this.render(regExpOutput);

    }

    render(value) {
        return this.block.textContent = value;
    }
}


let regExp1 = new TransformText('#text', "'", 'g', '"');
console.log(regExp1.transform());






