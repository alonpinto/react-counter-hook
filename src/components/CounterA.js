import React from "react";

import useGlobal from "../store";
import { renderTime } from "../utils";

const CounterA = () => {
  const [counterA, addToCounterA] = useGlobal(
    state => state.counterA,
    actions => actions.addToCounterA
  );
  return (
    <div className="Counter">
      <h3>Counter A</h3>
      <p>
        Value:
        {counterA}
      </p>
      <button type="button" onClick={() => addToCounterA(1)}>
        +1 to global
      </button>
      <p>{renderTime()}</p>
    </div>
  );
};

export default CounterA;
