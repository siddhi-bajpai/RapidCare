import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
  const [maxWidth, setMaxWidth] = useState('60%');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setMaxWidth('90%');
      } else {
        setMaxWidth('60%');
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <div className='container mt-3' style={{ maxWidth }} >

      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{ boxShadow: '0px 0px 7px 2px grey' }}>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://www.brookings.edu/wp-content/uploads/2017/05/hospital002.jpg" className="d-block w-100" style={{ height: "30rem" }} alt="..." />
            
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://www.medicircle.in/uploads/2020/january2020/abmh-hospital_edit.jpg" className="d-block w-100" style={{ height: "30rem" }} alt="..." />

            
          </div>
          <div className="carousel-item">
            <img src="https://images.fosterwebmarketing.com/injurytriallawyer.com/Hospital.JPG" className="d-block w-100" style={{ height: "30rem" }} alt="..." />
            
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Test
