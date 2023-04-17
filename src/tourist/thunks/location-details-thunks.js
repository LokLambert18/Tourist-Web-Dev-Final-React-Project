import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../services/location-details-services';

export const locationDetailsThunk = createAsyncThunk(
	'LocationDetails',
	async (xid) => await service.locationDetails(xid)
);
