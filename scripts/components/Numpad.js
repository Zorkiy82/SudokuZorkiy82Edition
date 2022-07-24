class Numpad {
  constructor(numpadSelector, hadleMouseDown) {
    this._element = document.querySelector(numpadSelector);
    this._hadleMouseDown = hadleMouseDown;
    this._setListeners();
  }

  _setListeners() {
    this._element.addEventListener("mousedown", (evt) =>{
      if (evt.target.classList.contains('keyboard__button_type_digit')) {
        this._hadleMouseDown(evt.target.textContent);
      }
    }

  );
  }
}

export { Numpad };
