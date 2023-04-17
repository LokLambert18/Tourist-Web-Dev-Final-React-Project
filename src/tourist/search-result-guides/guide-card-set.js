import React from 'react';
import GuideCardItem from './guide-card-item';

const GuideCardSet = ({ guides }) => {
	return (
		<>
			<div className="row">
				<div className="col-4">
					{guides[0] && (
						<GuideCardItem
							key={guides[0]._id}
							guide={guides[0]}
						/>
					)}
				</div>
				<div className="col-4">
					{guides[1] && (
						<GuideCardItem
							key={guides[1]._id}
							guide={guides[1]}
						/>
					)}
				</div>
				<div className="col-4">
					{guides[2] && (
						<GuideCardItem
							key={guides[2]._id}
							guide={guides[2]}
						/>
					)}
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					{guides[3] && (
						<GuideCardItem
							key={guides[3]._id}
							guide={guides[3]}
						/>
					)}
				</div>
				<div className="col-4">
					{guides[4] && (
						<GuideCardItem
							key={guides[4]._id}
							guide={guides[4]}
						/>
					)}
				</div>
				<div className="col-4">
					{guides[5] && (
						<GuideCardItem
							key={guides[5]._id}
							guide={guides[5]}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default GuideCardSet;
