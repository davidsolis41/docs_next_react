import Fetcher from "../../fetchers/Fetcher";
import { url } from "../../utils/url";
import { SET_TOKEN, GET_LOGIN, TOGGLE_THEME } from "./actionTypesGlobal";
import type { NextRouter } from "next/router";
import type { IActionReducer } from "./types";

export default class GlobalEvent {
  constructor(
    public dispatch: React.Dispatch<IActionReducer>,
    public router: NextRouter
  ) {}

  setToken(token: string) {
    if (typeof localStorage !== "undefined")
      localStorage?.setItem("token", token);
    this.dispatch({ type: SET_TOKEN, payload: token });
  }

  async getLogin() {
    if (typeof localStorage !== "undefined") {
      let token: string = (localStorage?.getItem("token") as string) || "";

      if (token.trim().length > 8) {
        let petLogin = await Fetcher.get(`${url}/getLogin`, {
          headers: {
            "x-access-token": token,
          },
        });

        if (petLogin.status == 200) {
          this.dispatch({ type: GET_LOGIN, payload: { token, login: true } });
        } else if (petLogin.status == 401) {
          localStorage?.removeItem("token");
          this.dispatch({
            type: GET_LOGIN,
            payload: { token: "", login: false },
          });
          this.router.push("/login");
        }
      } else {
        this.dispatch({
          type: GET_LOGIN,
          payload: { token: "", login: false },
        });
        this.router.push("/login");
      }
    }
  }

  toggleTheme(tema: "light" | "dark") {
    this.dispatch({ type: TOGGLE_THEME, payload: tema });
  }
}
