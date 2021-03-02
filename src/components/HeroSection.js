import React from 'react';
import '../App.css';
import { Button } from './Button';
import { ButtonLoja } from './ButtonLoja';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
    <div className='hero-container'>
      <video  autoPlay muted loop src="https://cdn-animation.artstation.com/p/video_sources/000/254/785/iphone-pub.mp4"/>      
      <h1>Viva o <mark className  ="orange">melhor</mark></h1>
      <p><i className="fas fa-angle-left"></i> Descubra <i className="fas fa-angle-right"></i></p>
      <div className='hero-btns'>
        <ButtonLoja
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          VER A LOJA
        </ButtonLoja>
        <Button
          className='btns2'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          MINHA CONTA
        </Button>
      </div>
    </div>
    </>
  );
}

export default HeroSection;