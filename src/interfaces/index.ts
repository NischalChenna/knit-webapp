export type TagOption = { value?: any; id?: any; label: any };

export interface CustomFilterObject {
  [key: string]: { selectedValue: any; options: Array<CustomFilterOption> };
}

export interface CustomFilterOption {
  label: string;
  value: any;
}

export interface OrgTableDataType {
  key?: string;
  name?: string;
  appId: string;
  category: string;
  doneBy: string;
  createdAt: string;
  integrationState: string;
  organization: string;
  render?: React.ReactNode;
}

export interface epochMap {
  [key: string]: { [selectedValue: string]: string; }
}