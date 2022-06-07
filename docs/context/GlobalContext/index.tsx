import React, { createContext } from "react";
import { useRouter } from "next/router";
import { GlobalInitialState } from "./global_state";
import GlobalReducer from "./global_event_dispatcher";
import GlobalEvent from "./global_event";
import type { NextRouter } from "next/router";
import type { GlobalState } from "./global_state";
import type { IGlobalContext } from "./types";

const initialState: GlobalInitialState = new GlobalInitialState();
export const GlobalContext = createContext(initialState);

//funcion que proveera el estado a nuestra aplicacion
export default function GlobalContextProvider({ children }: any): JSX.Element {
  const router: NextRouter = useRouter();

  const [state, dispatch] = React.useReducer(
    GlobalReducer,
    initialState,
    (initialState: GlobalInitialState) => {
      // Aqui podemos inicializar el context, solo con valores sincronos
      initialState.theme = "dark";
      return initialState;
    }
  );

  //acciones que se pueden realizar para cambiar la data del context
  const events = new GlobalEvent(dispatch, router);

  //inicializacion del contenido del context
  React.useEffect(() => {
    //inicializaciones asíncronas
    (async () => {})();

    //temporizador de 30 minutos para comprobar continuamente el login
    const timerLoggin: number = window.setInterval(() => {
      events.getLogin();
    }, 1800000);

    return () => {
      window.clearInterval(timerLoggin);
    };
  }, []);

  React.useEffect(() => {
    //ejecucion automatica para comprobar el login al navegar a cualquier pantalla
    events.getLogin();
  }, [router.query.slug]);

  //objeto con todo lo que va a poder usar el provider
  const dataProvider: IGlobalContext = {
    data: state,
    getLogin: events.getLogin,
    setToken: events.setToken,
    setFiltroActivo: events.setFiltroActivo,
    toggleTheme: events.toggleTheme,
  };

  return (
    <GlobalContext.Provider value={dataProvider as any}>
      {children}
    </GlobalContext.Provider>
  );
}
