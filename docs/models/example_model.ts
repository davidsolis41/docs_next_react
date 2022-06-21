export interface IExample {
  name: string;
  description: string;
  value: number;
}

export class Example {
  constructor(
    public name: string,
    public description: string,
    public value: number
  ) {}

  static fromJson(json: IExample): Example {
    return new Example(
      json.name || "",
      json.description || "",
      Number(json.value) || 0
    );
  }

  toJson(): IExample {
    return {
      name: this.name,
      description: this.description,
      value: this.value,
    };
  }
}

export class Examples {
  items: Example[];

  constructor(list: IExample[]) {
    if (list.length < 1) this.items = [];

    this.items = list.map((item) => Example.fromJson(item));
  }

  static toJson(list: Example[]): IExample[] {
    return list.map((item) => item.toJson());
  }
}
