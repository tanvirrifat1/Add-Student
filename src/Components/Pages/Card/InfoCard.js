import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, img, } = card
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl'>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-green-600">Read More...</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;