import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProducts } from "@/interface/products-interface";

interface State {
  data: IProducts[];
  loading: boolean;
  error: null;
}
const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addDataProducts: (state, action: PayloadAction<any>) => {
      state.data = action.payload?.data;
    },
  },
});

export const { addDataProducts } = productsSlice.actions;
export default productsSlice.reducer;
