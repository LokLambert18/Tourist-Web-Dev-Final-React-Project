import React from 'react';
import SearchBar from '../search-bar';
import LoginTopbar from '../navigation-topbar';
import LocationList from '../search-result-locations';
import HotelList from '../search-result-hotels';
import GuideList from '../search-result-guides';

function Search() {
	return (
		<>
			<SearchBar />

			<div className="row m-2">
				<div className="d-xs-none d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3"></div>
				<div
					className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4"
					style={{ position: 'relative' }}
				>
					<LocationList />
				</div>
				<div className="d-xs-none d-sm-none d-md-none d-lg-block col-lg-1 col-xl-1"></div>
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
					<GuideList />
					<HotelList />
				</div>
			</div>
		</>
	);
}

export default Search;
