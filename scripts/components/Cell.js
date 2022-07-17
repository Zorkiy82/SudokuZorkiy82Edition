class Cell{
  constructor(cellElement, initValue){
    // debugger;
    this._cellElement = cellElement;
    this._cellMainDigitElement = this._cellElement.querySelector('.field__cell-main-digit');
    this._cellPossibleDigitsElementsList = this._cellElement.querySelector('.field__cell_list').querySelectorAll('li');
    this._initValue = initValue;
    this._isStaticCell = !(initValue === 0);
  }

  initialRender(){
    if (this._isStaticCell) {
        this._cellMainDigitElement.textContent = String(this._initValue);
    } else {
      this.setPossibleDigits([1,2,3,4,5,6,7,8,9]);
    }

  }

  setPossibleDigits(possibleDigitsArray){
    possibleDigitsArray.forEach((item, index) => {
      this._cellPossibleDigitsElementsList[index].textContent =  String(item);
    });
  }
}

export {Cell};
