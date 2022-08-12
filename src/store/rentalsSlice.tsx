// Redux toolkit
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

//Types
import type { InitialStateType } from "./types";

// Define the initial state
const initialState: InitialStateType = {
  searchString: "",
  //status: import.meta.env.VITE_IDLE, //'idle' | 'loading' | 'succeeded' | 'failed'
};

const rentalsSlice = createSlice({
  name: "rentals",
  initialState,
  reducers: {
    requestRentals(state, action) {
      state.searchString = action.payload;
    },
  },
});

export const getSearchString = (state: any) => state.rentals.searchString;
export const getRentalsStatus = (state: any) => state.rentals.status;

export const { requestRentals } = rentalsSlice.actions;

export default rentalsSlice.reducer;
