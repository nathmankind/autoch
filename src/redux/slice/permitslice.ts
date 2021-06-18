import { createSlice } from "@reduxjs/toolkit";

interface PermitsData {
  message: string;
  status: number;
  data: {}[];
}
const initialState: PermitsData = {
  status: 0,
  data: [],
  message: "",
};

const permitSlice = createSlice({
  name: "permits",
  initialState,
  reducers: {
    getPermits() {},
    setPermits: (state, action) => {
      const data = action.payload;
      return { ...state, ...data };
    },
  },
});

const selectAllPermits = (state: any) => state.permits.data;
const selectPermitStatus = (state: any) => state.permits.status;
export const permitReducer = permitSlice.reducer;

export const { getPermits, setPermits } = permitSlice.actions;

export const permitActions = permitSlice.actions;

export const permitSelectors = { selectAllPermits, selectPermitStatus };
