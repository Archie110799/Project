import { useDispatch } from "react-redux";
import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import UserReducer from "./user/User.reducer";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(loggerMiddleware);
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
