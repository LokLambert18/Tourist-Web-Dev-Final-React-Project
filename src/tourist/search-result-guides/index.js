import React from 'react';
import { useSelector } from 'react-redux';
import GuideItem from './guide-item';
import GuideCardSet from './guide-card-set';

const GuideList = () => {
	const currentSearch = useSelector((state) => state.login.currentSearch);
	const { guides, loading } = useSelector((state) => state.guidesByCity);

	return (
		<>
			{currentSearch && (
				<>
					<div className="col-11">
						<hr />
					</div>
					<h5>
						<span>Guides near {currentSearch}</span>
					</h5>

					{loading && <h5>loading...</h5>}
					{!loading && !guides && <h5>No guides found.</h5>}
					{!loading && guides && guides.length === 0 && (
						<h5>No guides found.</h5>
					)}
					{guides && guides.length > 0 && (
						<>
							{/* <span className="float-end">
								<a
									href="home"
									className="no-decoration"
								>
									view all
								</a> 
							</span> */}
							{/* <GuideCardSet guides={guides} /> */}
							<ul
								className="list-group"
								style={{ width: '85%' }}
							>
								{guides.map((guide) => (
									<GuideItem
										key={guide._id}
										guide={guide}
									/>
								))}
							</ul>{' '}
						</>
					)}
					<div className="col-11">
						<hr />
					</div>
				</>
			)}

			{/* {!currentSearch && <h5>Enter a city or place to search.</h5>} */}
		</>
	);
};

export default GuideList;
