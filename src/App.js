import Home from './tourist/home';
import Search from './tourist/search';
import Profile from './tourist/profile';
import LocDetails from './tourist/location-details';
import HotelDetails from './tourist/hotel-details';
import GuideDetails from './tourist/guide-details';
import EditProfile from './tourist/edit-profile';
import UserDetails from './tourist/user-details';

import './tourist/index.css';
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch } from 'react-redux';

import locationsByCityReducers from './tourist/reducers/locations-by-city-reducer';
import guidesByCityReducer from './tourist/reducers/guides-by-city-reducer';
import hotelsReducer from './tourist/reducers/hotels-reducer';

import userReducer from './tourist/reducers/user-reducer';
import locationDetailsReducer from './tourist/reducers/location-details-reducer';
import ReviewReducer from './tourist/reducers/review-reducer';
import { findUsersThunk } from './tourist/thunks/login-thunk';
import { findReviewsThunk } from './tourist/thunks/reviews-thunks';
import SearchComponent from './tourist/search-bar';

const store = configureStore({
	reducer: {
		// popLocations: popularLocationsReducers,
		locByCity: locationsByCityReducers,
		guidesByCity: guidesByCityReducer,
		hotels: hotelsReducer,
		// profile: profileReducer,
		login: userReducer,
		locationDetails: locationDetailsReducer,
		reviews: ReviewReducer,
	},
});

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="Container mb-5 pb-5">
					<Routes>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path="/home/*"
							element={<Home />}
						/>
						<Route
							path="/search"
							element={<SearchComponent />}
						/>
						<Route
							path="/search/:cid"
							element={<Search />}
						/>
						<Route
							path="/profile/*"
							element={<Profile />} // CurrentProfile
						/>
						{/* <Route
							path="/profile/:uid"
							element={<UserDetails />}
						/> */}
						<Route
							path="/edit-profile"
							element={<EditProfile />}
						/>
						<Route
							path="/location/:xid"
							element={<LocDetails />}
							exact
						/>
						<Route
							path="/hotel/:hid"
							element={<HotelDetails />}
							exact
						/>
						<Route
							path="/guide/:gid"
							element={<GuideDetails />}
							exact
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
