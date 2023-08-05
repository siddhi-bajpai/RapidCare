import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const getTotal = () => {
    return cartItems.reduce((sum, { price }) => sum + price, 0);
  };

  const handleDelete = (index) => {
    setCartItems((prevCartItems) => [
      ...prevCartItems.slice(0, index),
      ...prevCartItems.slice(index + 1),
    ]);
  };

  return (
    <div className="container mt-5 mb-5" style={{ width: '100%' }}>
      <div className="py-4 mb-5">
        <div
          className="mb-5"
          style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.2)',
            padding: '20px',
          }}
        >
          <h1 className="text-center mt-5 pt-3">Bed List</h1>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <table className="table">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Hospital Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.productname}</td>
                      <td>${item.price}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr />
              <div className="text-center mt-5 mb-5">
                <h3>Total: ${getTotal()}</h3>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate('/')}
                >
                  PAY FEES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @media screen and (max-width: 768px) {
            .col-md-8 {
              max-width: 100%;
            }
          }
          @media screen and (max-width: 576px) {
            .table td, .table th {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Cart;