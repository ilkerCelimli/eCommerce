import {createSlice} from "@reduxjs/toolkit";

const Card = createSlice({
    name : 'card',
    initialState : {
        card : [],
        total : 0
    }
    ,reducers: {
        addToCart : (state, action) => {
            state.card.push(action.payload);
        }
    }
})

export default Card.reducer;
export const {addToCart} = Card.actions;