import React from "react";
import "./AboutUser.css";

const AboutUser = ({username}) => {
  return (
    <div className="container pt-1" style={{backgroundColor:'white', borderRadius:'8px', boxShadow:"0px 0px 4px 2px grey", maxWidth:'1060px'}}>
      <div className="row mt-5">
        <div className="col-12 col-md-4">
          <div className="d-flex flex-column align-items-center">
            <div className="rounded-circle mb-3" style={{border:"1px solid wheat", borderRadius:'50%'}}>
              <img
                src="https://source.unsplash.com/200x200/?hospital"
                alt="User Profile"
                className="img-thumbnail"
              />
            </div>
            <h3 style={{fontFamily: 'Gelasio'}}>{username}</h3>
            <div className="d-flex mb-3" >
              <a href="#" className=" icon-link me-3 mx-3" style={{fontSize:'25px'}}>
                <i className="fa fa-envelope"></i>
              </a>
              <a href="#" className="icon-link me-3" style={{fontSize:'25px'}}>
                <i className="fa fa-phone"></i>
              </a>
             
            </div>
          </div>
        </div>
        <div className="col-12 col-md-1">
          <div style={{borderLeft: "1px solid lightgrey", height: "250px"}}></div>
        </div>
        <div className="col-12 col-md-7">
          <div className="profile-description" style={{border:'none'}}>
            <h2 style={{textDecoration:'underline',fontFamily: 'Lobster Two'}}>About Us</h2>
            <p style={{fontFamily: 'Charm'}}>
            This hospital is a reputable healthcare institution with a strong commitment to providing exceptional and compassionate 
            medical care. With years of experience, they offer a wide range of advanced medical services and state-of-the-art facilities. 
            The hospital takes a patient-centric approach, prioritizing personalized treatment plans and a warm, empathetic environment. 
            They actively engage in community outreach programs and hold accreditations reflecting their dedication to patient safety and 
            clinical excellence. This hospital is focused on promoting health and well-being, making them a reliable and trusted healthcare 
            partner for patients and their families.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUser;

