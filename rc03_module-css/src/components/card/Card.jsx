import Button from "../button/Button";
import CardStyle from "./card.module.css";

const Card = ({ lang, btn, img }) => {
  //   console.log(props);
  // const {language,btn,img} = props //! dest.
  // tekrardan destruction etmek yerine havada destruction yöntemi ile props u süslü içine alıyoruz. {props}
  return (
    <div>
      {/* <div className="title"> */}
      <h1 className={CardStyle["title"]}>{lang}</h1>
      <img className="images" src={img} alt="" />
      <Button btn={btn} />
    </div>
  );
};

export default Card;
