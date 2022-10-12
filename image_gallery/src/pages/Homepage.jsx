// rafce

import React from "react";
import data from "../helper/data";
import Picture from "../components/Picture.jsx";

const Homepage = () => {
  return (
    <div>
      {data.map((item, key) => {
        return <Picture key={key} props={item} />;
      })}
    </div>
  );
  //! console daki key(id) hatasını gidermek için map in parametresine key ekliyoruz ve aşağıda componentte de key i ekliyoruz
  //   return
  //     <div>
  //       {data.map((item,key) => {
  //         return <Picture key ={key} props={item} />;
  //       })}
  //     </div>
  //   );
};

export default Homepage;
