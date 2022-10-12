import React from "react";

const Picture = ({ props }) => {
  return (
    <div>
      <img src={props.src.large} alt="" />
      <p>{props.photographer}</p>
    </div>
  );
};

export default Picture;
