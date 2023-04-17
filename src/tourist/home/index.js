import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginTopbar from '../navigation-topbar';
import Register from '../register-profile';
import SearchBar from '../search-bar';
import ReviewRequestList from '../reviews-list';
import HotelDetails from '../hotel-details';
import AddNewHotel from '../add-new-hotel';
import FollowingList from '../following-list';
import FollowersList from '../followers-list';
import EditHotel from '../edit-hotel';
import UserReviewList from '../user-review-list';
import GuideRequestList from '../guide-request-list';
import ReviewList from '../guide-details/review-list';
import About from '../about';
import HomeReviewsList from '../home-reviews-list';
// import ReviewSummaryList from '../review-list';
import Login from '../login';
import HotelList from '../hotel-list';

import { checkLoginThunk } from '../thunks/login-thunk';

import { Routes, Route } from 'react-router';

function Home() {
	const { currentUser } = useSelector((state) => state.login);

	console.log('currentUser');
	console.log(currentUser);

	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	 dispatch(checkLoginThunk());
	// }, []);

	return (
		<>
			<LoginTopbar />

			{/* <SearchBar /> */}

			<div className="row m-2">
				<div className="d-xs-none d-sm-block col-sm-1 col-md-1 col-lg-1 col-xl-2"></div>
				<div
					className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-6"
					style={{ position: 'relative' }}
				>
					<div className="row">
						<div className="col-1"></div>
						<div className="col-11">
							<Routes>
								{!currentUser && (
									<Route
										index
										element={<About />}
									/>
								)}
								{currentUser && currentUser.role === '3' && (
									<Route
										index
										element={<HotelList />}
									/>
								)}
								{currentUser && currentUser.role === '3' && (
									<Route
										path="/my-hotels"
										element={<HotelList />}
									/>
								)}
								{currentUser && currentUser.role === '3' && (
									<Route
										path="/new-hotel"
										element={<HotelList />}
									/>
								)}
								{currentUser && currentUser.role === '3' && (
									<Route
										path="/edit-hotel/:hid"
										element={<EditHotel />}
									/>
								)}
								{/* {currentUser && currentUser.role === '3' && (
									<Route
										path="/edit-hotel"
										element={<EditHotel />}
									/>
								)} */}

								{currentUser && currentUser.role === '1' && (
									<Route
										index
										element={
											<UserReviewList
												user={currentUser}
											/>
										}
									/>
								)}
								{currentUser && currentUser.role === '2' && (
									<Route
										index
										element={
											<ReviewList guide={currentUser} />
										}
									/>
								)}
								<Route
									path="/login"
									element={<About />}
								/>
								<Route
									path="/register"
									element={<About />}
								/>
							</Routes>
						</div>
					</div>
				</div>

				{/* <div className="col-4"> */}

				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
					<Routes>
						{!currentUser && (
							<Route
								index
								element={<HomeReviewsList />}
							/>
						)}
						{currentUser && currentUser.role === '1' && (
							<Route
								index
								element={
									<>
										<FollowersList user={currentUser} />
										<FollowingList user={currentUser} />
									</>
								}
							/>
						)}
						{currentUser && currentUser.role === '2' && (
							<Route
								index
								element={
									<>
										<GuideRequestList guide={currentUser} />
									</>
								}
							/>
						)}

						{currentUser && currentUser.role === '3' && (
							<Route
								path="/new-hotel"
								element={<AddNewHotel />}
							/>
						)}
						{/* {currentUser && currentUser.role === '3' && (
									<Route
										path="/edit-hotel/:hid"
										element={<EditHotel />}
									/>
								)} */}

						<Route
							path="/login"
							element={<Login />}
						/>
						<Route
							path="/register"
							element={<Register />}
						/>

						{/* <Route
							path="/my-hotels/:hid"
							element={<HotelDetails />}
						/> */}
					</Routes>
				</div>
			</div>
		</>
	);
}

export default Home;
