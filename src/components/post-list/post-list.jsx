import React, {useEffect, useState} from 'react';
import Map from '../map';
import Autocomplete from 'react-google-autocomplete';
import {Button} from "reakit/Button";
import PostGrid from "../post-grid";
import {defaultBrowserLocation, getLocation} from "../../helpers/geolocation";

export default function PostList() {
    const [browserLocation, setBrowserLocation] = useState(defaultBrowserLocation);

    useEffect(() => {
        console.log('component did mount');
    }, []);

    return (
        <React.Fragment>
            <Button onClick={getLocation(setBrowserLocation)}>Moja lokalizacja</Button>
            <Autocomplete
                aria-autocomplete="both"
                style={{width: '90%'}}
                onPlaceSelected={(place) => {
                    console.log(place);
                }}
                types={['cities']}
                componentRestrictions={{country: "pl"}}
            />
            <PostGrid posts={[]}/>
            {/*<Map className='vh-100 w-100' />*/}
        </React.Fragment>
    );
}
