import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  marginButtom: number;
}

const initialState: ProductState = {
  marginButtom: 0,
};

const productSlice = createSlice({
  name: 'margin-buttom',
  initialState,
  reducers: {
    setMarginbuttom: (state, action: PayloadAction<number>) => {
      state.marginButtom = action.payload;
    },
    initialVal: (state) => {
        state.marginButtom
    }
  },
});

export const { setMarginbuttom, initialVal } = productSlice.actions;
export default productSlice.reducer;
