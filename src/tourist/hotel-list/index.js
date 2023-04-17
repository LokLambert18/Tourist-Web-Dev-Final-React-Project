import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HotelItem from './hotel-item';
import { findHotelsByManagerThunk } from '../thunks/hotels-thunks';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { hotelAddedUpdate } from '../reducers/hotels-reducer';

const HotelList = () => {
	const { currentUser } = useSelector((state) => state.login);

	const dispatch = useDispatch();
	useEffect(() => {
		console.log('Loading hotels of');
		console.log(currentUser.username);

		dispatch(hotelAddedUpdate());
		dispatch(findHotelsByManagerThunk(currentUser._id));
	}, []);

	let { loading, hotelsByManager } = useSelector((state) => state.hotels);

	console.log('hotelsByManager');
	console.log(hotelsByManager);

	if (!currentUser) {
		return <Navigate to={'/home'} />;
	}

	return (
		<>
			{loading && <h5> Loading </h5>}

			<div className="row">
				<div className="col-6">
					<h5> Your Hotels </h5>
				</div>
				<div className="col-4">
					<Link to={'/home/new-hotel'}>
						<button className="btn btn-secondary float-end">
							Add new hotel
						</button>
					</Link>
				</div>
			</div>
			<div className="col-11">
				<hr />
			</div>
			<div className="row">
				<div className="col-1"></div>
				<div className="col-10">
					{!loading && !hotelsByManager && <h5>No Hotels found.</h5>}
					{!loading &&
						hotelsByManager &&
						hotelsByManager.length === 0 && (
							<h5>No Hotels found.</h5>
						)}

					{hotelsByManager.length > 0 && (
						<>
							<ul
								className="list-group"
								style={{ width: '90%' }}
							>
								{hotelsByManager.map((hotel) => (
									<HotelItem
										key={hotel._id}
										hotel={hotel}
									/>
								))}
							</ul>{' '}
						</>
					)}
				</div>
			</div>

			<div className="col-11">
				<hr />
			</div>
			{/* <Link
							to="/home/my-hotels/new-hotel"
							style={{ textDecoration: 'none' }}
							
						>
							{/* <i className="fa fa-envelope"></i>{' '} */}
			{/*	<p className="d-none d-xl-inline-block">
								{' '}
								Add New Hotel
							</p>
						</Link> */}
		</>
	);
};
export default HotelList;
