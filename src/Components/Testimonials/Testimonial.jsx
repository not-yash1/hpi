import React, { useEffect, useState } from 'react';
import './Testimonial.css';

const Testimonial = () => {

  const [views, setViews] = useState([
    {
      text: "We enjoy the best of both worlds: a serene living environment and easy access to the city's attraction. The location is unbeatable, and the convenience of having top-tier amenities at our door step has made our lives so much easier.",
      user: "Keshav Agrawal"
    },
    {
      text: "Living at The Crown has truly elevated our lifestyle. From the breathtaking views to the meticulously designed interiors, every aspect of our home exudes luxury. We couldn't be happier with our decision to call it our home.",
      user: "Yash Singh"
    },
    {
      text: "Finding a place that offers both comfort and luxury seemed impossible until we discovered HPI projects. The spacious floor plans, high-quality finishes, and exceptional amenities make it a joy to live here.",
      user: "Niraj Agrawal"
    },
    {
      text: "Our experience with the luxury apartments exceeded all expectations. From the breathtaking views to the impeccable attention to detail in every corner, it's evident that no expense was spared in creating these exquisite homes.",
      user: "Amisha Singh"
    },
  ])

  const [currInd, setCurrInd] = useState(1);
  const [activSlide, setActivSlide] = useState("");
  const [activNav, setActivNav] = useState("");

  const handleNavigate = (ind) => {
    setCurrInd(ind);
    const slide = document.querySelector(`.body${ind}`);
    const nav = document.querySelector(`.btn${ind}`);
    if(slide){
      slide.classList.add('visible-div')
      slide.style.transform = `translateX(-${(ind-1) * 100}%)`;
    }
    if(nav){
      nav.classList.add('active-nav')
    }
    if(activSlide){
      activSlide.classList.remove('visible-div')
      activSlide.style.transform = `translateX(-${(ind-1) * 100}%)`;
    }
    if(activNav){
      activNav.classList.remove('active-nav')
    }
    setActivNav(nav);
    setActivSlide(slide);
  }

  useEffect(() => {
    const slide = document.querySelector('.body');
    const navBtn = document.querySelector('.nav-btn');
    setActivSlide(slide);
    setActivNav(navBtn);
    if(slide){
      slide.classList.add('visible-div');
    }
    if(navBtn){
      navBtn.classList.add('active-nav');
    }
  }, [])

  useEffect(() => {

    const interval = setInterval(() => {
      const slide = document.querySelector(`.body${currInd}`);
      const slides = document.querySelectorAll(`.body`);
      const nav = document.querySelector(`.btn${currInd}`);

      if(activNav){
        activNav.classList.remove('active-nav')
      }
      if(nav){
        nav.classList.add('active-nav')
      }
      if(slides[currInd - 1]){
        slides[currInd - 1].classList.add('visible-div')
        slides.forEach((slide) => {
          slide.style.transform = `translateX(-${(currInd-1) * 100}%)`;
        });
      }
      
      setActivNav(nav);
      setActivSlide(slide);
      if(currInd === 4){
        setCurrInd(1);
      } else{
        setCurrInd(currInd + 1);
      }
    }, 28000)
    return () => clearInterval(interval)

  }, [currInd])

  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <div className="header-text">
          <h5>CLIENT TESTIMONIALS</h5>
          <h1 className="testimonial-title">Voices of Delight</h1>
        </div>
        <div className="slider">
          <div className="body1 body">
            <p className="testimonial-text">
              {views[0].text}
            </p>
            <h2><i>{views[0].user}</i></h2>
          </div>
          <div className="body2 body">
            <p className="testimonial-text">
              {views[1].text}
            </p>
            <h2><i>{views[1].user}</i></h2>
          </div>
          <div className="body3 body">
            <p className="testimonial-text">
              {views[2].text}
            </p>
            <h2><i>{views[2].user}</i></h2>
          </div>
          <div className="body4 body">
            <p className="testimonial-text">
              {views[3].text}
            </p>
            <h2><i>{views[3].user}</i></h2>
          </div>
        </div>
        <div className="navigation">
          <div className="nav-btn btn1" onClick={() => handleNavigate(1)}></div>
          <div className="nav-btn btn2" onClick={() => handleNavigate(2)}></div>
          <div className="nav-btn btn3" onClick={() => handleNavigate(3)}></div>
          <div className="nav-btn btn4" onClick={() => handleNavigate(4)}></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
