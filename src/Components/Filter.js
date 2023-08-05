import React from "react";
import './Filter.css'
const Filter = ({ filterItem, userList }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-3 mb-4">
      <div className="container-fluid justify-content-center">
        <div className="navbar-nav " style={{fontSize:'1.4rem'}}>
          {userList.map((curElem) => {
            return (
              <button 
              style={{paddingLeft:'2.0rem'}}
                key={curElem}
                className="nav-link btn btn-link fw-bold"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Filter;
