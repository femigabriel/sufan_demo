// import sideBarReducer from "./slice/sideBarSlice";
// import userModalReducer from "./slice/userModalSlice";
import ToastReducer from "./slice/ToasterSlice";
// import ApiQueryReducer from "./slice/ApiSlice";
import {
  combineReducers
} from "@reduxjs/toolkit";
import {
  authApi
} from "../services/auth.api";
import AuthReducer from "./slice/authSlice";
import {
  paymentApi
} from "../services/payment.api";
import {
  generalApi
} from "../services/general.api";
import {
  adminGeneralApi
} from "../services/Admin/adminGeneral.api";

const rootReducer = combineReducers({
  //   sidebarOpen: sideBarReducer,
  //   userModal: userModalReducer,
  auth: AuthReducer,
  toasts: ToastReducer,
  // apiQuery: ApiQueryReducer,
  [authApi.reducerPath]: authApi.reducer,
  [paymentApi.reducerPath]: paymentApi.reducer,
  [generalApi.reducerPath]: generalApi.reducer,
  [adminGeneralApi.reducerPath]: adminGeneralApi.reducer,
  //   [userRegistrationApi.reducerPath]: userRegistrationApi.reducer,
  //   [clientGeneralApi.reducerPath]: clientGeneralApi.reducer,
  //   [providerGeneralApi.reducerPath]: providerGeneralApi.reducer,
});

export default rootReducer;