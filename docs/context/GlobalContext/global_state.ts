import type { Auth, IGlobalState } from "./types";

export abstract class GlobalState {
  constructor(state: GlobalState) {
    this.auth = state.auth;
    this.theme = state.theme;
    this.filtroAplicado = state.filtroAplicado;
  }

  public auth: Auth;
  public theme: string;
  public filtroAplicado: string;
}

export class GlobalInitialState extends GlobalState {
  constructor() {
    super({
      auth: { token: "", login: false },
      theme: "light",
      filtroAplicado: "",
    });
  }
}

export class GlobalModifyState extends GlobalState {
  constructor(lastState: GlobalState, newState: IGlobalState) {
    super({
      auth: newState.auth || lastState.auth,
      theme: newState.theme || lastState.theme,
      filtroAplicado: newState.filtroAplicado || lastState.filtroAplicado,
    });
  }
}
