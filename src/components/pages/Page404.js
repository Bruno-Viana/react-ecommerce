import React from 'react';
import {Link} from 'react-router-dom';
import './Page404.css'



function Page404(){
  return (
    <>
    <Link to='/react-ecommerce/'>
    <div className="wrapper_404">
      <video autoPlay muted loop src="https://cdn-animation.artstation.com/p/video_sources/000/226/974/x-crop-new-sound.mp4"/> 
      <h1 className="labeltop">404</h1>
      <p className="desc404">Página não encontrada <i className="far fa-times-circle"></i></p>
    </div>
    </Link>
    </>
  );
};

export default Page404;