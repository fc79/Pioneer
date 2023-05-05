import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import homePageMapSlice from './homePage/homePageMap';
import homePageCurrentNodeSlice from './homePage/homePageCurrentNode';
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    auth: authSlice.reducer,
    homePageMap: homePageMapSlice.reducer,
    homePageCurrentNode: homePageCurrentNodeSlice.reducer,
  },
});
export const authActions = authSlice.actions;
export const homePageMapActions = homePageMapSlice.actions;
export const homePageCurrentNodeActions = homePageCurrentNodeSlice.actions;
export default store;
