import {useMemo} from "react";
import {selectCurrentUser} from "../redux/slice/authSlice";
import {useSelector} from "react-redux";

export const useGetUser = () => {
  const user = useSelector(selectCurrentUser);
  const isLoggedIn = !!user;

  return useMemo(() => ({user, isLoggedIn}), [isLoggedIn, user]);
};
