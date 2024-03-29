import { configureStore } from "@reduxjs/toolkit";
import GlobalInfoReducer from "./reducers/global_info";

const store = configureStore({
  reducer: {
    GlobalInfoReducer,
  },
});

export default store;

// * Envolver el componente <App/>
/*
<Provider store={store}>
  <App/>
</Provider>
*/
