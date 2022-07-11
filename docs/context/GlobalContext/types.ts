import type { GlobalState } from "./global_state";

export type IActionReducer = {
  type: string;
  payload: any;
};

export type IGlobalUseReducer = (
  state: GlobalState,
  action: IActionReducer
) => GlobalState;

export type Auth = {
  token: string;
  login: boolean;
};

export interface IGlobalState {
  auth?: Auth;
  theme?: string;
}

export interface IGlobalContext {
  data: GlobalState;
  getLogin: () => Promise<void>;
  setToken: (token: string) => void;
  toggleTheme: (tema: "light" | "dark") => void;
}
