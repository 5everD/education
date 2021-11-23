import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            const article = data.payload;
            state.value[article] === undefined && (state.value[article] = 0);
            state.value[article]++;
        },
        decrement: (state, data) => {
            const article = data.payload;
            state.value[article] > 0 && state.value[article]--;
            state.value[article] === 0 && delete state.value[article];

        },
        remove: (state, data) => {
            const article = data.payload;
            delete state.value[article];
        }
    }
});

export const {increment, decrement, remove} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;