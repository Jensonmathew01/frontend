import React from 'react';
import Carousel from 'react-multi-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';

export const CarouselProduct = () => {
  return (
    <div className='productcarouselmargin'>
      <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.swisstimehouse.com/img/cms/desktop%20images%20april%202023/des/desktop%20banner%202000x600px.webp" className="d-block w-100" alt="..."
          style={{ width: "100%", height: "400px" }} />
        </div>
        <div className="carousel-item">
          <img src="https://seematti.com/wp-content/uploads/2023/05/13291229-4-300x400.jpg" className="d-block w-100" alt="..." 
          style={{ width: "100%", height: "400px" }}/>
        </div>
        <div className="carousel-item">
          <img src="https://seematti.com/wp-content/uploads/2023/05/13291229-4-300x400.jpg" className="d-block w-100" alt="..." 
          style={{ width: "100%", height: "400px" }}/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
      
    
  );
};

export default CarouselProduct;
