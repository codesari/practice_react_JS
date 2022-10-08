//Dahili bir resim eklemek icin import yapmak gereklidir.
import img from "../img/spring2.jpg";

//Harici bir stillendirme kullanacaksam
import "./Content.css";

const Content = () => {
  const imgStyle = {
    display: "block",
    width: "400px",
    margin: "1rem auto",
  };
  return (
    //! İnline style
    <>
      <h2 style={{ color: "red" }}>React JS</h2>
      <p style={{ backgroundColor: "yellow" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sequi
        natus odio maiores distinctio amet quidem ab illo laudantium ea harum
        tenetur, laboriosam fugiat sed ipsam animi commodi officia ratione.
      </p>
      <img style={imgStyle} src="https://picsum.photos/id/674/600/400" alt="" />
      <img style={imgStyle} src={img} alt="" />
      <p className="prf1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        ipsam dolores nulla sit voluptas ipsa perspiciatis aut ex magnam culpa,
        ad sunt quod expedita omnis fuga eum nobis dolore. Nisi.
      </p>
    </>
  );
};
export default Content;
