import React from "react";
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
  const [state, dispatch] = React.useReducer(
    GlobalReducer,
    initialState,
    (initialState: IData): IData => {
      // Aqui podemos inicializar el context, solo con valores sincronos
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

  //inicializacion del contenido del context
  React.useEffect(() => {
    //inicializaciones asíncronas
    (async () => {})();

    //ejecucion automatica para comprobar el login al ingresar a la pantalla
    getLogin();

    //temporizador de 15 minutos para comprobar continuamente el login
    const timerLoggin: number = window.setInterval(() => {
      getLogin();
    }, 900000);

    return () => {
      window.clearInterval(timerLoggin);
    };
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
