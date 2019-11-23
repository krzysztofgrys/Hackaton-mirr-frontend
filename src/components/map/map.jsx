import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map(props) {
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
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyC0OYo0y89IrrKviqJE2vcb_vCcKYhde4k' }}
                defaultCenter={{
                    latitude: 51.107883,
                    longitude: 17.038538
                }}
                defaultZoom={11}
            >
            </GoogleMapReact>
        </div>
    );
}

