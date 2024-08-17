import React, { useEffect, useState } from 'react'
import './Review.css'
import bod11 from '../../images/bod11.png'
import bod2 from '../../images/bod2.svg'
import comma from '../../images/comma.svg'

const Review = () => {

    const [reviews, setReviews] = useState([
      {
        name: "Sharad Keshri",
        image: bod11,
        review: "Spaces touch life in myriad ways. At Hira Panna Infra we ensure that the relationship between these spaces and the lives ensconced in or around them feel truly enriched. Over the past years, we have built an unparallel brand repute through our aesthetic design and consistent quality construction that are at par with National benchmarks. Innovation in our offerings alongside an emphasis on contemporary architecture, strong project execution and partnerships withe the best across the country, position us as pioneers of luxurious living.",
        designation: "Director, Hira Panna Infra Projects LLP"
      },
      {
        name: "Rita Keshri",
        image: bod2,
        review: "At Hira Panna Infra, we believe that a home is more than just a place to live---it is a sanctuary, a space where cherished memories are created, and dreams are realised. Our commitment to excellence is reflected in every aspect, from the meticulously crafted residences to the thoughtfully designed amenities. We have spared no effort in creating homes that are both luxurious and environmentally responsible.",
        designation: "Managing Director, Hira Panna Infra Projects LLP"
      },
      {
        name: "Sujal Keshri",
        image: bod11,
        review: "As an HR head of real estate, I am incredibly proud of the transformative experiences we create for our clients. Our commitment to excellence, integrity and innovation sets us apart in the industry. We go beyond transactions, we build relationships and dreams. It's not just about properties; it's about crafting legacies and shaping futures.",
        designation: "Head of Operations, Hira Panna Infra Projects LLP"
      },
    ])

    const[val, setVal] = useState(reviews[0]);

    const [currInd, setCurrInd] = useState(1);
    const [activSlide, setActivSlide] = useState("");
    const [activNav, setActivNav] = useState("");

    const handleNavigate = (ind) => {
      setCurrInd(ind);
    }

    useEffect(() => {
      const slide = document.querySelector('.box');
      const navBtn = document.querySelector('.rev-btn');
      setActivSlide(slide);
      setActivNav(navBtn);
      if(navBtn){
        navBtn.classList.add('vis-nav');
      }
    }, [])

    useEffect(() => {
      const interval = setInterval(() => {
        const slide = document.querySelector(`.box${currInd}`);
        const slides = document.querySelectorAll(`.box`);
        const nav = document.querySelector(`.rev${currInd}`);

        if(activNav){
          activNav.classList.remove('vis-nav')
        }
        if(nav){
          nav.classList.add('vis-nav')
        }
        if(slides[currInd - 1]){
          // slides[currInd - 1].classList.add('visible-div')
          slides.forEach((slide) => {
            slide.style.transform = `translateX(-${(currInd-1) * 100}vw)`;
          });
        }

        setActivNav(nav);
        setActivSlide(slide);
        if(currInd === 3){
          setCurrInd(1);
        } else{
          setCurrInd(currInd + 1);
        }
      }, 9000)

      return () => clearInterval(interval)

    }, [currInd])

  return (
    <div className='review-contain'>
      <div className="rev-box">
        <div className="review-box box box1">
            <div className="cont">
                <img src={comma} alt="comma" />
                <p>{val.review}</p>
                <div className="user">
                    <h3>{val.name}</h3>
                    <h4>{val.designation}</h4>
                </div>
            </div>
            <div className="img">
                <img src={val.image} alt={val.name} />
            </div>
        </div>
        <div className="review-box box box2">
            <div className="cont">
                <img src={comma} alt="comma" />
                <p>{reviews[1].review}</p>
                <div className="user">
                    <h3>{reviews[1].name}</h3>
                    <h4>{reviews[1].designation}</h4>
                </div>
            </div>
            <div className="img">
                <img src={reviews[1].image} alt={reviews[1].name} />
            </div>
        </div>
        <div className="review-box box box3">
            <div className="cont">
                <img src={comma} alt="comma" />
                <p>{reviews[2].review}</p>
                <div className="user">
                    <h3>{reviews[2].name}</h3>
                    <h4>{reviews[2].designation}</h4>
                </div>
            </div>
            <div className="img">
                <img src={reviews[2].image} alt={reviews[2].name} />
            </div>
        </div>
        <div className="rev-navigation">
          <div className="rev-btn rev1" onClick={() => handleNavigate(1)}></div>
          <div className="rev-btn rev2" onClick={() => handleNavigate(2)}></div>
          <div className="rev-btn rev3" onClick={() => handleNavigate(3)}></div>
        </div>
      </div>
      
    </div>
  )
}

export default Review
