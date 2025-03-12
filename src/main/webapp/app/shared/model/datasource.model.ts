export interface IPoint {
  id?: number;
  title?: string;
  description?: string | null;
  activated?: boolean | null;
}

export const defaultValue: Readonly<IPoint> = {
  activated: false,
};
