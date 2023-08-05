import React from 'react'

const HomeImage = () => {
  return (
    <>
    <div className='container mt-2' >
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..\shoppingapp\public\Images\h17.jpg" className="d-block w-100"  style={{height:"30rem"}}alt="..."/>
      <div className="carousel-caption d-none d-md-block " >
        <h5 >Gift: "Unwrap the Joy"</h5>
        <p style={{color:'white',fontFamily: 'Dancing Script, cursive'}}>Find the perfect handmade gift for any occasion, from jewelry to home decor.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="h9.jpeg" className="d-block w-100"  style={{height:"30rem"}}alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Kitchen: "Whip Up Something Special"</h5>
        <p style={{color:'white',fontFamily: 'Dancing Script, cursive'}}>Cook up something special with our handcrafted kitchenware.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="shoppingapp\public\Images\h3.jpeg" className="d-block w-100" style={{height:"30rem"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Decore the place</h5>
        <p style={{color:'white',fontFamily: 'Dancing Script, cursive'}}>Transform your space with one-of-a-kind handmade decorations.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div></>
  )
}

export default HomeImage
