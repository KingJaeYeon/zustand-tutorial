import {create} from 'zustand'
import {createJSONStorage, persist, StateStorage} from "zustand/middleware";

const hashStorage: StateStorage = {
    getItem: (name: string) => {
        return window.location.hash;
    },
    setItem: (name: string, value: string) => {
        window.location.hash = value;
    },
    removeItem: (name: string) => {
        window.location.hash = '';
    }
}
type State = {
    count: number;
}
type Action = {
    increase: (by: number) => void;
    decrease: (by: number) => void;
    reset: () => void;
}
export const useHashStore = create<State & Action>()(
        persist(
                (set, get) => ({
                    count: 0,
                    increase: (by) => set(state => ({count: state.count + by})),
                    decrease: (by) => set(state => ({count: state.count - by})),
                    reset: () => set(() => ({count: 0})),
                }), {
                    name: 'food-storage', // unique name
                    storage: createJSONStorage(() => hashStorage),
                }
        ),
)