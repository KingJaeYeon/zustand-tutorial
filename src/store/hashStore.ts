import {create, StateCreator} from 'zustand'
import {createJSONStorage, persist, StateStorage} from "zustand/middleware";

const hashStorage: StateStorage = {
    getItem: (key: string) => {
        const searchParams =  new URLSearchParams(window.location.hash.slice(1));
        const storedValue = searchParams.get(key) ?? ''
        return JSON.parse(storedValue);
    },
    setItem: (key: string, newValue: string) => {
        const searchParams = new URLSearchParams(location.hash.slice(1))
        searchParams.set(key, JSON.stringify(newValue))
        location.hash = searchParams.toString()
    },
    removeItem: (key: string) => {
        const searchParams = new URLSearchParams(window.location.hash.slice(1));
        searchParams.delete(key);
        window.location.hash = searchParams.toString();
    }
}
type State = {
    count: number;
}
type Action = {
    increase: (by?: number) => void;
    decrease: (by?: number) => void;
    reset: () => void;
}


export const useHashStore = create<State & Action>()(
        persist(
                (set, get) => ({
                    count: 0,
                    increase: (by = 1) => set(state => ({count: state.count + by })),
                    decrease: (by = 1) => set(state => ({count: state.count - by })),
                    reset: () => set(() => ({count: 0})),
                }), {
                    name: 'food-storage', // unique name
                    storage: createJSONStorage(() => hashStorage),
                }
        ),
)