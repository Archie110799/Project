import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/Store";
import { clearUser } from "../../../redux/user/User.reducer";
import { fetchUser } from "../../../redux/user/User.service";

const About: React.FC<IAbout> = (props) => {
  const { userId = "1" } = props;
  const { user, loading, error } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser(userId));
    return () => {
      dispatch(clearUser());
    };
  }, []);

  useEffect(() => {
    user && console.log(user, loading, error);
  }, [user]);

  return <div className="App">ABOUT PAGE</div>;
};

export default About;
