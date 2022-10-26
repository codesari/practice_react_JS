//  Dahili bir resim eklemek icin import yapmak gereklidir.
import img from "../img/spring2.jpg";

// rcc snippet'ı ile bir class component olusturabiliriz
//  class componentin icinde render fonk() bulunur.


export default class summary extends Component {
  render() {
    return <div>summary</div>;
  }
}

//! İnline style
// eger inline style uzun ise inline style yerine bir degisken yazıp,degiskeni disarida tanimlayabiliriz

 const imgStyle = {
    display: "block",
    width: "400px",
    margin: "1rem auto",
  };
<>
  <h2 style={{ color: "red" }}>React JS</h2>
  <p style={{ backgroundColor: "yellow" }}></p>
  <img style={imgStyle} src="https://picsum.photos/id/674/600/400" alt="" />
</>;

// bir componente name,age gibi props verip ilgili componente gönderebiliyoruz.
<Msg name="Ahmet" age="30" />;
// karsilarken de Msg componentinin parametresinde havada yakalıyoruz.destruction yapmazsak props
const Msg = (props) => {
  
  const { name } = props; // destruction
  return (
    <>
      {/* <h1>Hello World {props.name}</h1> */}
      <h1>Hello World {name}</h1>
      {/* destruction lu hali */}
    </>
  );
};

export default Msg;
