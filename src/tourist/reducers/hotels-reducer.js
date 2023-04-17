import { createSlice } from '@reduxjs/toolkit';

import * as thunks from '../thunks/hotels-thunks';

const initialState = {
	hotels: [],
	hotelDetails: null,
	hotelsByCity: [],
	hotelsByManager: [],
	loading: false,
	requested: false,
	added: 0,
};

const hotelsSlice = createSlice({
	name: 'hotels',
	initialState,
	extraReducers: {
		[thunks.findHotelsThunk.pending]: (state) => {
			state.loading = true;
			state.hotels = [];
		},
		[thunks.findHotelsThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.hotels = payload;
		},
		[thunks.findHotelsThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
		},
		[thunks.deleteHotelThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.hotelsByManager = state.hotelsByManager.filter(
				(t) => t._id !== payload
			);
		},
		[thunks.createHotelThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.hotels.push(payload);
			state.hotelsByManager.push(payload);
			state.added = 1;
			// console.log(state.hotels)
		},
		[thunks.updateHotelThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			const hotelIndex = state.hotels.findIndex(
				(t) => t._id === payload._id
			);
			state.hotels[hotelIndex] = {
				...state.hotels[hotelIndex],
				...payload,
			};
		},
		[thunks.findHotelsByCityThunk.pending]: (state) => {
			state.loading = true;
			state.hotelsByCity = [];
		},
		[thunks.findHotelsByCityThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.hotelsByCity = payload;

			console.log('state.hotelsByCity');
			console.log(state.hotelsByCity);
		},
		[thunks.findHotelsByCityThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.hotelsByCity = [];
		},
		[thunks.findHotelsByManagerThunk.pending]: (state) => {
			state.loading = true;
			state.hotelsByManager = [];
		},
		[thunks.findHotelsByManagerThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.hotelsByManager = payload;

			console.log('state.hotelsByManager');
			console.log(state.hotelsByManager);
		},
		[thunks.findHotelsByManagerThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.hotelsByManager = [];
		},
		[thunks.findHotelByIdThunk.pending]: (state) => {
			state.loading = true;
			state.hotelDetails = null;
		},
		[thunks.findHotelByIdThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.hotelDetails = payload;
			state.requested = false;
			console.log('state.hotelDetails');
			console.log(state.hotelDetails);
		},
		[thunks.findHotelByIdThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.hotelDetails = null;
		},
		[thunks.addHotelRequestThunk.fulfilled]: (state, { payload }) => {
			state.hotelDetails.requests.push(payload);
			state.requested = true;

			console.log('State updated');
			console.log(payload);
			console.log(state.hotelDetails);
		},
	},

	reducers: {
		createHotel(state, action) {
			console.log('Adding hotel');
			state.unshift({
				...action.payload,
				_id: new Date().getTime(),
			});
		},

		hotelAddedUpdate(state) {
			// console.log('In regStatusUpdate');
			// console.log(action.payload);
			state.added = 0;
			console.log('hotelAddedUpdate');
			console.log(state.added)
		},
	},
});

export const { createHotel, hotelAddedUpdate } = hotelsSlice.actions;

export default hotelsSlice.reducer;
