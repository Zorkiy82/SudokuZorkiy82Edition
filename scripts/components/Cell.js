class Cell {
  constructor(cellElement, initDigit, hadleMouseDown) {
    // debugger;
    this._cellElement = cellElement;
    this._cellMainDigitElement = this._cellElement.querySelector(
      ".field__cell-main-digit"
    );
    this._cellPossibleDigitsElementsList = this._cellElement
      .querySelector(".field__cell_list")
      .querySelectorAll("li");
    this._initDigit = initDigit;
    this._isStaticCell = !(initDigit === 0);
    this._hadleMouseDown = hadleMouseDown;
    this._userDigit = "";
    this._possibleDigits = ["", "", "", "", "", "", "", "", ""];
  }

  initialRender() {
    this._setListeners();

    if (this._isStaticCell) {
      this._cellMainDigitElement.textContent = String(this._initDigit);
      this._cellMainDigitElement.style.color = "#000";
    } else {
      this._renderPossibleDigits();
    }
  }

  _renderPossibleDigits() {
    this._possibleDigits.forEach((item, index) => {
      this._cellPossibleDigitsElementsList[index].textContent = String(item);
    });
  }

  _setListeners() {
    this._cellElement.addEventListener("mousedown", () =>
      this._hadleMouseDown(this)
    );
  }

  toggleSelected() {
    this._cellElement.classList.toggle("field__cell_selected");
  }

  _renderUserDigit() {
    this._cellMainDigitElement.textContent = this._userDigit;
  }

  setUserDigit(digit) {
    if (!this._isStaticCell) {
      if (this._userDigit !== digit) {
        this._userDigit = digit;
      } else {
        this._userDigit = "";
      }

      this._renderUserDigit();
    }
  }
}

export { Cell };
