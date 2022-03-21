import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { requestGetListUser } from "../HomeApi";

interface DataState<T> {
  data?: T;
  isLoading?: boolean;
  isError?: boolean;
}

const initialState: DataState<any[]> = {
  data: [],
  isError: false,
  isLoading: false,
};

export const incrementAsyncHome = createAsyncThunk(
  "home/getImage",
  async () => {
    const response = await requestGetListUser();
    return response.data;
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsyncHome.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(incrementAsyncHome.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(incrementAsyncHome.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default homeSlice.reducer;
