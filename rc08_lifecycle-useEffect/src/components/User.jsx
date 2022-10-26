// import { useState, useEffect } from "react";

// const User = () => {
//   const [user, setUser] = useState("");

//   //? veriyi cekip data adinda bir local degiskene atarsak.veriler degiskene gelir fakat state degisken olmadigi icin render da problem olur veriler güncellenmez
//   //* state degisken olarak tanimlayip veriyi bu alanda(render) ceksek sonsuz döngüye girer,veriyi sürekli ceker.state güncellenince render calisir tekrar basa gelir veri cekilir dolayisiyla state deigisir tekrar render olur bu sekilde sonsuz dongu olur..yani render ile state birbiri icine giriyor sonsuz döngü olusturuyor
//   //? bu sorunun önüne geçmek icin useEffect kullanıyoruz.(componentDidMount yapmak icin).cünkü component did mount render dan sonra bir kere calisir

//   const getUsers = () => {
//     fetch("https://randomuser.me/api")
//       .then((res) => res.json())
//       .then((data) => setUser(data.results[0]));
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);//? bos array --> mount

//   console.log(user);
//   const { name, dob, email, picture } = user;

//   return (
//     <div>
//       <h1>
//         {/* Optional Chaining */}
//         {/* name?.first?.second */}
//         {name?.first} {name?.last}
//       </h1>
//       <img className="rounded-circle" src={picture?.large} alt="img" />
//       <p>{email}</p>
//       <h5>{new Date(dob?.date).toLocaleDateString("tr-TR")}</h5>
//       <button className="btn btn-danger" onClick={getUsers}>
//         Get User
//       </button>
//     </div>
//   );
// };

// export default User;
//todo ********** REPETİTİON *******************

import React, { useEffect } from "react";
import { useState } from "react";

const User = () => {
  const [user, setUser] = useState("");

  const getData = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };
  useEffect(() => {
    getData();
  }, []); //* burada arrayi silip update haline getirirsek tekrardan sonsuz döngü olusur

  //? getData fonksiyonun burada cagirsak,render alaninda oldugu icin sürekli cagrilacak ve veri cekme olayı sonsuz döngüye girecek tekrardan.bunu önlemek icin useEffect kullaniyoruz

  const { name, picture, email, dob } = user;
  console.log(user);

  return (
    <div>
      {/* <h1>{name && name.last}</h1> */}
      <h1>
        {name?.first} {name?.last}
      </h1>
      <img className="rounded-circle" src={picture?.large} alt="img" />
      <h3>{email} </h3>
      <h4>{new Date(dob?.date).toLocaleDateString("en-GB")}</h4>
      {/* <h4>{new Date(dob?.date).toLocaleDateString()}</h4> */}
      {/* <h4>{new Date(dob?.date).toLocaleDateString("tr-TR")}</h4> */}
      {/* sistemin tr kullanıyorsa tr icin ülke kodu yazmana gerek yok */}
      <button className="btn btn-danger" onClick={getData}>
        Get
      </button>
    </div>
  );
};

export default User;
