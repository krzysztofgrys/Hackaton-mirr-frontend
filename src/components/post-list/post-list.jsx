import React, {useState} from 'react';
import Autocomplete from 'react-google-autocomplete';
import PostGrid from '../post-grid';
import Loader from '../loader';

export default function PostList() {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null
    });
    const [distance, setDistance] = useState(20);
    const [posts, setPosts] = useState([]);
    const [hideLoader, setHideLoader] = useState(true);

    const onPlaceSelect = (place) => {
        setLocation({
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng()
        });
    };

    const search = async () => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const data = {
            lat: location.latitude,
            lng: location.longitude,
            distance: parseInt(distance) * 1000, //meters
            api_token: user.api_token
        };
        const queryParamString = new URLSearchParams(data).toString();
        setHideLoader(false);
        await fetch(`${window.urlApi}posts?${queryParamString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
        }).then(response => response.json())
          .then(response => {
              setPosts(response);
              setHideLoader(true);
          }).catch(() => {
                setHideLoader(true);
            });
    };

    const PostsGrid = () => {
        if (!!posts.length) {
            return <PostGrid posts={posts}/>;
        }
        return <div id='no-posts-for-given-location'>Brak ogłoszeń dla wybranej lokalizacji...</div>
    };

    return (
        <React.Fragment>
            <Loader hide={hideLoader} />
            <section className='col-sm-12'>
                <label htmlFor='city'>Miasto:</label>
                <Autocomplete
                    id='city'
                    className='col-sm-4'
                    style={{width: '90%'}}
                    onPlaceSelected={onPlaceSelect}
                    types={['(cities)']}
                    aria-describedby={`${!!posts.length ? 'city-required-error' : null}`}
                    componentRestrictions={{country: 'pl'}}
                />
                <label id='label-distance' htmlFor='distance'>Odległość [km]</label>
                <input type='number'
                       step={20}
                       min={20}
                       max={100}
                       value={distance}
                       name='distance'
                       aria-labelledby='label-distance'
                       aria-valuemin={20}
                       aria-valuemax={100}
                       aria-valuenow={distance}
                       id='distance'
                       onChange={(value) => setDistance(value.target.value)}/>
                <button onClick={search}>Szukaj</button>
            </section>
           <PostsGrid/>
        </React.Fragment>
    );
}
