import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ productdata, handleAddToCart }) => {
  // const [cartItems, setCartItems] = useState([]);

  // const handleAddToCart = (product) => {
  //   setCartItems((prevCartItems) => [...prevCartItems, product]);
  // };
  return (
    <div className='container' style={{ maxWidth: '1300px' }}>
      <ToastContainer></ToastContainer>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-2 mx-3">
        {productdata.map((curElm) => {
          const { id, hospitalname, speciality, image, description, beds, price } = curElm;
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
                  <h4 className="card-title text" style={{ textAlign: 'center' }}><strong>{hospitalname}</strong></h4>
                  <span  className="card-subtitle " style={{ textAlign: 'center' ,fontSize:'1.3rem',fontFamily: 'Signika'}}>{speciality}</span>
                  <p style={{fontSize:'0.8rem'}}className="card-text">{description}</p>
                  <p className="card-text">beds: {beds}</p>
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() =>{handleAddToCart({ hospitalname, beds })
                    toast.success("Added to Bed List successfully!", {
                      position: toast.POSITION.BOTTOM_RIGHT
                    });
                  } 
                    
                     }

                  
                >
                Add to Bed List
              </button>
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
      {/* <Cart cartItems={cartItems} /> */}
    </div>
  );
})}
    </div >
    </div >
  )
}

export default ProductCard
