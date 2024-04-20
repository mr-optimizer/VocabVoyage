import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
  name: "room",
  initialState: {
    roomID: null,
  },
  reducers: {
    setRoomId: (state, action) => {
      state.roomID = action.payload;
    },
  },
});

export const { setRoomId } = roomSlice.actions;
