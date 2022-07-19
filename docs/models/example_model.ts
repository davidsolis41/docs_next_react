export interface IExample {
  name: string;
  description: string;
  value: number;
}

export class Example {
  public name: string;
  public description: string;
  public value: number;

  constructor(json: IExample) {
    this.name = json.name;
    this.description = json.description;
    this.value = json.value;
  }

  public static fromJson(json: IExample): Example {
    return new Example(json);
  }

  public toJson(): IExample {
    return {
      name: this.name,
      description: this.description,
      value: this.value,
    };
  }
}

export class Examples {
  public items: Example[];

  constructor(listJson: IExample[]) {
    if (!listJson || listJson.length < 1) this.items = [];

    this.items = listJson.map((item) => new Example(item));
  }

  public toJsonList(): IExample[] {
    return this.items.map((item) => item.toJson());
  }

  public static toJsonExternalList(list: Example[]): IExample[] {
    return list.map((item) => item.toJson());
  }
}
