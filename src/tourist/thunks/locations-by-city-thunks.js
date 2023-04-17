import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../services/locations-by-city-services';

export const findLocationsbyCityThunk = createAsyncThunk(
	'findLocations',
	async (city) => await service.findLocationsByCity(city)
);
