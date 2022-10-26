//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useState, useEffect } from "react";

//* dependency array'i hiç yazmamakla ,boş birakmak AYNİ ŞEY DEGİL !!!
//* ici boş array --> mount demektir
//* hic vermemek --> mount + update demektir
//* degisken vermek de --> mount + update demektir

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]); //? Dependency Array

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   //? componentDidMount+ComponentDidUpdate

  //   return () => {
  //     //? clean-up function (componentWillUnmount)
  //     //? unmount yapmayacaksak return'e gerek yok
  //   };
  // }, []); //? dependecy array : buraya yazdigim degisken didUpdate kisminda calisir
  // //? mounting'de dependency array bos olur
  //? dependency array de bir degisken olursa useEffect() hem mounting hem update gibi calisir (lifecycle metodlarindan)

  //? componentDidMount
  //! fetch, asyn-await ,localStorage, setTimeout, setInterval();
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("Data fetched !");
  //   }, 3000);
  // }, []);

  //? componentDidMount + componentDidUpdate

  // useEffect(() => {
  //   console.log("Mounting + Updating");
  //   setTimeout(() => {
  //     alert("Data fetched.");
  //   }, 3000);
  // }, [count]);

  return (
    <div className="container text-center">
      <h1 className="text-danger">USE EFFECT</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
