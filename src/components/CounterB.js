import React from "react";

import useGlobal from "../store";
import { renderTime } from "../utils";

const CounterB = () => {
  const [counterB, addToCounterB] = useGlobal(
    state => state.counterB,
    actions => actions.addToCounterB
  );
  return (
    <div className="Counter">
      <h3>Counter B</h3>
      <p>
        Value:
        {counterB}
      </p>
      <button type="button" onClick={() => addToCounterB(1)}>
        +1 to global
      </button>
      <p>{renderTime()}</p>
    </div>
  );
};

export default CounterB;
