export interface IExampleState {
  name?: string;
  age?: number;
}

export abstract class ExampleState {
  public name: string;
  public age: number;

  constructor(props: ExampleState) {
    this.name = props.name;
    this.age = props.age;
  }
}

export class InitialExampleState extends ExampleState {
  constructor(params?: IExampleState) {
    super({
      name: compProp(params?.name, ""),
      age: compProp(params?.age, 0),
    });
  }

  public get toJson() {
    return { name: this.name, age: this.age };
  }
}

const compProp = <T>(newProp: T | undefined, oldProp: T): T =>
  typeof newProp !== "undefined" ? newProp : oldProp;
