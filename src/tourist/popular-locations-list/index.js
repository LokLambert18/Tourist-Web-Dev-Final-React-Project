import React, { useEffect } from 'react';
import LocationListItem from './locations-list-item';
import { useDispatch, useSelector } from 'react-redux';

import { findLocationsbyCityThunk } from '../thunks/locations-by-city-thunks';

const LocationList = () => {
	const { locations, loading } = useSelector((state) => state.locByCity);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(findLocationsbyCityThunk());
	}, []);

	return (
		<ul className="list-group">
			<li
				className="list-group-item"
				id="item"
			>
				<h5>Popular Locations</h5>
			</li>
			{loading && <h5>loading...</h5>}
			{locations &&
				locations.map((loc) => (
					<LocationListItem
						key={loc.xid}
						loc={loc}
					/>
				))}
		</ul>
	);
};

export default LocationList;
