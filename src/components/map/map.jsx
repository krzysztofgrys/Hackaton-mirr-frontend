import React, {useState} from 'react';
import {Map as GMap, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 function Map(props) {
    const {location, className} = props;
    // const [currentLocation, setCurrentLocation] = useState(null);
    // const [prevLocation, setPrevLocation] = useState(null);
    // const [address, setAddress] = useState(null);

    // const zoom = 11;

    // handle derived state:
    // if (location !== null && location !== prevLocation) {
    //     console.log(location);
    //     setPrevLocation(location);
    // }

    return (
        <div className={className}>
            <h3>Mapa</h3>
            <span></span>
            <GMap google={props.google} zoom={14}>
      
            
            </GMap>
        </div>
    );
}

export default GoogleApiWrapper({
})(Map)

