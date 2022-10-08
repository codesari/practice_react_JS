const Msg = (props) => {
  console.log(props);
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
