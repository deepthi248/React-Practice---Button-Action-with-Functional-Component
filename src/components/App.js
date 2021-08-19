import React, { Component, useState } from "react";
import "./../styles/App.css";


function App() {
  const [para, renderPara] = useState('');
  const pHidden = () => {
    renderPara({ para: true })
  }

  return (
    <div id="main">
      <button id="click"
        onClick={pHidden}
      >show para</button>
      {para ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool.
          This makes me so happy
        </p>
      ) : null}
    </div>
  );
}


export default App;
