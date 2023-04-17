import React from 'react';

import RequestItem from './request-item';

const GuideRequestList = ({ guide }) => {
	return (
		<>
			
			<h5> Requests Received</h5>
			{guide.requests.length === 0 && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No requests.
				</ul>
			)}

			{guide.requests.length > 0 && (
				<>
					<ul
						className="list-group"
						style={{ width: '85%' }}
					>
						{guide.requests.map((request) => (
							<RequestItem
								key={request.gId}
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
export default GuideRequestList;
