import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
    parity: "",
  },
  reducers: {
    increaseCount: (state, action) => {
      state.count = state.count + 1;
    },

    decreaseCount: (state, action) => {
      state.count = state.count - 1;
    },

    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increaseCount, decreaseCount, setCount } = counterSlice.actions;

export default counterSlice.reducer;
