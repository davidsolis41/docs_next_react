import React from "react";

export type Item = {
  id: number;
  texto: string;
};

export interface IReorderList {
  items: any[];
  setItems: React.Dispatch<any>;
  onChange?: (newVal: any[]) => Promise<void>;
  className?: string;
  ghostClass?: string;
  chosenClass?: string;
  children?: any;
}
