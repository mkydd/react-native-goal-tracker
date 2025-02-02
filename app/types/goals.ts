export type TimeLine = "daily" | "monthly" | "yearly";

export type ItemData = {
  name: string;
  timeLine: string;
  completed: boolean;
  count: number;
  total: 1 | 12 | 365;
};

export interface Goal {
  name: string;
  timeLine: "daily" | "monthly" | "yearly" | "";
  completed: boolean;
  count: number;
  total: number;
}
