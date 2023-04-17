import React from 'react';
import HomeComponent from './home';
import SearchBar from './search';
import Profile from './profile';
import SearchResults from './search-results';
import NavigationSidebar from './navigation-sidebar';
import LoginTopbar from './navigation-topbar';
import LocationList from './location-list';
import { Routes, Route } from 'react-router';
import './index.css';

// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';

// const store = configureStore({
// 	reducer: { locations: locationsReducer, tuitsData: tuitsReducer, profile: profileReducer},
// });

function Tourist() {
	return (
		<>
			<LoginTopbar loggedIn={true} />
			<div className="row m-2">
				<div className="col-2 col-md-2 col-lg-1 col-xl-2">
					<NavigationSidebar />
				</div>
				<div
					className="col-10 col-md-10 col-lg-7 col-xl-6"
					style={{ position: 'relative' }}
				>
					<SearchBar />
					<Routes>
						<Route
							index
							element={<HomeComponent />}
						/>
						<Route
							path="home"
							element={<HomeComponent />}
						/>
						<Route
							path="search"
							element={<SearchResults />}
						/>
						<Route
							path="profile"
							element={<Profile />}
						/>
					</Routes>
				</div>
				<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
					<LocationList />
				</div>
			</div>
		</>
	);
}

export default Tourist;
