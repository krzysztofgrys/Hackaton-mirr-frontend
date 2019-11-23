import React, {useEffect} from 'react';
import Modal from '../modal';
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import Map from '../map';
import Autocomplete from 'react-google-autocomplete';

export default function PostList() {
    const dialog = useDialogState();

    useEffect(() => {
       console.log('component did mount');
    }, []);

    return (<div>
        <Autocomplete
            style={{width: '90%'}}
            onPlaceSelected={(place) => {
                console.log(place);
            }}
            types={['(regions)']}
            componentRestrictions={{country: "pl"}}
        />
        <DialogDisclosure {...dialog}>Widok mapy</DialogDisclosure>
        <Modal dialog={dialog}>
            <aside>side menu</aside>
            <Map className='vh-100 w-100'/>
        </Modal>
    </div>);
}
