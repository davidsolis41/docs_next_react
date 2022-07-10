import { createAsyncThunk } from "@reduxjs/toolkit";

// Utils
import Fetcher from "../../../fetchers/Fetcher";
import Uri from "../../../utils/Uri";
import { url } from "../../../utils/url";

// Types
import type { Draft as D } from "@reduxjs/toolkit/dist";
import type { PayloadAction as PA } from "@reduxjs/toolkit/dist/createAction";
import type { ExampleState } from "./example_state";

class ExampleEvent {
  public reducers = {
    setName: this.setName,
  };

  public get asyncReducers() {
    return {
      getAgeAsync: this.getAgeAsync,
    };
  }

  // -------------------- Sync Reducers --------------------
  private setName(state: D<ExampleState>, { payload }: PA<string>) {
    state.name = payload;
    return state;
  }

  // -------------------- Async Reducers --------------------
  private getAgeAsync = createAsyncThunk(
    "Example/getAgeAsync",
    async function (token: string): Promise<number | undefined> {
      if (typeof localStorage !== "undefined") {
        if (token.trim().length > 8) {
          const peticion = await Fetcher.get<number>(Uri(url), {
            headers: {
              "x-access-token": token,
            },
          });

          if (peticion.status == 200) return peticion.data;
          else if (peticion.status == 401) return undefined;
        } else return undefined;
      }
    }
  );
}

export default new ExampleEvent();
