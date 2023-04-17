import { createSlice } from '@reduxjs/toolkit';
import * as thunks from '../thunks/location-details-thunks';

const initialState = {
	otherProfile: null,
	loading: false,
};

const profileReducers = createSlice({
	name: 'location',
	initialState,
	extraReducers: {
		[thunks.locationDetailsThunk.pending]: (state) => {
			state.detLoading = true;
			state.detLocation = null;
		},
		[thunks.locationDetailsThunk.fulfilled]: (state, { payload }) => {
			state.detLoading = false;
			state.detLocation = payload;
			console.log(state.detLocation);
		},
		[thunks.locationDetailsThunk.rejected]: (state, action) => {
			state.detLoading = false;
			state.error = action.error;
		},
	},
	reducers: {},
});

export default profileReducers.reducer;
