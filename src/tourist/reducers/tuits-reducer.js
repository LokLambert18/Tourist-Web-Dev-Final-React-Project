import { createSlice } from '@reduxjs/toolkit';
import tuits from '../data/tuits.json';
import {
	findTuitsThunk,
	deleteTuitThunk,
	createTuitThunk,
	updateTuitThunk,
	findLocsThunk,
} from '../thunks/tuits-thunks';

const initialState = {
	tuits: [],
	loading: false,
};

// const currentUser = {
// 	userName: 'NASA',
// 	handle: '@nasa',
// 	image: 'Nasa_t.png',
// 	title: 'New Tuit from NASA',
// };

// const templateTuit = {
// 	...currentUser,
// 	topic: 'Space',
// 	time: '2h',
// 	liked: false,
// 	replies: 0,
// 	retuits: 0,
// 	likes: 0,
// };

const tuitsSlice = createSlice({
	name: 'tuits',
	initialState,
	extraReducers: {
		[findTuitsThunk.pending]: (state) => {
			state.loading = true;
			state.tuits = [];
		},
		[findTuitsThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.tuits = payload;
			console.log('in Reducer');
			console.log(state.tuits);
		},
		[findTuitsThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
		},
		[deleteTuitThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.tuits = state.tuits.filter((t) => t._id !== payload);
		},
		[createTuitThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.tuits.push(payload);
		},
		[updateTuitThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
			state.tuits[tuitNdx] = {
				...state.tuits[tuitNdx],
				...payload, 
			};
		},
		[findLocsThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.tuits = payload;
		},
	},

	reducers: {
		// deleteTuit(state, action) {
		// 	const index = state.findIndex(
		// 		(tuit) => tuit._id === action.payload
		// 	);
		// 	state.splice(index, 1);
		// },
		// createTuit(state, action) {
		// 	state.unshift({
		// 		...action.payload,
		// 		...templateTuit,
		// 		_id: new Date().getTime(),
		// 	});
		// },
		// toggleLikes(state, action) {
		// 	const tuit = state.find((tuit) => tuit._id === action.payload);
		// 	if (tuit.liked) {
		// 		tuit.likes--;
		// 	} else {
		// 		tuit.likes++;
		// 	}
		// 	tuit.liked = !tuit.liked;
		// },
	},
});

export default tuitsSlice.reducer;
