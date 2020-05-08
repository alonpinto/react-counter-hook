import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { renderTime } from "./utils";
import CounterA from "./components/CounterA";
import CounterB from "./components/CounterB";

function App() {
  const [children, setChilds] = useState([]);
  const addCounterA = () => {
    const counter = <CounterA />;
    const newChildren = [...children, counter];
    setChilds(newChildren);
  };
  const addCounterB = () => {
    const counter = <CounterB />;
    const newChildren = [...children, counter];
    setChilds(newChildren);
  };

  const addManyCounterB = count => {
    const newChildren = [...children];
    for (let index = 0; index < count; index++) {
      newChildren.push(<CounterB />);
    }
    setChilds(newChildren);
  };
  return (
    <div className="App">
      <h1>I am the parent component</h1>
      <h3>{renderTime()}</h3>
      <button onClick={addCounterA}>Add CounterA component</button>
      <button onClick={addCounterB}>Add CounterB component</button>
      <button onClick={() => addManyCounterB(10000)}>
        Add 10 000 CounterB components
      </button>
      <div className="container">{children}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
