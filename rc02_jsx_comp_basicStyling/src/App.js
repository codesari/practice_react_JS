import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    //* return icinde döndürdügümüz alan JSX.burada js kodları kullanmak istersek süslüacmamiz gerekmekte
    //birden fazla html tag i kullanmak istediğimizde bir parent lazım oluyor,sarmallamak gerekiyor.
    <>
      <Header />
      <Content /> <Footer />
    </>
  );
}

export default App;
