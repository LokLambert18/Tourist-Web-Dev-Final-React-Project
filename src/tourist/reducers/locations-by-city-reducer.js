import { createSlice } from '@reduxjs/toolkit';
import * as thunks from '../thunks/locations-by-city-thunks';

const initialState = {
	locations: [],
	loading: false,
};

const locationsByCityReducers = createSlice({
	name: 'locations',
	initialState,
	extraReducers: {
		[thunks.findLocationsbyCityThunk.pending]: (state) => {
			state.loading = true;
			state.locations = [];
		},
		[thunks.findLocationsbyCityThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.locations = payload;

			console.log('in Reducer');
			console.log(payload);

			// console.log(state.locations);
		},
		[thunks.findLocationsbyCityThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.locations = [];
		},
	},
	reducers: {},
});

export default locationsByCityReducers.reducer;
