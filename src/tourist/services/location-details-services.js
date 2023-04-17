import axios from 'axios';

const apiKey = "5ae2e3f221c38a28845f05b6dbf6e6459272dd701fceab69333d5535";

export const locationDetails = async (xid) => {
	console.log(xid)
	var otmAPI = "https://api.opentripmap.com/0.1/en/places/xid/" + xid + "?apikey=" + apiKey + "";
	console.log(otmAPI)
	const response1 = await axios.get(otmAPI);
	const place = response1.data;
	console.log('Location Details');
	console.log(place)
	return place;
}


  
