import type { Auth, IGlobalState } from "./types";

export abstract class GlobalState {
  public auth: Auth;
  public theme: string;

  constructor(state: GlobalState) {
    this.auth = state.auth;
    this.theme = state.theme;
  }
}

export class InitialGlobalState extends GlobalState {
  constructor() {
    super({
      auth: { token: "", login: false },
      theme: "light",
    });
  }
}

export class ModifyGlobalState extends GlobalState {
  constructor(lastState: GlobalState, newState: IGlobalState) {
    super({
      auth: comprobacionValor(newState.auth, lastState.auth),
      theme: comprobacionValor(newState.theme, lastState.theme),
    });
  }
}

const comprobacionValor = <T>(newStateProp: T | undefined, oldStateProp: T) =>
  typeof newStateProp !== "undefined" ? newStateProp : oldStateProp;
