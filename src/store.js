// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./redux/counter/counterSlice";

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//     counter2: counterReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counter/counterSlice";
import creativeCounterReducer from "./redux/counter/creativecounterSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        creativeCounter1: creativeCounterReducer,
    },
});
