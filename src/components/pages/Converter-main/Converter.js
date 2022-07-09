import React from "react";
import CurrencyCSS from "./Currency.module.css";

function Converter() {

  return (
    <>
      <div className={CurrencyCSS.Body122}>
        <div className={CurrencyCSS.container122}>
          <h1>Currency Converter</h1>
          <div className={CurrencyCSS.box122}>
            <div className={CurrencyCSS.left_box122}>
              <select name="currency" className={CurrencyCSS.currency}></select>
              <input type="number" name="" id="num" />
            </div>
            <div className={CurrencyCSS.right_box122}>
              <select name="currency" className={CurrencyCSS.currency}></select>
              <input type="text" name="" id="ans" disabled />
            </div>
          </div>
          <button className={CurrencyCSS.btn122} id="btn">
            Convert
          </button>
        </div>
      </div>
    </>
  );
}

export default Converter;
