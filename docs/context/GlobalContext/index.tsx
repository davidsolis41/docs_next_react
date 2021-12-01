import { useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import GlobalReducer from "./GlobalReducer";
import GlobalContext from "./globalContext";
import Provider from "../../providers/Provider";
import {
  SET_TOKEN,
  SET_FILTRO,
  GET_LOGIN,
  TOGGLE_THEME,
} from "./actionTypesGlobal";
import { IData, IGlobalState } from "./types";
import { url } from "../../utils/url";

//funcion que proveera el estado a nuestra aplicacion
export default function GlobalState({ children }: any): JSX.Element {
  //declaramos la estructura inicial de nuestro contexto
  let initialState: IData = {
    auth: {
      token: "",
      login: false,
    },
    theme: "",
    filtroAplicado: "",
  };

  //utilizamos el useReducer que recibe el deducer y el estado inicial
  const [state, dispatch] = useReducer(
    GlobalReducer,
    initialState,
    (initialState: IData): IData => {
      // Aqui podemos inicializar la data o hacer una funcion que lo haga y ejecutarla aqui. Solo si es necesario
      initialState.theme = "dark";
      return initialState;
    }
  );

  //acciones que se pueden realizar para cambiar la data del context
  let setToken = function (token: string) {
    localStorage?.setItem("token", token);
    dispatch({ type: SET_TOKEN, payload: token });
  };

  let router = useRouter();
  let getLogin = async function () {
    if (typeof localStorage !== "undefined") {
      let token: string = (localStorage?.getItem("token") as string) || "";

      if (token.trim().length > 8) {
        let petLogin = await Provider.get(`${url}/getLogin`, {
          "x-access-token": token,
        });

        if (petLogin.status == 200) {
          dispatch({ type: GET_LOGIN, payload: { token, login: true } });
        } else if (petLogin.status == 401) {
          localStorage?.removeItem("token");
          dispatch({ type: GET_LOGIN, payload: { token: "", login: false } });
          router.push("/login");
        }
      } else {
        dispatch({ type: GET_LOGIN, payload: { token: "", login: false } });
        router.push("/login");
      }
    }
  };

  let setFiltroActivo = function (filtroAplicado: string) {
    dispatch({ type: SET_FILTRO, payload: filtroAplicado });
  };

  let toggleTheme = function (tema: "light" | "dark") {
    dispatch({ type: TOGGLE_THEME, payload: tema });
  };

  //ejecucion automatica para comprobar el login
  useEffect(() => {
    getLogin();
  }, []);

  //objeto con todo lo que va a poder usar el provider
  let dataProvider: IGlobalState = {
    data: state as IData,
    setToken,
    getLogin,
    setFiltroActivo,
    toggleTheme,
  };

  return (
    <GlobalContext.Provider value={dataProvider as any}>
      {children}
    </GlobalContext.Provider>
  );
}
