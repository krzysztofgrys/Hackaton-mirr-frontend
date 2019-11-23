import React, {useEffect} from 'react';
import Modal from '../modal';
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import Map from '../map';

export default function PostList() {
    const dialog = useDialogState();

    useEffect(() => {
       console.log('component did mount');
    }, []);

    return (<div>
        <DialogDisclosure {...dialog}>Open</DialogDisclosure>
        <Modal dialog={dialog}>
            <Map/>
        </Modal>
    </div>);
}
