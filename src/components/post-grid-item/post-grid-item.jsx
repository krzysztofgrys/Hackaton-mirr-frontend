import React from 'react';
import heartIcon from '../../assets/heart.svg';
import cardIcon from '../../assets/card-icon.svg';

export default function PostGridItem({post}) {
    const {title, description} = post;
    console.log(post);
    return (
        <div className="col-sm-3">
            <div className="card bg-secondary box-shadow">
                <div
                    className="card-bg card-img-top d-flex align-items-center justify-content-center position-relative">
                    <h2><span className="badge badge-primary position-absolute">2.2 km</span></h2>
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
