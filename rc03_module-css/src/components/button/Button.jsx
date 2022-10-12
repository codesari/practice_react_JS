import ButtonStyle from "./button.module.css";

const Button = ({ btn }) => {
  return (
    <div className="title">
      {/* <button className="btn-blue">{btn}</button> */}
      <button className={ButtonStyle["btn-blue"]}>{btn}</button>
      {/* Module css kullandigimiz zaman css isimlerimizi artık bir objeymis gibi cagiriyoruz */}
      {/* eger kebap case varsa (kebap-case) köseli parantez ile erisebiliriz. */}
    </div>
  );
};

export default Button;
