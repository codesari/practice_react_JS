import { useState } from "react";
let count = 0;
const KeyboardClipboard = () => {
  //? state 'i gereksiz kullanmak uygulamayi yavaslatir
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("You must not enter a number");
      e.preventDefault();
      // sayi girmeyi engelledigimiz uyaridan sonra inputa yazmasini engellemek icin prevent kullandik
    }
  };
  return (
    <div className="container">
      <h1>CLİPBOARD EVENTS</h1>
      <input
        type="text"
        // form-control bootstrap'in formu
        className="form-control"
        onChange={(e) => {
          e.target.value = e.target.value.toUpperCase();
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <p className="text-start mt-4">{inputValue}</p>
    </div>
  );
};

export default KeyboardClipboard;

// input'un icine sayi yazilmasini engellemek istersek onKeyDown metodunu kullanmamiz gerekmekte.cünkü "e.keycode" -yani girilen degerin ASCII karsiligi- onChange icinde undefined gözüküyor.yani keycode change event'ı degil,keydown eventidir.
//! onChange keyboard eventı degildir
