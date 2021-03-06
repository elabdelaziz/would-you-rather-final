const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action issss: ", action);
  const returnValue = next(action);
  console.log("the new state is: ", store.getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
