import {create} from "zustand";
import {CountSlice, createCountSlice} from "@/store/countStore";

export const useIndexStore = create<CountSlice>()((...a) => ({
    ...createCountSlice(...a)
}))
