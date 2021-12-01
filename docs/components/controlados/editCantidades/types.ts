import React from "react";

export type IEditCantidades = {
  controlled: boolean;
  value: number | string;
  setValue?: React.Dispatch<React.SetStateAction<number | string>>;
  onChange?: (
    value: number,
    setValue?: React.Dispatch<React.SetStateAction<string | number>>
  ) => Promise<void>;
  onSuma?: (value: number) => Promise<boolean>;
  onResta?: (value: number) => Promise<boolean>;
  min?: number;
  max?: number;
  borderColor?: string;
  borderRadius?: number;
  borderStyle?: string;
  borderWidth?: number;
};
