import {create} from 'zustand'

type State = {
    count: number;
    text: string;
}
type Action = {
    increment: (by: number) => void;
    decrement: (by: number) => void;
    setText: (text: string) => void;
    reset: () => void;
}
const initialState: State = {
    count: 0,
    text: "hello",
}
export const useCountStore = create<State & Action>()((set, get) => ({
    count: 0,
    text: "hello",
    increment: (by) => set(state => ({count: state.count + by})),
    decrement: (by) => set(state => ({count: state.count - by})),
    setText: (text) => set(() => ({text: text})),
    reset: () => set(initialState),
}));

export const inc = (by: number) => useCountStore.setState(state => ({count: state.count + by}));
export const dec = (by: number) => useCountStore.setState(state => ({count: state.count - by}));
export const setText = (text: string) => useCountStore.setState(() => ({text: text}));