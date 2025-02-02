export type TimeLine = "daily" | "monthly" | "yearly";

export type ItemData = {
  name: string;
  timeLine: string;
  completed: boolean;
  count: number;
  total: 1 | 12 | 365;
};
