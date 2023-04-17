import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../services/hotels-services';

export const findHotelsThunk = createAsyncThunk(
	'hotels/findHotels',
	async () => await service.findHotels()
);

export const deleteHotelThunk = createAsyncThunk(
	'hotels/deleteHotel',
	async (hotelId) => {
		await service.deleteHotel(hotelId);
		return hotelId;
	}
);

export const createHotelThunk = createAsyncThunk(
	'hotels/createHotel',
	async (hotel) => {
		const newHotel = await service.createHotel(hotel);
		return newHotel;
	}
);

export const updateHotelThunk = createAsyncThunk(
	'hotels/updateHotel',
	async (hotel) => await service.updateHotel(hotel)
);

export const findHotelsByCityThunk = createAsyncThunk(
	'findHotelsByCity',
	async (city) => await service.findHotelsByCity(city)
);

export const findHotelByIdThunk = createAsyncThunk(
	'findHotelById',
	async (hid) => await service.findHotelById(hid)
);

export const findHotelsByManagerThunk = createAsyncThunk(
	'findHotelsByManager',
	async (mid) => await service.findHotelsByManager(mid)
);

export const addHotelRequestThunk = createAsyncThunk(
	'addHotelRequest',
	async (request) => await service.addHotelRequest(request)
);
