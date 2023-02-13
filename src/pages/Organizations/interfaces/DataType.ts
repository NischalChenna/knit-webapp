export interface DataType {
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