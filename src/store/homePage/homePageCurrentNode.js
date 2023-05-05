import { createSlice } from '@reduxjs/toolkit';

const initialCurrentNodeState = {
  data: null,
  loading: false,
};

const homePageCurrentNodeSlice = createSlice({
  name: 'homePageCurrentNode',
  initialState: initialCurrentNodeState,
  reducers: {
    setData(state, action) {
      state.data = action.payload.data;
      state.loading = action.payload.loading;
    },
  },
});

export default homePageCurrentNodeSlice;
