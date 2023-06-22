import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Footer from './Footer';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      <h1 className='text-center text-danger'> Welcome to SHOPPINGSITE</h1>
      <Slider {...settings}>
        <div>
          <img src="mike-petrucci-c9FQyqIECds-unsplash.jpg" alt="First slide" height="500px" width="1550px" />
        </div>
        <div>
          <img src="samule-sun-2ZUOaO3DMKg-unsplash.jpg" alt="Second slide" height="500px" width="1550px" />
        </div>
        <div>
          <img src="alexandar-todov-BEiOIJSOt9E-unsplash.jpg" alt="Third slide" height="500px" width="1550px" />
        </div>
      </Slider>
      <br />
      <h1 className='text-center text-danger'>DEAL OF THE DAY</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm"> <div class="card" >
            <img class="card-img-top" src="dan-smedley-E_hyxCDk2jg-unsplash.jpg" alt="Card cap" height="300px" />
            <div class="card-body">
              <h5 class="card-title">Lamp</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" class="btn btn-danger">Shop now</button>
            </div>
          </div></div>
          <div className="col-sm"> <div class="card" >
            <img class="card-img-top" src="marcus-loke-xXJ6utyoSw0-unsplash.jpg" alt="Card cap" height="300px" />
            <div class="card-body">
              <h5 class="card-title">Clothes</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" class="btn btn-danger">Shop now</button>
            </div>
          </div></div>
          <div className="col-sm"> <div class="card" >
            <img class="card-img-top" src="laura-chouette-dRi1hAzjozc-unsplash.jpg" alt="Card cap" height="300px" />
            <div class="card-body">
              <h5 class="card-title">Bag</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" class="btn btn-danger">Shop now</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="container">
        <div className="row">
          <div className="col-sm"> <div class="card" >
            <img class="card-img-top" src="laura-chouette-mfvTtNPjoPY-unsplash.jpg" alt="Card cap" height="300px" />
            <div class="card-body">
              <h5 class="card-title">Lotion</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" class="btn btn-danger">Shop now</button>
            </div>
          </div></div>
          <div className="col-sm"> <div class="card" >
            <img class="card-img-top" src="c-d-x-dBwadhWa-lI-unsplash (1).jpg" alt="Card cap" height="300px" />
            <div class="card-body">
              <h5 class="card-title">Headphones</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" class="btn btn-danger">Shop now</button>
            </div>
          </div></div>
          <div className="col-sm"> <div class="card" >
            <img class="card-img-top" src="cory-vincent-NNDDi-UmEEk-unsplash.jpg" alt="Card cap" height="300px" />
            <div class="card-body">
              <h5 class="card-title">Mike</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" class="btn btn-danger">Shop now</button>
            </div>
          </div>
          </div>
        </div>
      </div>
     <Footer/>
    </>
  );
}

export default Home;






