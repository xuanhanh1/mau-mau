import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { categories } from "@/interface/categories-interface";

interface State {
  data: categories[];
  loading: boolean;
  error: null;
}
const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<any>) => {
      state.data = action.payload?.data;
    },
  },
});

export const { addData } = categoriesSlice.actions;
export default categoriesSlice.reducer;
