import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const NavigationSidebar = () => {
	const { currentUser } = useSelector((state) => state.login);

	const { pathname } = useLocation();
	const paths = pathname.split('/');
	var active = '';

	if (paths[2] === undefined) {
		active = paths[1];
	} else {
		active = paths[2];
	}

	return (
		<>
			<div className="list-group">
				<Link
					to="/profile"
					className={`list-group-item ${
						active === 'profile' ? 'active' : ''
					}`}
				>
					<i className="fa fa-hashtag"></i>{' '}
					<span className="d-none d-xl-inline-block"> Profile</span>
				</Link>
				{currentUser.role === '3' && (
					<>
						<Link
							to="/home/my-hotels"
							className={`list-group-item ${
								active === 'my-hotels' ? 'active' : ''
							}`}
						>
							<i className="fa fa-bell"></i>{' '}
							<span className="d-none d-xl-inline-block">
								{' '}
								My Hotels
							</span>
						</Link>

						{/* <Link
							to="/home/new-hotel"
							className={`list-group-item ${
								active === 'new-hotel' ? 'active' : ''
							}`}
						>
							<i className="fa fa-envelope"></i>{' '}
							<span className="d-none d-xl-inline-block">
								{' '}
								Add New Hotel
							</span>
						</Link> */}
					</>
				)}

				<Link
					to="."
					className={`list-group-item ${
						active === 'guides' ? 'active' : ''
					}`}
				>
					<i className="fa fa-bookmark"></i>{' '}
					<span className="d-none d-xl-inline-block"> My Guides</span>
				</Link>

				<Link
					to="."
					className={`list-group-item ${
						active === 'touristers' ? 'active' : ''
					}`}
				>
					<i className="fa fa-list"></i>{' '}
					<span className="d-none d-xl-inline-block">
						{' '}
						My Touristers
					</span>
				</Link>

				<Link
					to="./reviews"
					className={`list-group-item ${
						active === 'reviews' ? 'active' : ''
					}`}
				>
					<i className="fa fa-user"></i>{' '}
					<span className="d-none d-xl-inline-block">
						{' '}
						My Reviews
					</span>
				</Link>
			</div>
		</>
	);
};

export default NavigationSidebar;
