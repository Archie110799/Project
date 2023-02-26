import { AppThunk } from "../Store";
import { getUserFailure, getUserStart, getUserSuccess } from "./User.reducer";

export const fetchUser =
  (userId: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getUserStart());
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      dispatch(getUserSuccess(data));
    } catch (error: any) {
      dispatch(getUserFailure(error.message));
    }
  };
