import React from "react";
import img2 from "./logo.jpg";
import "./Abtus.css";

export default function About() {
 
  return (
    <div className="conatiner">
      <main className="container">
        <section className="hero">
          <h1 className="mb-5 mt-5">ABOUT US</h1>
          <img src={img2} alt="About Us" className="hero-image" />
        </section>
        <section className="content">
          <div className="grid-container">
            <div className="grid-item mb-2">
              <div className="section-box">
                <h2>Our Mission</h2>
                <p>
                The mission behind creating the Emergency Bed Booking System is to ensure that no patient in need is denied access to 
                life-saving medical care during emergencies due to a lack of available hospital beds. The system aims to provide real-time 
                bed availability information, streamline patient placement, and create a user-friendly platform while fostering collaborative
                partnerships and data-driven improvements to enhance emergency medical care and save lives.
                </p>
              </div>
            </div>
            <div className="grid-item mb-2">
              <div className="section-box">
                <h2>Our Team</h2>
                <div className="team">
                  <div className="member">
        
                    <h3>
                      <strong>Shrutika</strong>
                    </h3>
                    <p></p>
                  </div>
                  <div className="member">
              
                    <h3>
                      <strong>Madhura</strong>
                    </h3>
                    <p></p>
                  </div>
                  <div className="member">
                   
                    <h3>
                      <strong>Mahima</strong>
                    </h3>
                    <p></p>
                  </div>
                  <div className="member">
              
              <h3>
                <strong>Wafiya</strong>
              </h3>
              <p></p>
            </div>
            <div className="member">
              
              <h3>
                <strong>Siddhi</strong>
              </h3>
              <p></p>
            </div>
            <div className="member">
              
              <h3>
                <strong>Vaidehi</strong>
              </h3>
              <p></p>
            </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="section-box">
                <h2>Our Story</h2>
                <p>
                In a bustling city, a compassionate and innovative group of individuals was deeply concerned about patients facing challenges 
                during emergencies due to the lack of available hospital beds. They embarked on a mission to create the Emergency Bed Booking 
                System, a platform that connected hospitals, healthcare providers, and patients in real-time. Through hard work, 
                collaboration, and data-driven improvements, they built a user-friendly system that revolutionized emergency medical care, 
                saving lives and providing hope to those in need.
                </p>
  
              </div>
            </div>
          </div>
        </section>
      </main>
      

    </div>
  );
}
