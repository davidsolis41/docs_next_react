import { SET_TOKEN, GET_LOGIN, TOGGLE_THEME } from "./actionTypesGlobal";
import { GlobalModifyState } from "./global_state";
import type { GlobalState } from "./global_state";
import type { IActionReducer, IGlobalState } from "./types";

/* Inicio de nuestro reducer este admite el state y un objeto action, el 
state se pasa automaticamente, en el dispatch solo mandamos el action */
export default function GlobalReducer(
  state: GlobalState,
  action: IActionReducer
): GlobalState {
  //El payload es la nueva informacion que se va a setear en el estado
  const { type, payload } = action;

  const modifyState = (newState: IGlobalState): GlobalState =>
    new GlobalModifyState(state, newState);

  //El type nos dice la accion a realizar, se debe retornar el nuevo estado
  switch (type) {
    case GET_LOGIN:
      return modifyState({
        auth: { token: payload.token, login: payload.login },
      });
      break;

    case SET_TOKEN:
      return modifyState({
        auth: { token: payload, login: true },
      });
      break;

    case TOGGLE_THEME:
      return modifyState({ theme: payload });
      break;

    default:
      return state;
      break;
  }
}
