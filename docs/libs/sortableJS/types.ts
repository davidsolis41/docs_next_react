export type Item = {
  id: number;
  texto: string;
};

export interface IReorderList {
  items: any[];
  setItems: React.Dispatch<any>;
  onChange?: (newVal: any[]) => void;
  className?: string;
  ghostClass?: string;
  chosenClass?: string;
  children?: any;
}
