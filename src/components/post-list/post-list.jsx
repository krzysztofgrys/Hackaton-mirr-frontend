import React, {useEffect, useState} from 'react';
import Map from '../map';
import Autocomplete from 'react-google-autocomplete';
import {Button} from "reakit/Button";
import PostGrid from "../post-grid";

export default function PostList() {
    const [browserLocation, setBrowserLocation] = useState({
        latitude: 51.107883,
        longitude: 17.038538
    });

    useEffect(() => {
        console.log('component did mount');
    }, []);

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => setBrowserLocation(coords),
            () => setBrowserLocation(null)
        );
    };

    return (
        <React.Fragment>
            <Button onClick={getLocation}>Moja lokalizacja</Button>
            <Autocomplete
                style={{width: '90%'}}
                onPlaceSelected={(place) => {
                    console.log(place);
                }}
                types={['geocode']}
                componentRestrictions={{country: "pl"}}
            />
            <PostGrid posts={[]}/>
            {/*<Map className='vh-100 w-100' />*/}
        </React.Fragment>
    );
}
