import React, {useState, useEffect} from 'react';
import '../App.css';


const ScrollTopArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <>
    <i className="fas fa-chevron-up" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}} aria-hidden="true"/>
    </>
    );
}

export default ScrollTopArrow;