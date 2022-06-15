export interface ExampleInterface {
  name: String;
  description: String;
  value: number;
}

export class Example {
  constructor(
    public name: String,
    public description: String,
    public value: number
  ) {}

  static fromJson(json: ExampleInterface): Example {
    return new Example(
      json.name || "",
      json.description || "",
      Number(json.value) || 0
    );
  }

  toJson(): ExampleInterface {
    return {
      name: this.name,
      description: this.description,
      value: this.value,
    };
  }
}

export class Examples {
  items: Example[];

  constructor(list: ExampleInterface[]) {
    if (list.length < 1) this.items = [];

    this.items = list.map((item) => Example.fromJson(item));
  }

  static toJson(list: Example[]): ExampleInterface[] {
    return list.map((item) => item.toJson());
  }
}
