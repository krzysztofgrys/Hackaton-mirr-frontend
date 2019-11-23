import React from "react";
import { Button } from "reakit/Button";
import { Dialog } from "reakit/Dialog";

export default function modal(props) {
    const {dialog} = props;
    return (
        <React.Fragment>
            <Dialog {...dialog} tabIndex={0} aria-label="Widok ogłoszeń na mapie Google">
                {props.children}
                <Button onClick={dialog.hide}>Close</Button>
            </Dialog>
        </React.Fragment>
    );
}
