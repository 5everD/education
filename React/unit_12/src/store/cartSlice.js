import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            const article = data.payload;
            (state.value[article] === undefined) && (state.value[article] = 0);
            state.value[article]++;
        }
    }
});

export const {increment} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;