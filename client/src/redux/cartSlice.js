import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [ {
            author
                :
                "Willam Andrew",
            createdAt
                :
                "2022-10-23T03:21:09.045Z",
            f_price
                :
                200,
            image
                :
                "https://bookwritten.com/wp-content/uploads/2019/12/The-Undying-Friendship-of-Hassan-for-Amir-in-The-Kite-Runner-scaled.jpeg",
            name
                :
                "Hello from Jackson2",
            new_old
                :
                "OLD",
            offer
                :
                20,
            price
                :
                250,
            quantity
                :
                2,
            updatedAt
                :
                "2022-10-23T03:21:09.045Z",
            __v
                :
                0,
            _id
                :
                "6354b325e20b6e78c466fce0",
        } ],
        quantity: 0,
        total: 1,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;