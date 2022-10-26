import Language from "./Language";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";

const Card = () => {
  console.log(data);
  return (
    <Container className="rounded-4 mt-4" style={{ background: "#f48b29" }}>
      <h1>Language</h1>
      <Row>
        {data.map((lang, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <Language {...lang} />
            </Col>
          );

          // return <Language lang={...lang} />;
          // spread olarak gönderirsek alacagımız yerde obje keylerini fonksiyonun parametresine yazmalıyız.eger direk buradan key ile gönderirsek alacagımiz yerde props ile havada yakalıyoruz süslü ile)
        })}
      </Row>
    </Container>
  );
};

export default Card;
