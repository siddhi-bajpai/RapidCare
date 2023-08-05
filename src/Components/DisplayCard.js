import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayCard.css';
import handleAddToCart from './HospitalCard';

const UserCard = ({ data }) => {
  return (
    <div className='container' style={{maxWidth:"1300px"}}>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-2 mx-3" style={{marginBottom: '15px'}}>
        {data.map((curElm) => {
          const { id, location, speciality, image, description, hospital, beds, price } = curElm;
          return (
            <div className="col" key={id}>
              <div className="card h-100">
                <img
                  src={image}
                  className="card-img-top"
                  alt="..."
                  style={{ objectFit: 'cover', height: '300px' }}
                />
                <div className="card-body">
                  <h4 className="card-title text" style={{ textAlign: 'center' }}><strong>{hospital}</strong></h4>
                  <span className="card-subtitle " style={{ textAlign: 'center',fontSize:'1.5rem',fontFamily: 'Signika' }}>{speciality}</span>
                  <p style={{fontSize:'1.2rem'}}className="card-text">Beds available: {beds}</p>
                  <p style={{fontSize:'1.0rem'}}className="card-text">Price per bed: {price}</p>
                  <Link to={`/profile/${location}`} className="btn btn-primary">BOOK BED</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style>
        {`
          @media (max-width: 992px) {
            .row-cols-md-3 > * {
              flex: 0 0 50%;
              max-width: 50%;
            }
          }

          @media (max-width: 768px) {
            .row-cols-md-3 > * {
              flex: 0 0 100%;
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default UserCard;
