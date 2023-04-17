import React from 'react';

import RequestItem from './request-item';

const RequestList = ({ hotel }) => {
	return (
		<>
			<div className="col-11">
				<hr />
			</div>
			<h5> Requests on {hotel.name}</h5>
			{hotel.requests.length === 0 && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No requests.
				</ul>
			)}

			{hotel.requests.length > 0 && (
				<>
					<ul
						className="list-group"
						style={{ width: '85%' }}
					>
						{hotel.requests.map((request) => (
							<RequestItem
								key={request.hId}
								request={request}
							/>
						))}
					</ul>{' '}
				</>
			)}
			<div className="col-11">
				<hr />
			</div>
		</>
	);
};
export default RequestList;
