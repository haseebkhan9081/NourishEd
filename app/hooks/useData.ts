// store.ts

 import {create} from "zustand";

 interface TransactionDetails {
    tx: string;
    st: string;
    amt: string;
    cc: string;
    cm: string;
    item_name: string;
    item_number: string;
     
  }

interface StoreState {
  transactionDetails: TransactionDetails | null;
  setTransactionDetails: (details: TransactionDetails | null) => void;
}

const useData=create<StoreState>((set:any) => ({
  transactionDetails: null,
  setTransactionDetails: (details:any) => set({ transactionDetails: details }),
}));

export default useData;
