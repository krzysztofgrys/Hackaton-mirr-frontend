import React from 'react';
import heartIcon from '../../assets/heart.svg';
import cardIcon from '../../assets/card-icon.svg';

export default function PostGridItem({post}) {
    const {title, description, distance} = post;
    const distanceFormatted = () => {
        if (distance < 1000) {
            return `${distance} m`;
        }
        return `${(distance/1000).toFixed(2)} km`;
    };
    return (
        <div className="col-sm-3">
            <div className="card box-shadow">
                <div
                    className="bg-secondary card-bg card-img-top d-flex align-items-center justify-content-center position-relative">
                    <h2><span className="badge badge-primary position-absolute">{distanceFormatted()}</span></h2>
                    <img src={heartIcon} alt="Ikona serce - dodaj do ulubionych" className="heart position-absolute"/>
                    <img src={cardIcon} alt="Ikona karty"/>
                </div>

                <div className="card-body">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
