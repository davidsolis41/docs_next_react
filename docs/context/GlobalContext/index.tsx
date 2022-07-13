import React from "react";
import { useRouter } from "next/router";

// Partes del Context
import GlobalReducer from "./global_event_dispatcher";
import { InitialGlobalState } from "./global_state";

// Utils
import Fetcher from "../../fetchers/Fetcher";
import { url } from "../../utils/url";
import { GET_LOGIN, SET_TOKEN, TOGGLE_THEME } from "./textActionTypesGlobal";

// Types
import type { GlobalState } from "./global_state";
import type { NextRouter } from "next/router";
import type { IGlobalContext, IGlobalUseReducer } from "./types";
import Uri from "../../utils/Uri";

// * Context con un mensaje inicial
export const GlobalContext: React.Context<IGlobalContext> = React.createContext(
  { msg: "No tienes acceso a GlobalContext" } as any
);

// * Hook para utilizar el estado dentro de los componentes
export const useGlobalContext = (): IGlobalContext =>
  React.useContext(GlobalContext);

//funcion que proveera el estado a nuestra aplicacion
export default function GlobalContextProvider({ children }: any): JSX.Element {
  // * Estado inicial del App
  const initialState: GlobalState = new InitialGlobalState();

  // * Contenedor del estado global y su dispatch para modificar el estado
  const [state, dispatch] = React.useReducer<IGlobalUseReducer, GlobalState>(
    GlobalReducer,
    initialState,
    (initialState: GlobalState) => {
      // Aqui podemos inicializar el context, solo con valores sincronos
      initialState.theme = "dark";
      return initialState;
    }
  );

  const router: NextRouter = useRouter();

  //acciones que se pueden realizar para cambiar la data del context
  const setToken = (token: string) => {
    if (typeof localStorage !== "undefined")
      localStorage?.setItem("token", token);
    dispatch({ type: SET_TOKEN, payload: token });
  };

  const getLogin = async () => {
    if (typeof localStorage !== "undefined") {
      const token: string = (localStorage?.getItem("token") as string) || "";

      if (token.trim().length > 8) {
        const peticionLogin = await Fetcher.get<string>(Uri(url, "getLogin"), {
          headers: {
            "x-access-token": token,
          },
        });

        if (peticionLogin.status == 200) {
          dispatch({ type: GET_LOGIN, payload: { token, login: true } });
        } else if (peticionLogin.status == 401) {
          localStorage?.removeItem("token");
          dispatch({
            type: GET_LOGIN,
            payload: { token: "", login: false },
          });
          router.push("/login");
        } else alert(peticionLogin.data);
      } else {
        dispatch({
          type: GET_LOGIN,
          payload: { token: "", login: false },
        });
        router.push("/login");
        localStorage?.removeItem("token");
      }
    }
  };

  const toggleTheme = (tema: "light" | "dark") => {
    dispatch({ type: TOGGLE_THEME, payload: tema });
  };

  //inicializacion del contenido del context
  React.useEffect(() => {
    //inicializaciones asíncronas
    (async () => {})();

    //temporizador de 30 minutos para comprobar continuamente el login
    const timerLoggin: number = window.setInterval(() => {
      getLogin();
    }, 1800000);

    return () => {
      window.clearInterval(timerLoggin);
    };
  }, []);

  //ejecucion automatica para comprobar el login al navegar a cualquier pantalla
  React.useEffect(() => {
    getLogin();
  }, [router.query.slug]);

  //objeto con todo lo que va a poder usar el provider
  const dataProvider: IGlobalContext = {
    data: state,
    getLogin,
    setToken,
    toggleTheme,
  };

  return (
    <GlobalContext.Provider value={dataProvider}>
      {children}
    </GlobalContext.Provider>
  );
}
