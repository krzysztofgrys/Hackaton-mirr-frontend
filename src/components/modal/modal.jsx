import React from "react";
import {Button} from "reakit/Button";
import {Dialog, DialogDisclosure} from "reakit/Dialog";
import {Portal} from "reakit/Portal";
import {DialogBackdrop} from "reakit/Dialog";

export default function modal(props) {
    const {dialog} = props;
    return (
        <React.Fragment>
            <Portal>
                <DialogBackdrop {...dialog} />
            </Portal>
            <Dialog {...dialog} tabIndex={0} aria-label="Widok ogłoszeń na mapie Google">
                {props.children}
                <Button onClick={dialog.hide}>Close</Button>
            </Dialog>
        </React.Fragment>
    );
}
