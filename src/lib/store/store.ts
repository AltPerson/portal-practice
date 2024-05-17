import { configureStore } from "@reduxjs/toolkit";
import accountsSlice from "./features/accounts/slice";
import quotesSlice from "./features/quotes/slice";

const makeStore = ()=>{
	return configureStore({
    reducer: {
      accounts: accountsSlice,
			quotes:quotesSlice
    },
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default makeStore();