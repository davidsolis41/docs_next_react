import type { Auth, IGlobalState } from "./types";

export abstract class GlobalState {
  public auth: Auth;
  public theme: string;

  constructor(state: GlobalState) {
    this.auth = state.auth;
    this.theme = state.theme;
  }
}

export class GlobalInitialState extends GlobalState {
  constructor() {
    super({
      auth: { token: "", login: false },
      theme: "light",
    });
  }
}

export class GlobalModifyState extends GlobalState {
  constructor(lastState: GlobalState, newState: IGlobalState) {
    super({
      auth: comprobacionValor(newState.auth, lastState.auth),
      theme: comprobacionValor(newState.theme, lastState.theme),
    });
  }
}

const comprobacionValor = (newStateProp: any, lastStateProp: any) =>
  typeof newStateProp !== "undefined" ? newStateProp : lastStateProp;
