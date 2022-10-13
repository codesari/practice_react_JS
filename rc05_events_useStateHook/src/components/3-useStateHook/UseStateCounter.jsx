// Hook'lari kullanmak icin önce import etkmek gerekiyor.Hangi Hook'u kullanılacaksa o import edilir.
import { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0); // 0 baslangic degeri. // ? arr destruction..

  //? UseState Object tanimliyorum

  const [person, setPerson] = useState({
    name: "Ahmet",
    surname: "Sari",
    age: 30,
  });
  console.log(person);

  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count == 0) return;
    setCount(count - 1);
  };

  const incAge = () => {
    //! bu seilde primitive atama yapıldıgında object yapısı bozuldu.yani object yapiya primitive bir degisken vermis olduk.Cozum : objenin üzerine yine obje ile yazmak lazım
    // setPerson(person.age + 1);
    // setPerson({ age: person.age + 1 });
    //! bu sekilde yaparsak da sadece age key'ini basar diger keyleri basmaz.bunun cozumu icin spread operatoru kullanıyoruz (...)
    setPerson({ ...person, age: person.age + 1 });
  };
  return (
    <div className="counter-div mt-4 text-center">
      <section>
        <h1>USE STATE HOOK</h1>
        <h2 className="display-5">Count :{count} </h2>
        <div className="button">
          <button onClick={inc} className="btn btn-success">
            Increment
          </button>
          <button onClick={dec} className="btn btn-danger">
            Decrement
            {/* <button onClick={() => setCount(count - 1)} className="btn btn-danger"> */}
            {/* <button onClick={() => count>0 && setCount(count - 1)} className="btn btn-danger"> */}
            {/* short circiut ile eksi degere gitmeyi önledik Decrement */}
          </button>
          <button onClick={() => setCount(0)} className="btn btn-dark">
            {/* <button onClick={setCount(0)} className="btn btn-dark"> */}
            {/* bu sekilde (inline) olarak fonk.cagirdigimizda program sonsuz döngüye girer cünkü sürekli bir render durumu olusuyor.setCount(0),count degiskenini 0 yaptı ve return icindeki ifadeler render edildi.render edildiğinde setCount() fonk. tekrar cagirilmis oldu.tekrar cagirilinca tekrar bir render yaptı.bu sekilde sonsuz döngüye gidiyor.React bunu engelliyor. */}
            Reset
          </button>
        </div>
      </section>
      <section>
        <h1>USESTATE OBJECT</h1>
        <h2>{person.name}</h2>
        <h2>{person.surname}</h2>
        <h2>{person.age}</h2>
        <button onClick={incAge} className="btn btn-info">
          Inc Age
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
