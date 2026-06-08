export interface IDatasource {
  id?: number;
  title?: string;
  description?: string | null;
  activated?: boolean | null;
}

export const defaultValue: Readonly<IDatasource> = {
  activated: false,
};
