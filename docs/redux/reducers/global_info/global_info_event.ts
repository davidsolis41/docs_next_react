import Fetcher from "../../../fetchers/Fetcher";
import { url } from "../../../utils/url";
import { createAsyncThunk, Draft as D } from "@reduxjs/toolkit";
import type { PayloadAction as PA } from "@reduxjs/toolkit/dist/createAction";
import type { GlobalInfoState } from "./global_info_state";

class GlobalInfoEvent {
  public reducers = {
    setToken: this.setToken,
    toggleTheme: this.toggleTheme,
  };

  public get asyncReducers() {
    return {
      getLogin: this.getLogin,
    };
  }

  // -------------------- Sync Reducers --------------------
  private setToken(state: D<GlobalInfoState>, { payload }: PA<string>) {
    state.token = payload;
    state.login = true;
    return state;
  }

  private toggleTheme(state: D<GlobalInfoState>, { payload }: PA<string>) {
    state.theme = payload;
    return state;
  }

  // -------------------- Async Reducers --------------------
  private getLogin = createAsyncThunk(
    "GlobalInfo/getLogin",
    async function (): Promise<string | undefined> {
      if (typeof localStorage !== "undefined") {
        const token: string = (localStorage?.getItem("token") as string) || "";

        if (token.trim().length > 8) {
          const peticionLogin = await Fetcher.get<string>(`${url}/getLogin`, {
            headers: {
              "x-access-token": token,
            },
          });

          if (peticionLogin.status == 200) return token;
          else if (peticionLogin.status == 401) {
            localStorage?.removeItem("token");
            return undefined;
          }
        } else {
          localStorage?.removeItem("token");
          return undefined;
        }
      }
    }
  );
}

export default new GlobalInfoEvent();
