import React from 'react';
import { useParams } from 'react-router-dom';
import ProductData from './HospitalData';
import AboutUser from './AboutUser';
import { useState } from 'react';

const Profile = ({handleAddToCart}) => {
  
  const { location } = useParams();

  return (
    <div className='conatiner mt-5'>
     
      <AboutUser location={location}></AboutUser>
      <ProductData location={location} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Profile;
