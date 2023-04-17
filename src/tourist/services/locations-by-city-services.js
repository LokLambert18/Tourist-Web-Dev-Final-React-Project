import axios from 'axios';

// const pageLength = 50; // number of objects per page

let lon; // place longitude
let lat; // place latitude

let offset = 0; // offset from first object in the list
let count = 50; // total objects count

const apiKey = '5ae2e3f221c38a28845f05b6dbf6e6459272dd701fceab69333d5535';

// const LOC_URL = 'https://api.opentripmap.com/0.1/en/places/radius?apikey=5ae2e3f221c38a28845f05b6dbf6e6459272dd701fceab69333d5535&radius=1000&limit=5&offset=0&lon=76.94924&lat=8.4855&rate=2&format=json';

export const findLocationsByCity = async (city) => {
	let locations = null;
	// console.log(city);
	if (city) {
		var otmAPI = 'https://api.opentripmap.com/0.1/en/places/';
		var otmAPI1 = otmAPI + 'geoname?apikey=' + apiKey + '&name=' + city;
		const response1 = await axios.get(otmAPI1);
		const place = response1.data;
		if (place.status === 'OK') {
			lon = place.lon;
			lat = place.lat;
			var otmAPI22 =
				otmAPI +
				'radius?apikey=' +
				apiKey +
				`&radius=50000&limit=${count}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2` +
				'';
			otmAPI22 += '&format=json';
			const response22 = await axios.get(otmAPI22);
			if (response22.status === 200) {
				locations = response22.data;
			}
		}
	}
	console.log('In service');
	console.log(locations);
	return locations;
};
