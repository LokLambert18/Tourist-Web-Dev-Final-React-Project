import axios from 'axios';
const TUITS_URL = 'https://tourist-web-dev-final-node-project.onrender.com/tuits';


const pageLength = 5; // number of objects per page

let lon; // place longitude
let lat; // place latitude

let offset = 0; // offset from first object in the list
let count; // total objects count

const apiKey = "5ae2e3f221c38a28845f05b6dbf6e6459272dd701fceab69333d5535";
var query = 'Kerala'
var otmAPI = "https://api.opentripmap.com/0.1/en/places/geoname?apikey=" + apiKey;



if (query !== undefined) {
	otmAPI += "&name=" + query;
}

// const LOC_URL = 'https://api.opentripmap.com/0.1/en/places/radius?apikey=5ae2e3f221c38a28845f05b6dbf6e6459272dd701fceab69333d5535&radius=1000&limit=5&offset=0&lon=76.94924&lat=8.4855&rate=2&format=json';


export const createTuit = async (tuit) => {
	const response = await axios.post(TUITS_URL, tuit)
	return response.data;
}
   
export const findTuits = async () => {
	const response = await axios.get(TUITS_URL);
	const tuits = response.data;
	console.log('heree');
	console.log(tuits)
	return tuits;
}
   
export const deleteTuit = async (tid) => {
	const response = await axios
	  .delete(`${TUITS_URL}/${tid}`)
	return response.data
}
  
export const updateTuit = async (tuit) => {
	const response = await axios
	  .put(`${TUITS_URL}/${tuit._id}`, tuit);
	return tuit;
}
  
export const findPlaces = async () => {
	const response = await axios.get(otmAPI);
	console.log('heree');
	console.log(response)
	// if (data.status == "OK") {
	// 	message = data.name + ", " + getCountryName(data.country);
	// 	lon = data.lon;
	// 	lat = data.lat;
	// 	firstLoad();
	// }
	const loc = response.data;
	return loc;
}