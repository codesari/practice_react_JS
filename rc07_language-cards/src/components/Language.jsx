// import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
// bu daha hızlı
const Language = (name, img, options) => {
  return (
    <Container>
      <Container>
        <Image src={img}></Image>
      </Container>
    </Container>
  );
};

export default Language;
