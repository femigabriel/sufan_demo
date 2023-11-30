import {
  configureStore
} from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import {
  persistReducer,
  persistStore
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  authApi
} from "../services/auth.api";
import { paymentApi } from "../services/payment.api";
import { generalApi } from "../services/general.api";
import { adminGeneralApi } from "../services/Admin/adminGeneral.api";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth", "toasts"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
    .concat(authApi.middleware)
    .concat(paymentApi.middleware)
    .concat(generalApi.middleware)
    .concat(adminGeneralApi.middleware)
  //   .concat(userRegistrationApi.middleware)
  //   .concat(clientGeneralApi.middleware)
  //   .concat(providerGeneralApi.middleware),
});

export const persistor = persistStore(store);

export default store;