import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../services/guides-by-city-services';

export const findGuidesByCityThunk = createAsyncThunk(
	'findGuides',
	async (city) => await service.findGuidesByCity(city)
);
 

export const addGuideRequestThunk = createAsyncThunk(
	'addGuideRequest',
	async (request) => await service.addGuideRequest(request)
);