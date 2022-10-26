import React from "react";
import Msg from "./components/Msg";
import Person from "./components/Person";
import data from "./data";

function App() {
  //! Msg componentinin kodlari
  // return (
  //   <div>
  //     <Msg name="Felix" age="5" />
  //     <Msg name="Harvey" />
  //     {/* burada bir fonk cagirip parametreyi obje olarak verebiliriz.yukaridakine alternatif olarak */}
  //     {Msg({ name: "Noah" })}
  //   </div>
  // );

  //! Person componentinin kodlari
  // return (
  //   <>
  //     <Person />
  //   </>
  // );
  return (
    <>
      {/* jsx burada direk dzi elemanlarini ekrana basabiliyor.  */}
      {["ahmet", "sari"]}
      {[<p>merhaba</p>, <p>ahmet</p>]}
      {/* jsx içinde for veya if kullanamiyoruz çünkü dönüş değeri yapmıyorlar.Ternary kullanabilirz. */}
      {/* map yeni bir dizi döndürür */}
      {data.map((person) => (
        <Person name={person.name} img={person.img} tel={person.tel} />
      ))}

      {/* <Person name={data[0].name} img={data[0].img} tel={data[0].tel} />
      <Person name={data[1].name} img={data[1].img} tel={data[1].tel} /> */}
    </>
  );
}

export default App;
