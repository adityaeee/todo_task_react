const connectDummy = (mapStateToPropsFunction, mapDispatchToPropsFunction) => {
  // declare function bernama someArrowFunction (dan dimasukin ke variable someArrowFunction)
  const someArrowFunction = (param) => {
    mapStateToPropsFunction("mapStateToPropsFunction");
    mapDispatchToPropsFunction("mapDispatchToPropsFunction");
    console.log("Higher Order Function: " + param);
  };

  return someArrowFunction;
};

const someArrowFunction2 = (param) => {
  console.log("Higher Order Function: " + param);
};

// return someArrowFunction
connectDummy(console.log, console.log); // gak kepanggil

connectDummy(console.log, console.log)("string"); // baru functionnya kepaggil

someArrowFunction2; // gak kepanggil
someArrowFunction2("something"); // baru functionnya kepaggil
