import type { GlobalState } from "./global_state";

export type IActionReducer = {
  type: string;
  payload: any;
};

export type Auth = {
  token: string;
  login: boolean;
};

export type IGlobalState = {
  auth?: Auth;
  theme?: string;
  filtroAplicado?: string;
};

export type IGlobalContext = {
  data: GlobalState;
  getLogin: () => Promise<void>;
  setToken: (token: string) => void;
  setFiltroActivo: (filtroAplicado: string) => void;
  toggleTheme: (tema: "light" | "dark") => void;
};
