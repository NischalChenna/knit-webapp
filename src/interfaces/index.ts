export type TagOption = { value?: any; id?: any; label: any };

export interface CustomFilterObject {
  [key: string]: { selectedValue: any; options: Array<CustomFilterOption> };
}

export interface CustomFilterOption {
  label: string;
  value: any;
}
