export type Transaction = {
  id: number;
  title: string;
  amount: number;
  date: string;
  type: "credit" | "debit";
};
