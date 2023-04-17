import React from 'react';
import { useSelector } from 'react-redux';

import LoginTopbar from '../navigation-topbar';
import ProfileView from '../profile-view';
import ReviewsList from '../reviews-list';
import FollowRequestsList from '../follow-requests-list'
import { Navigate } from 'react-router';

const CurrentProfile = () => {
	const { currentUser } = useSelector((state) => state.login);

	if (!currentUser) {
		return (
			<>
				<Navigate to="/home"></Navigate>
			</>
		);
	}

	return (
		<>
			<LoginTopbar />
			<div className="row m-2">
				<div className=" d-xs-none d-sm-block col-sm-1 col-md-1 col-lg-1 col-xl-2"></div>
				<div
					className="col-12 col-sm-11 col-md-11 col-lg-6 col-xl-5"
					style={{ position: 'relative' }}
				>
					<ProfileView />
					<FollowRequestsList />
					
				</div>
				<div className="d-xs-none d-sm-none d-md-none d-lg-block col-lg-5 col-xl-5 ">
					<ReviewsList />
				</div>
			</div>
		</>
	);
};

export default CurrentProfile;
