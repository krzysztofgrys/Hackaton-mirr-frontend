import React from 'react';
import './styles.scss';

export default function Loader({hide}) {
    return (
        <div className={`lds-spinner-container vh-100 w-100 position-fixed fixed-top bg-light ${hide ? 'd-none' : ''}`}>
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
