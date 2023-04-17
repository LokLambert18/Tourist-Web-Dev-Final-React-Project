import React from 'react';
import { Routes, Route } from 'react-router';

import UserDetails from '../user-details';
import CurrentProfile from '../current-user-profile';

const Profile = () => {
	return (
		<>
			<Routes>
				<Route
					index
					element={<CurrentProfile />}
				/>
				<Route
					path="/:uid"
					element={<UserDetails />}
				/>
			</Routes>
		</>
	);
};

export default Profile;
