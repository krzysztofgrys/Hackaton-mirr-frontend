import React, {useRef, useEffect, useState} from 'react';
import './styles.scss';

export default function Loader({hide}) {
    // const []
    // const inputRef = useRef(null);
    // useEffect(() => {
    //     if (isEditing) {
    //         inputRef.current.focus();
    //     }
    // }, [isEditing]);
    return (
        <div role="status" className={`lds-spinner-container vh-100 w-100 position-fixed fixed-top bg-light ${hide ? 'd-none' : ''}`}>
            <span>Ładowanie strony...</span>
            <div className='lds-spinner d-flex m-auto'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
