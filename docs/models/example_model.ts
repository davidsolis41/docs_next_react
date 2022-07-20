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

  public toJson(): IExample {
    return {
      name: this.name,
      description: this.description,
      value: this.value,
    };
  }

  public static fromJson(json: IExample): Example {
    return new Example(json);
  }

  public static fromJsonList(list: IExample[]): Example[] {
    if (!list || list.length < 1) list = [];
    return list.map((item) => new Example(item));
  }

  public static toJsonExternalList(list: Example[]): IExample[] {
    return list.map((item) => item.toJson());
  }
}
