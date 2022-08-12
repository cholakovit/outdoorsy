// Redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// Rental Slice
import rentalsReducer from "./rentalsSlice";

// Api
import { outdoorsyApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [outdoorsyApi.reducerPath]: outdoorsyApi.reducer,
    rentals: rentalsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(outdoorsyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
