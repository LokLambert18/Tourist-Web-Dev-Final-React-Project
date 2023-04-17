import { createSlice } from '@reduxjs/toolkit';
// import reviews from '../data/reviews.json';

import * as thunks from '../thunks/reviews-thunks';

const initialState = {
	reviews: [],
	hotelReviews: [],
	locReviews: [],
	guideReviews: [],
	reviewsByAuthor: [],
	reviewByAuthorLoc: [],
	reviewByAuthorHotel: [],
	reviewByAuthorGuide: [],
	reviewsByLoc: [],
	reviewsByHotel: [],
	reviewsByGuide: [],
	loading: false,
	gloading: false,
	lloading: false,
	hloading: false,
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

		[thunks.findHotelReviewsThunk.pending]: (state) => {
			state.hloading = true;
			state.hotelReviews = [];
		},
		[thunks.findHotelReviewsThunk.fulfilled]: (state, { payload }) => {
			state.hloading = false;
			state.hotelReviews = payload;
		},

		[thunks.findGuideReviewsThunk.pending]: (state) => {
			state.gloading = true;
			state.guideReviews = [];
		},
		[thunks.findGuideReviewsThunk.fulfilled]: (state, { payload }) => {
			state.gloading = false;
			state.guideReviews = payload;
		},

		[thunks.findLocationReviewsThunk.pending]: (state) => {
			state.lloading = true;
			state.locReviews = [];
		},
		[thunks.findLocationReviewsThunk.fulfilled]: (state, { payload }) => {
			state.lloading = false;
			state.locReviews = payload;
		},

		// [thunks.deleteReviewThunk.fulfilled]: (state, { payload }) => {
		// 	state.loading = false;
		// 	state.reviews = state.reviews.filter((t) => t._id !== payload);
		// },
		[thunks.createReviewThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.reviews.push(payload);
			if (payload.type === 1) {
				state.reviewsByLoc.push(payload);
				state.reviewByAuthorLoc = payload;
			}
			if (payload.type === 2) {
				state.reviewsByGuide.push(payload);
				state.reviewByAuthorGuide = payload;
			}
			if (payload.type === 3) {
				state.reviewsByHotel.push(payload);
				state.reviewByAuthorHotel = payload;
			}

			console.log('payload added to reviews arrays');

			console.log(payload);
		},
		[thunks.updateReviewThunk.fulfilled]: (state, { payload }) => {
			console.log('review updated in state');
			console.log(payload);
			state.loading = false;
			if (payload.type === 1) {
				state.reviewByAuthorLoc = payload;
			}
			if (payload.type === 2) {
				state.reviewByAuthorGuide = payload;
			}
			if (payload.type === 3) {
				state.reviewByAuthorHotel = payload;
			}
			let reviewIndex = state.reviews.findIndex(
				(t) => t._id === payload._id
			);
			state.reviews[reviewIndex] = {
				...state.reviews[reviewIndex],
				...payload,
			};
			reviewIndex = state.reviewsByGuide.findIndex(
				(t) => t._id === payload._id
			);
			state.reviewsByGuide[reviewIndex] = {
				...state.reviewsByGuide[reviewIndex],
				...payload,
			};
			reviewIndex = state.reviewsByHotel.findIndex(
				(t) => t._id === payload._id
			);
			state.reviewsByHotel[reviewIndex] = {
				...state.reviewsByHotel[reviewIndex],
				...payload,
			};
			reviewIndex = state.reviewsByLoc.findIndex(
				(t) => t._id === payload._id
			);
			state.reviewsByLoc[reviewIndex] = {
				...state.reviewsByLoc[reviewIndex],
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
			console.log('state.reviewsByLoc');
			console.log(state.reviewsByLoc);
		},
		[thunks.findReviewsByLocThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.reviewsByLoc = [];
		},
		[thunks.findReviewsByHotelThunk.pending]: (state) => {
			state.loading = true;
			state.reviewsByHotel = [];
		},
		[thunks.findReviewsByHotelThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.reviewsByHotel = payload;
			console.log('state.reviewsByHotel');
			console.log(state.reviewsByHotel);
		},
		[thunks.findReviewsByHotelThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.reviewsByHotel = [];
		},
		[thunks.findReviewsByGuideThunk.pending]: (state) => {
			state.loading = true;
			state.reviewsByGuide = [];
		},
		[thunks.findReviewsByGuideThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.reviewsByGuide = payload;
			console.log('state.reviewsByGuide');
			console.log(state.reviewsByGuide);
		},
		[thunks.findReviewsByGuideThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.reviewsByGuide = [];
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
		[thunks.findReviewsByAuthorHotelThunk.pending]: (state) => {
			state.loading = true;
			state.reviewByAuthorHotel = [];
		},
		[thunks.findReviewsByAuthorHotelThunk.fulfilled]: (
			state,
			{ payload }
		) => {
			state.loading = false;
			state.reviewByAuthorHotel = payload;
		},
		[thunks.findReviewsByAuthorHotelThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.reviewByAuthorHotel = [];
		},
		[thunks.findReviewsByAuthorGuideThunk.pending]: (state) => {
			state.loading = true;
			state.reviewByAuthorGuide = [];
		},
		[thunks.findReviewsByAuthorGuideThunk.fulfilled]: (
			state,
			{ payload }
		) => {
			state.loading = false;
			state.reviewByAuthorGuide = payload;
		},
		[thunks.findReviewsByAuthorGuideThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.reviewByAuthorGuide = [];
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
