import React from 'react'
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
  
       <div className="container-fluid bg-dark text-light footer" >
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4"></h4>
                        <Link className="btn btn-link" to="/About">About Us</Link>
                        <Link className="btn btn-link" to="/Contact">Contact Us</Link>
                        <Link className="btn btn-link" to="/">Privacy Policy</Link>
                        <Link className="btn btn-link" to="/">Terms & Condition</Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>S.R. No.27,PICT Pune</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 45585858</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>rapidcare@gmail.com</p>
                        <div className="d-flex mt-5">
                            <Link style={{marginRight:'1rem'}} className="btn btn-outline-light btn-social" to="/"><i className="fab fa-twitter"></i></Link>
                            <Link style={{marginRight:'1rem'}} className="btn btn-outline-light btn-social" to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link style={{marginRight:'1rem'}} className="btn btn-outline-light btn-social" to="/"><i className="fab fa-youtube"></i></Link>
                            <Link style={{marginRight:'1rem'}} className="btn btn-outline-light btn-social" to="/"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">programmers Section</h4>
                        <Link className="btn btn-link" to="/About">Careers</Link>
                        <Link className="btn btn-link" to="/Contact">Any Bug?</Link>
                  
                    </div> */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Join Us</h4>
                        <p>Join the most trusted platform now!</p>
                        <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                          <Link to='/Signup'> <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button></Link> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link  to="/">RAPIDCARE</Link>, All Right Reserved. 
                        </div>
                         <div className="col-md-6 text-center text-md-end">
                            {/* {/* <div className="footer-menu">
                                <Link to="/">Home</Link>
                                <Link to="/">Cookies</Link>
                                <Link to="/">Help</Link>
                                <Link to="/">FQAs</Link>
                            </div> */}
                        </div> 
                    </div> 
                </div>
            </div>
        </div>

  )
}

export default Footer