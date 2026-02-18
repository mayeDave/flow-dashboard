import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axios";
import type { Transaction } from "../types/transaction";

export const useTransactions = () => {
  return useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: async () => {
      const { data } = await api.get("/posts?_limit=5");

      return data.map((item: any, index: number) => ({
        id: item.id,
        title: item.title,
        amount: index % 2 === 0 ? 2500 : -850,
        date: "25 Jan 2021",
        type: index % 2 === 0 ? "credit" : "debit",
      }));
    },
  });
};
