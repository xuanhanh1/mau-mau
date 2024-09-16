import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICategories } from "@/interface/categories-interface";

interface State {
  data: ICategories[];
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
