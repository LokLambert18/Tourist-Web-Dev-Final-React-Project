import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { locationDetailsThunk } from '../thunks/location-details-thunks';
import SearchBar from '../search-bar';
import LoginTopbar from '../navigation-topbar';
import HotelList from '../search-result-hotels';
import GuideList from '../search-result-guides';
import LocationItem from './location-details-item';
import RateAndReview from './rate-and-review';
import ReviewSummaryList from '../review-list';

const LocationDetails = () => {
	const { xid } = useParams();
	const { detLocation, detLoading } = useSelector(
		(state) => state.locationDetails
	);

	let { currentUser } = useSelector((state) => state.login);
	let ids = {};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(locationDetailsThunk(xid));
	}, []);

	if (currentUser && detLocation) {
		ids = {
			author: currentUser,
			loc: detLocation,
		};
		// let {idsToPass} = {"lid": detLocation.xid, "aid": currentUser._id}
	}
	return (
		<>
			<LoginTopbar />

			{/* <SearchBar /> */}

			<div className="row m-2">
				<div className="d-sm-none d-md-none d-lg-block col-lg-1 col-xl-2">
					{/* <GuideList />
					<HotelList /> */}
				</div>
				<div
					className="col-12 col-sm-11 col-md-11 col-lg-6 col-xl-5"
					style={{ position: 'relative' }}
				>
					{/* <h5>Details of {xid} </h5> */}

					{detLoading && <h5>Loading... </h5>}
					<div className="col-6">
						<h5> Location Details </h5>
					</div>
					<div className="col-11">
						<hr />
					</div>
					<div className="col-11">
						{detLocation && (
							<LocationItem
								key={detLocation.xid}
								detLocation={detLocation}
							/>
						)}
					</div>

					<div className="col-11">
						<hr />
					</div>
				</div>
				<div className="d-xs-none d-sm-none d-md-none d-lg-block col-lg-5 col-xl-5">
					<div className="col-11">
						{detLocation && (
							<>
								<ReviewSummaryList loc={detLocation} />
								{!currentUser && (
									<div className="text-gray">
										<Link
											to={`/home/login`}
											style={{ textDecoration: 'none' }}
										>
											{/* <button className="rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold"> */}
											login
											{/* </button> */}
										</Link>{' '}
										to review this location.
									</div>
								)}
								{currentUser && currentUser.role === '1' && (
									<RateAndReview ids={ids} />
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default LocationDetails;
