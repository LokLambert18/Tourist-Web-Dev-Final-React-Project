import React from "react";
import Locations from './locations.json';
import LocationListItem from "./location-list-item";

const LocationList = () => {
 return(
   <ul className="list-group">
     <li className="list-group-item">
       <h5>Popular Locations</h5>
     </li>
     {
       Locations.map(location =>
         <LocationListItem
           key={location._id}
           location={location}/>
       )
     }
   </ul>
 );
};

export default LocationList;
