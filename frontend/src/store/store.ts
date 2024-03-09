import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { ThunkAction } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Import your root reducer (optional)

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    any
>;
