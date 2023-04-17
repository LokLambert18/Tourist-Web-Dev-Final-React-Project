import React from 'react';
import HotelCardItem from './hotel-card-item';

const HotelCardSet = ({ hotels }) => {
	return (
		<>
			<div className="row">
				<div className="col-4">
					{hotels[0] && (
						<HotelCardItem
							key={hotels[0]._id}
							hotel={hotels[0]}
						/>
					)}
				</div>
				<div className="col-4">
					{hotels[1] && (
						<HotelCardItem
							key={hotels[1]._id}
							hotel={hotels[1]}
						/>
					)}
				</div>
				<div className="col-4">
					{hotels[2] && (
						<HotelCardItem
							key={hotels[2]._id}
							hotel={hotels[2]}
						/>
					)}
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					{hotels[3] && (
						<HotelCardItem
							key={hotels[3]._id}
							hotel={hotels[3]}
						/>
					)}
				</div>
				<div className="col-4">
					{hotels[4] && (
						<HotelCardItem
							key={hotels[4]._id}
							hotel={hotels[4]}
						/>
					)}
				</div>
				<div className="col-4">
					{hotels[5] && (
						<HotelCardItem
							key={hotels[5]._id}
							hotel={hotels[5]}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default HotelCardSet;
