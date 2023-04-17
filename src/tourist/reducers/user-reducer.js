import { createSlice } from '@reduxjs/toolkit';
import * as thunks from '../thunks/login-thunk';
// import whoArray from '../data/who.json';

const initialState = {
	// currentUser: {
	// 	_id: 123,
	// 	firstName: 'Jose',
	// 	lastName: 'Annunziato',
	// 	handle: '@jannunzi',
	// 	profilePicture: 'mw.jpg',
	// 	bannerPicture: 'banner.jpg',
	// 	bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
	// 	website: 'youtube.com/webdevtv',
	// 	location: 'Boston, MA',
	// 	dateOfBirth: '11/21/1968',
	// 	dateJoined: '4/4/2009',
	// 	followingCount: 340,
	// 	followersCount: 223,
	// },
	currentUser: null,
	users: [],
	otherUser: null,
	currentSearch: null,
	currentLocation: null,
	regStatus: 0,
	loginStatus: 0,
	loading: false,
	otherUserLoading: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: {
		[thunks.loginThunk.fulfilled]: (state, { payload }) => {
			state.currentUser = payload;
			state.loginStatus = 1;
			state.loading = false;
		},
		[thunks.loginThunk.pending]: (state, { payload }) => {
			state.loading = true;
		},
		[thunks.loginThunk.rejected]: (state, action) => {
			state.loginStatus = -1;
			state.currentUser = null;
			state.loading = false;
		},
		// [thunks.findUsersThunk.fulfilled]: (state, { payload }) => {
		// 	state.users = payload;
		// },
		[thunks.findUserByIdThunk.pending]: (state, { payload }) => {
			state.otherUser = null;
			state.otherUserLoading = true;
		},
		[thunks.findUserByIdThunk.fulfilled]: (state, { payload }) => {
			console.log('otherUser in state');
			state.otherUser = payload;
			console.log(state.otherUser);
			state.otherUserLoading = false;
		},
		[thunks.createUserThunk.fulfilled]: (state, { payload }) => {
			state.users.push(payload);
			state.regStatus = 1;
		},
		[thunks.createUserThunk.pending]: (state, { payload }) => {
			state.loading = true;
		},
		[thunks.createUserThunk.rejected]: (state, action) => {
			state.regStatus = -1;
		},
		[thunks.checkLoginThunk.fulfilled]: (state, { payload }) => {
			console.log('CurerntUser updated in state - checklogin');
			if (payload.loggedIn) {
				state.currentUser = payload.user;
				state.loginStatus = 1;
			} else {
				state.currentUser = null;
				state.loginStatus = 0;
			}
			console.log(state.currentUser);
		},
		[thunks.checkLoginThunk.pending]: (state, { payload }) => {
			state.loading = true;
		},
		[thunks.logoutThunk.fulfilled]: (state, { payload }) => {
			state.currentUser = null;
			state.loginStatus = 0;
			console.log('State updated');
			console.log(state.currentUser);
		},
		[thunks.updateUserThunk.fulfilled]: (state, { payload }) => {
			// state.loading = false;
			// const reviewIndex = state.reviews.findIndex(
			// 	(t) => t._id === payload._id
			// );
			// state.reviews[reviewIndex] = {
			// 	...state.reviews[reviewIndex],
			// 	...payload,
			// };
			state.currentUser = payload;
			console.log('state.currentUser');
			console.log(state.currentUser);
		},
		[thunks.addFollowThunk.fulfilled]: (state, { payload }) => {
			state.currentUser.following.push(payload.toUser);
			state.otherUser.followers.push(payload.fromUser);
			console.log('State updated');
			console.log(payload);
			console.log(state.currentUser);
		},
		[thunks.unFollowThunk.fulfilled]: (state, { payload }) => {
			state.currentUser.following = state.currentUser.following.filter(
				(t) => t.toId !== payload.toUser.toId
			);
			state.otherUser.followers = state.currentUser.followers.filter(
				(t) => t.fromId !== payload.fromUser.fromId
			);
			console.log('State updated');
			console.log(state.currentUser);
		},
	},
	reducers: {
		searchUpdate(state, action) {
			console.log('In searchUpdate');
			console.log(action.payload);
			state.currentSearch = action.payload;
		},
		locationUpdate(state, action) {
			state.currentLocation = action.payload;
		},
		regStatusUpdate(state) {
			// console.log('In regStatusUpdate');
			// console.log(action.payload);
			state.regStatus = 0;
		},
	},
});

export const { searchUpdate, locationUpdate, regStatusUpdate } = userSlice.actions;

export default userSlice.reducer;
