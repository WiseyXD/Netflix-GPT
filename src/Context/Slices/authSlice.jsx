import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		value: null,
	},
	reducers: {
		addUser: (state, action) => {
			state.value = action.payload;
			return;
		},
		removeUser: (state, action) => {
			state.value = null;
			return;
		},
		handleError: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { addUser, removeUser, handleError } = authSlice.actions;
export default authSlice.reducer;
