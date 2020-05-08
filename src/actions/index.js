export const addToCounterA = (store, amount) => {
  const counterA = store.state.counterA + amount;
  store.setState({ counterA });
};

export const addToCounterB = (store, amount) => {
  const counterB = store.state.counterB + amount;
  store.setState({ counterB });
};
