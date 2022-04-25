import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const arr = [];
  const [display, setDisply] = useState("");

  function numberClicker(event) {
    if (event.target.innerHTML == "Reset") {
      setDisply("");
    } else {
      setDisply([...display, event.target.innerHTML]);
      if (event.target.innerHTML != "=") {
        arr.push(...display, event.target.innerHTML);
      }
      if (event.target.innerHTML == "=") {
        setDisply(eval(display.join("")));
      }
    }
  }

  return (
    <div className="App">
      <div className="body">
        <div className="header">
          <h1 className="display">{display}</h1>
        </div>
        <div className="buttons">
          <div className="numbers">
            <div className="row1">
              <button onClick={numberClicker} className="one">
                1
              </button>
              <button onClick={numberClicker} className="two">
                2
              </button>
              <button onClick={numberClicker} className="three">
                3
              </button>
            </div>

            <div className="row2">
              <button onClick={numberClicker} className="four">
                4
              </button>
              <button onClick={numberClicker} className="five">
                5
              </button>
              <button onClick={numberClicker} className="six">
                6
              </button>
            </div>
            <div className="row3">
              <button onClick={numberClicker} className="seven">
                7
              </button>
              <button onClick={numberClicker} className="eight">
                8
              </button>
              <button onClick={numberClicker} className="nine">
                9
              </button>
            </div>
            <div className="row4">
              <button onClick={numberClicker} className="zero">
                0
              </button>
            </div>
          </div>
          <div className="operators">
            <button onClick={numberClicker} className="plus">
              +
            </button>
            <button onClick={numberClicker} className="minus">
              -
            </button>
            <button onClick={numberClicker} className="cross">
              *
            </button>
            <button onClick={numberClicker} className="divide">
              /
            </button>
            <button onClick={numberClicker} className="percentage">
              %
            </button>
          </div>
          <div className="result">
            <button className="equal" onClick={numberClicker}>
              Reset
            </button>
            <button className="equal" onClick={numberClicker}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
