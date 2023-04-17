import { createSlice } from '@reduxjs/toolkit';
import * as thunks from '../thunks/guides-by-city-thunks';

const initialState = {
	guides: [],
	loading: false,
	requested: false,
};

const guidesByCityReducers = createSlice({
	name: 'guides',
	initialState,
	extraReducers: {
		[thunks.findGuidesByCityThunk.pending]: (state) => {
			state.loading = true;
			state.guides = [];
		},
		[thunks.findGuidesByCityThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.guides = payload;
 
			console.log('in Guide Reducer');
			console.log(payload);

			// console.log(state.guides);
		},
		[thunks.findGuidesByCityThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.guides = [];
		},
		[thunks.addGuideRequestThunk.fulfilled]: (state, { payload }) => {
			const gIndex = state.guides.findIndex((g) => g._id === payload.gId);

			state.guides[gIndex].requests.push(payload);
			state.requested = true;

			console.log('State updated');
			console.log(payload);
			console.log(state.guides);
		},
	},
	reducers: {},
});

export default guidesByCityReducers.reducer;
