import { IData, IActionReducer } from "./types";
import {
  SET_TOKEN,
  GET_LOGIN,
  SET_FILTRO,
  TOGGLE_THEME,
} from "./actionTypesGlobal";

/* Inicio de nuestro reducer este admite el state y un objeto action el 
state se pasa automaticamente, en el dispatch solo mandamos el action */

function GlobalReducer(state: IData, action: IActionReducer): IData {
  //el payload es la nueva informacion que se va a setear en el estado
  const { type, payload } = action;

  const { auth, filtroAplicado, theme } = state;

  //el type nos dice la accion a realizar, se debe retornar el nuevo estado
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        auth: {
          token: payload,
          login: true,
        },
      } as IData;
      break;

    case GET_LOGIN:
      return {
        ...state,
        auth: {
          token: payload.token,
          login: payload.login,
        },
      } as IData;
      break;

    case SET_FILTRO:
      return {
        ...state,
        auth,
        filtroAplicado: payload,
      } as IData;
      break;

    case TOGGLE_THEME:
      return {
        ...state,
        auth,
        theme: payload,
      } as IData;
      break;

    default:
      return state;
      break;
  }
}

export default GlobalReducer;
