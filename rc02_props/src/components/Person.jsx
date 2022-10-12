const Person = (props) => {
  const { name, img, tel } = props; //destr..
  return (
    <div style={{ textAlign: "center" }}>
      <p>Merhaba {name}</p>
      <img style={{ width: "200px" }} src={img} alt="" />
      <p>{tel}</p>
    </div>
  );
};
export default Person;
