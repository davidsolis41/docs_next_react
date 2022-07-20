import { createSlice } from "@reduxjs/toolkit";
import InitialExampleState from "./example_state";
import ExampleEvent from "./example_event";

const Example = createSlice({
  name: "Example",

  // ? Initial State For Slice
  initialState: new InitialExampleState().toJson(),

  // * Sync Reducers
  reducers: ExampleEvent.reducers,

  // * Async Reducers
  extraReducers(builder) {
    builder.addCase(
      ExampleEvent.asyncReducers.getAgeAsync.fulfilled,
      (state, { payload }) => {
        if (payload !== undefined && payload > 0) {
          state.age = payload;
          return state;
        }
      }
    );
  },
});

export const { setName } = Example.actions;
export const { getAgeAsync } = ExampleEvent.asyncReducers;

export default Example.reducer;
