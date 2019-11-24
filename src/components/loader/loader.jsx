import React, {useRef, useEffect, useState} from 'react';
import './styles.scss';

export default function Loader({hide}) {
    const inputRef = useRef(null);
    useEffect(() => {
        if (!hide) {
            inputRef.current.focus();
        }
    }, [hide]);
    return (
        <div ref={inputRef} role="status" className={`lds-spinner-container vh-100 w-100 position-fixed fixed-top bg-light ${hide ? 'd-none' : ''}`}>
            <div aria-label='Ładowanie strony...' className='lds-spinner d-flex m-auto'>
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
