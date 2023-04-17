import { createSlice } from '@reduxjs/toolkit';
// import reviews from '../data/reviews.json';

import * as thunks from '../thunks/location-reviews-thunks';

const initialState = {
	reviews: [],
	reviewsByLoc: [],
	reviewsByAuthor: [],
	reviewByAuthorLoc: [],
	loading: false,
}; 

const reviewsSlice = createSlice({
	name: 'reviews',
	initialState,
	extraReducers: {
		[thunks.findReviewsThunk.pending]: (state) => {
			state.loading = true;
			state.reviews = [];
		},
		[thunks.findReviewsThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.reviews = payload;
		},
		[thunks.findReviewsThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
		},
		[thunks.deleteReviewThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.reviews = state.reviews.filter((t) => t._id !== payload);
		},
		[thunks.createReviewThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.reviews.push(payload);
			// console.log(state.reviews)
		},
		[thunks.updateReviewThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			const reviewIndex = state.reviews.findIndex(
				(t) => t._id === payload._id
			);
			state.reviews[reviewIndex] = {
				...state.reviews[reviewIndex],
				...payload,
			};
		},
		[thunks.findReviewsByLocThunk.pending]: (state) => {
			state.loading = true;
			state.reviewsByLoc = [];
		},
		[thunks.findReviewsByLocThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.reviewsByLoc = payload;
			console.log("state.reviewsByLoc")
			console.log(state.reviewsByLoc)
		},
		[thunks.findReviewsByLocThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.reviewsByLoc = [];

		},
		[thunks.findReviewsByAuthorThunk.pending]: (state) => {
			state.loading = true;
			state.reviewsByAuthor = [];
		},
		[thunks.findReviewsByAuthorThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.reviewsByAuthor = payload;
		},
		[thunks.findReviewsByAuthorThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.reviewsByAuthor = [];

		},
		[thunks.findReviewsByAuthorLocThunk.pending]: (state) => {
			state.loading = true;
			state.reviewByAuthorLoc = [];
		},
		[thunks.findReviewsByAuthorLocThunk.fulfilled]: (
			state,
			{ payload }
		) => {
			state.loading = false;
			state.reviewByAuthorLoc = payload;
		},
		[thunks.findReviewsByAuthorLocThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.reviewByAuthorLoc = [];

		},
		[thunks.updateReviewThunk.fulfilled]: (state,{ payload }) => {
			state.loading = false;
		},
	},

	reducers: {
		createReview(state, action) {
			console.log('Adding review');
			state.unshift({
				...action.payload,
				_id: new Date().getTime(),
			});
		},
	},
});

export const { createReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;
