import React from 'react';
import GoogleMapReact from 'google-map-react';

function map(props) {
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    return (
        <div className={props.className}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyC0OYo0y89IrrKviqJE2vcb_vCcKYhde4k' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {props.children}
                {/*<AnyReactComponent*/}
                {/*    lat={59.955413}*/}
                {/*    lng={30.337844}*/}
                {/*    text="My Marker"*/}
                {/*/>*/}
            </GoogleMapReact>
        </div>
    );
}

export default map;
