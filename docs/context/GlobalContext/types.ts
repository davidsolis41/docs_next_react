export interface IData {
  auth: {
    token: string;
    login: boolean;
  };
  theme: string;
  filtroAplicado: string;
}

export interface IGlobalState {
  data: IData;
  setToken: (token: string) => void;
  getLogin: () => Promise<void>;
  setFiltroActivo: (filtroAplicado: string) => void;
  toggleTheme: (tema: "light" | "dark") => void;
}

export type IActionReducer = {
  type: string;
  payload: any;
};
