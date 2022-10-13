// import { Component } from "react";

// class Counter extends Component {
//   //rconst (snippet)
//   constructor(props) {
//     super(props);
//     //count state'ine baslangic degeri atadik.
//     this.state = {
//       count: 0,
//     };
//     //? increment metodunun Counter class'ina baglanmasi (bind)
//     this.increment = this.increment.bind(this);
//   }
//   // fonk. constructor'un disina yaziyoruz
//   increment() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }
//   decrement = () => {
//     //arrow fonk. ile kullandıgimizda binding yapmaya gerek kalmıyor
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };

//   render() {
//     return (
//       <div className="container text-center mt-4">
//         <h1>CLASSFULL COMPONENTS</h1>
//         <h2>COUNT :{this.state.count}</h2>
//         <button onClick={this.increment} className="btn btn-success">
//           INC
//         </button>
//         <button className="btn btn-danger">CLR</button>
//         <button className="btn btn-primary">DEC</button>
//       </div>
//     );
//   }
// }

// export default Counter;

//? ******** COURSE REPETİTİON *************

import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //* burada if'leri kullanamadıgımız icin short circiut statementları bilmemiz lazım
      count: props.value || 0,
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    // state in degerini degistirmek icin setState kullanmak gerekiyor.(constructor un icinde baslangic degeri vermek haric)
    this.setState({
      count: this.state.count + 1,
    });
  }
  // ? arrow fonk. kullanıldıgı zaman bind yapmaya gerek kalmıyor.Arrow fonk. ortaya cikma sebebi aslında budur.
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div className="counter-div mt-4 text-center">
        <h1>COUNTER COMPONENTS</h1>
        {/* count degiskenin component icinde oldugu icin this ile erisiyoruz.ayrıca state'in icinde oldugu icin de this.state.count ile ulasabiliyoruz. */}
        <h2 className="display-5">Count : {this.state.count}</h2>
        <div className="button">
          <button className="btn btn-success" onClick={this.increment}>
            Increment
          </button>
          <button className="btn btn-danger" onClick={this.decrement}>
            Decrement
          </button>
          <button className="btn btn-warning">Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
