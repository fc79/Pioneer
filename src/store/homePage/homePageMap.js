import { createSlice } from '@reduxjs/toolkit';

const initialMapState = {
  data: null,
  loading: true,
  showOnMap: null,
};

const homePageMapSlice = createSlice({
  name: 'homePageMap',
  initialState: initialMapState,
  reducers: {
    setData(state, action) {
      state.data = action.payload.data;
      state.loading = action.payload.loading;
      state.showOnMap = action.payload.showOnMap;
    },
  },
});

export default homePageMapSlice;
