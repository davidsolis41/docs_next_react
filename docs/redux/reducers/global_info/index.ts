import { createSlice } from "@reduxjs/toolkit";
import InitialGlobalInfoState from "./global_info_state";
import GlobalInfoEvent from "./global_info_event";

const GlobalInfo = createSlice({
  name: "GlobalInfo",

  // ? Initial State For Slice
  initialState: new InitialGlobalInfoState().toJson(),

  // * Sync Reducers
  reducers: GlobalInfoEvent.reducers,

  // * Async Reducers
  extraReducers(builder) {
    builder.addCase(
      GlobalInfoEvent.asyncReducers.getLogin.fulfilled,
      (state, { payload }) => {
        if (payload !== undefined && payload.length > 8) {
          state.login = true;
          state.token = payload;
          return state;
        }
      }
    );
  },
});

export const { setToken, toggleTheme } = GlobalInfo.actions;
export const { getLogin } = GlobalInfoEvent.asyncReducers;

export default GlobalInfo.reducer;
