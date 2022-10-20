import { useState } from "react";
const MouseEvent = () => {
  const [showHint, setShowHint] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [coordX, setCoordX] = useState("");
  const [coordY, setCoordY] = useState("");

  const handleDoubleClick = (e) => {
    setToggle(!toggle);
    toggle
      ? (e.target.className = "bg-danger text-light w-50 p-4 mt-4")
      : (e.target.className = "bg-success text-light w-50 p-4 mt-4");
  };
  const handleOnMouseMove = (e) => {
    // setCoordX(e.pageX); // sayfa konumuna göre
    // setCoordY(e.pageY);
    setCoordX(e.nativeEvent.offsetX); // oldugu dive göre
    setCoordY(e.nativeEvent.offsetY);
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        onMouseEnter={() => setShowHint(true)}
        onMouseOut={() => setShowHint(false)}
        id="todo-1"
        className="bg-success text-light w-50 p-4"
      >
        todo item 1 {showHint && <p>Hello React!</p>}
      </div>

      <div
        onDoubleClick={handleDoubleClick}
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
      >
        todo item 2
      </div>

      <div
        onMouseMove={handleOnMouseMove}
        id="todo-3"
        className="bg-success text-light w-50 p-4 my-4"
      >
        todo item 3
      </div>

      <p>X and Y</p>
      {/* onMouseMove metodu pointer gezdirirken tetiklenir */}
      <p className="text-danger fw-bold">
        {coordX} - {coordY}
      </p>
    </div>
  );
};

export default MouseEvent;
