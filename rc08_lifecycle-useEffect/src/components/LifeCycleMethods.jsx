//?==================================================================
//?                         LIFECYCLE METOTLARI
//?          https://reactjs.org/docs/react-component.html
//?==================================================================
// ! LİFECYCLE METOTLARI MÜLAKATTA ÇIKAR

//* Lifecycle metotlari componetnlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React mototlaridir.
//* Ornegin bir component olsuturuldugunda, DOM'a basilsiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olsuturulmasi (constructor,
//* Bir componentin DOM agacina eklenmesinin sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional)Bir componentin guncellenmesinin sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)

import React from "react";

class LifeCycleMethods extends React.Component {
  constructor(props) {
    //! 1- önce cocuk anne karnında olusur
    console.log("Constructor running.");
    super(props);
    this.state = {
      count: 0,
    };
  }
  // arrow fonk()'da bind yapmaya gerek yok
  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //? lifecycle metodlarini bind yapmaya gerek yok.kendi icinde mevcut
  componentDidMount() {
    //! 3- sonra isim koyduk
    console.log("Mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    // her butona basıldıgında yani her state güncellemede update calisir.
    console.log("Updated");
    console.log(prevState.count);
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    //! 2-sonra dogar
    console.log("Rendered");
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
