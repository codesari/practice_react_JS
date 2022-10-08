import React from "react";
import Msg from "./components/Msg";

function App() {
  return (
    <div>
      <Msg name="Felix" age="5" />
      <Msg name="Harvey" />
      {/* burada bir fonk cagirip parametreyi obje olarak verebiliriz.yukaridakine alternatif olarak */}
      {Msg({ name: "Noah" })}
    </div>
  );
}

export default App;
