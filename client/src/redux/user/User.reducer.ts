import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess(state, action: PayloadAction<IUser>) {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },
    getUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    clearUser(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { getUserStart, getUserSuccess, getUserFailure, clearUser } =
  userSlice.actions;

export default userSlice.reducer;
