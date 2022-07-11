export interface IGlobalInfoState {
  login?: boolean;
  token?: string;
  theme?: string;
}

export abstract class GlobalInfoState {
  public login: boolean;
  public token: string;
  public theme: string;

  constructor(props: GlobalInfoState) {
    this.login = props.login;
    this.token = props.token;
    this.theme = props.theme;
  }
}

export class InitialGlobalInfoState extends GlobalInfoState {
  constructor(params?: IGlobalInfoState) {
    super({
      login: compProp(params?.login, false),
      token: compProp(params?.token, ""),
      theme: compProp(params?.theme, ""),
    });
  }

  public get toJson() {
    return { login: this.login, token: this.token, theme: this.theme };
  }
}

const compProp = <T>(newProp: T | undefined, oldProp: T): T =>
  typeof newProp !== "undefined" ? newProp : oldProp;

/* 
export class ModifyGlobalInfoState extends GlobalInfoState {
  constructor(oldState: GlobalInfoState, newState: IGlobalInfoState) {
    super({
      login: compProp(newState.login, oldState.login),
      token: compProp(newState.token, oldState.token),
      theme: compProp(newState.theme, oldState.theme),
    });
  }
} */
