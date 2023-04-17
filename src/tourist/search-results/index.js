import React from 'react';
import LocationList from '../search-result-locations';
import HotelList from '../search-result-hotels';
import GuideList from '../search-result-guides';

const SearchResults = () => {
	return (
		<>
			<ul className="list-group">
				<li className="list-group-item">
					<LocationList />
				</li>
				<li className="list-group-item">
					<HotelList />
				</li>
				<li className="list-group-item">
					<GuideList />
				</li>
			</ul>
		</>
	);
};
export default SearchResults;
