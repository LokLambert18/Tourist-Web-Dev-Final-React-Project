import React from "react";

const LocationListItem = ({loc}) => {
    return(
     <li className="list-group-item">
      <div className="row"> 
        <div className="col-10">
          {/* <div>{loc.name}</div> */}
          <div className="fw-bolder"> <a className="no-decoration"> {loc.name} </a> </div>
          {/* <div>{location.title}</div> */}
        </div>
        {/* <div className="col-2">
          <img width={70} className="float-end rounded-3" src={`/images/${location.image}`}/>
        </div> */}
      </div>
     </li>
    );
   };
 
export default LocationListItem;
