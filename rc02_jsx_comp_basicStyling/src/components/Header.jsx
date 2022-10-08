// bu componenti başka bir yerde kullanmak için export ile kullanıma açmak gerekiyor

import React from "react";

//bu bir class componentidir
//icerisinde render bulunur
class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
      </header>
    );
  }
}

export default Header;
//bir tane export yapmak için default yazıyoruz
