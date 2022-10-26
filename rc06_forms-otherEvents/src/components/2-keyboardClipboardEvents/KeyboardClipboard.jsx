import { useState } from "react";
let count = 0;
const KeyboardClipboard = () => {
  //? state 'i gereksiz kullanmak uygulamayi yavaslatir
  const [inputValue, setInputValue] = useState("");

  const handlePaste = (e) => {
    //* e.clipboardData,kopyalama panosundaki veiryi okur
    e.target.value += e.clipboardData.getData("text");
    e.preventDefault();
    // paste yaptigimiz zaman iki tane paste olmus ifade görülüyor.bunun sebebi browserlarında kendi paste yapma özellikleri.browser da kopyalama panosundaki degeri alıyor ve basiyor.iki tane paste olusmamasi icin preventDefault kullaniyoruz
    //? paste yaptigim zaman sytle degissin istiyorsam
    e.target.style.color = "red";
    e.target.style.fontWeight = "600";
  };

  const handleKeyDown = (e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("You must not enter a number");
      e.preventDefault();
      // sayi girmeyi engelledigimiz uyaridan sonra inputa yazmasini engellemek icin prevent kullandik
    }
    e.keyCode === 13 && setInputValue("");
  };
  return (
    <div className="container">
      <h1>CLİPBOARD EVENTS</h1>
      <input
        type="text"
        // form-control bootstrap'in formu
        className="form-control"
        value={inputValue}
        onChange={(e) => {
          e.target.value = e.target.value.toUpperCase();
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      {/* p elementinin icerigini kopyalanmasini engellemek icin onCopy metodu kullanilir */}
      <p
        onCopy={(e) => {
          e.preventDefault();
          //  preventDefault ile kopyalanma engellendi.
          alert("you cannot copy this doc");
        }}
        className="text-start mt-4"
      >
        {inputValue}
      </p>
      {/* textareanin icinde enter ile alt satira gecilebilir */}
      <textarea
        onPaste={handlePaste}
        className="form-control"
        name="area"
        id="area"
      ></textarea>
      {/* onPaste metodu,areanin icine birsey yapistirildiginda tetiklenir */}
    </div>
  );
};

export default KeyboardClipboard;

// input'un icine sayi yazilmasini engellemek istersek onKeyDown metodunu kullanmamiz gerekmekte.cünkü "e.keycode" -yani girilen degerin ASCII karsiligi- onChange icinde undefined gözüküyor.yani keycode change event'ı degil,keydown eventidir.
//! onChange keyboard eventı degildir

//* state degiskenini sifirladigimiz zaman render edilen kisimda silinir fakat inputdan silinmez.her iki taraftan silinmesini istiyorsak value'ye state degiskenini atamamiz gerekiyor.bu yüzden inputlarin onChange ve value'lari beraber kullanılır
