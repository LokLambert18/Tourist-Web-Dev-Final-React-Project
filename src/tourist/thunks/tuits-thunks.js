import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../services/tuits-services';

export const findTuitsThunk = createAsyncThunk(
	'tuits/findTuits',
	async () => await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk(
	'tuits/deleteTuit',
	async (tuitId) => {
		await service.deleteTuit(tuitId);
		return tuitId;
	}
);

export const createTuitThunk = createAsyncThunk(
	'tuits/createTuit',
	async (tuit) => {
		const newTuit = await service.createTuit(tuit);
		return newTuit;
	}
);

export const updateTuitThunk = createAsyncThunk(
	'tuits/updateTuit',
	async (tuit) => await service.updateTuit(tuit)
);

export const findLocsThunk = createAsyncThunk(
	'findLocs',
	async () => await service.findPlaces()
);
