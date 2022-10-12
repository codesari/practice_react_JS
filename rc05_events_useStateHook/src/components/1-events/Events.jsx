//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html

const Events = () => {
  // burasi JS ortami
  // kisa ise inline uzun ise yukarida fonk tanimliyoruz (best practice)
  const handleClick = () => {
    alert("Button clicked.");
  };
  const handleClear = (msg) => {
    alert(msg);
  };
  return (
    // return ün ici JSX ortami
    <div>
      <div className="container text-center mt-4">
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
      </div>
    </div>
  );
};

export default Events;
