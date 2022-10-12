//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html

const Events = () => {
  // burasi JS ortami
  let message = "EVENT BASED PROGRAM";
  // kisa ise inline uzun ise yukarida fonk tanimliyoruz (best practice)
  const handleClick = () => {
    alert("Button clicked.");
  };
  const handleClear = (msg) => {
    alert(msg);
  };
  const handleChange = (e) => {
    console.log(e.target);
    message = "REACT";
    // react degiskenleri direk olarak DOM'a basmiyor.Durum Değişkneleri(State) ler burada devreye giriyor
    console.log(message);
  };
  return (
    // return ün ici JSX ortami
    <div>
      <div className="container text-center mt-4">
        <h1>{message}</h1>
        {/* handle --> best practice */}
        {/* fonk. parametre almayacaksa bu sekilde kullanmak daha dogru. */}
        <button onClick={handleClick} className="btn btn-primary">
          Click
        </button>
        <button
          // sayfayı yenileyince buradaki fonksiyon doğrudan calisiyor.js bunu fonk. cagiriyoruz diye algiliyor
          //   onClick={handleClear("Clear button clicked.")}
          onClick={() => handleClear("Clear button clicked.")}
          className="btn btn-dark"
        >
          Clear
        </button>
        {/* burada handleChange'e parametre vermesek bile yukarida e'yi yakaladi */}
        <button onClick={handleChange} className="btn btn-danger">
          {/* <button onClick={(e) => handleChange(e)} className="btn btn-danger"> */}
          Change
        </button>
      </div>
    </div>
  );
};

export default Events;
