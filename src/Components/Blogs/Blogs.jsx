import React, { useState } from 'react'
import './Blogs.css'
import { MdArrowOutward } from "react-icons/md";
import img1 from "../../images/blog1.svg"
import img2 from "../../images/blog2.svg"
import img3 from "../../images/blog3.svg"

const Blogs = () => {

  const [news, setNews] = useState([
    {
      title: "Each residence is meticulously crafted to offer panoramic views, lavish interiors, and an array of exclusive amenities",
      date: "12 APRIL, 2024",
      img: img1
    },
    {
      title: "This award celebrates our relentless pursuit of excellence and our commitment to providing residents with an unmatched living experience",
      date: "28 MAY, 2022",
      img: img2
    },
    {
      title: "Our sustainable design and advanced energy-efficient systems set a benchmark for eco-friendly residential living.",
      date: "02 SEPTEMBER 2023",
      img: img3
    },
  ])

  const [ind, setInd] = useState(0);

  // const [bgImage, setBgImage] = useState(img1);
  const [color, setColor] = useState([true, false, false])

  const handleClick = (val) => {
    setInd(val);
    setColor(prev => {
      prev = [false, false, false];
      prev[val] = true;
      return prev
    })
  }

  return (
    <div className='blog-container'>
        <div className="blog-left">
            <div className="left-header">
              <h2>STAY AHEAD OF THE CURVE</h2>
              <h1>News & Blogs</h1>
            </div>
            <div className="left-body">
                <div className="body-content" onClick={() => handleClick(0)}>
                  <h1 style={{
                    color: `${color[0] ? "rgb(250, 232, 207)": "rgba(14, 40, 71, 0.05)"}`
                  }}>01</h1>
                  <h2>
                    Hira Panna Infra group set to develop the tallest residential tower of Bihar <MdArrowOutward style={{
                      marginBottom: '-5px',
                      marginLeft: '4px',
                      background: 'none'
                    }} />
                  </h2>
                </div>
                <div className="body-content" onClick={() => handleClick(1)}>
                  <h1 style={{
                    color: `${color[1] ? "rgb(250, 232, 207)": "rgba(14, 40, 71, 0.05)"}`
                  }}>02</h1>
                  <h2>
                    Hira Panna Infra group felicitated by the luxury Times Award <MdArrowOutward style={{
                      marginBottom: '-5px',
                      marginLeft: '4px',
                      background: 'none'
                    }} />
                  </h2>
                </div>
                <div className="body-content body-con3" onClick={() => handleClick(2)}>
                  <h1 style={{
                    color: `${color[2] ? "rgb(250, 232, 207)": "rgba(14, 40, 71, 0.05)"}`
                  }}>03</h1>
                  <h2>
                    Hira Panna Infra is not only about luxury but also about responsible living<MdArrowOutward style={{
                      marginBottom: '-5px',
                      marginLeft: '4px',
                      background: 'none'
                    }} />
                  </h2>
                </div>
            </div>
        </div>
        <div className="blog-right">
          <div className="right-img" style={{
            background: `url(${news[ind].img}) lightgray 50% / cover no-repeat`,
          }}></div>
          <div className="right-desc">
            <h3>
              {news[ind].title}
            </h3>
            <h6>
              {news[ind].date}
            </h6>
          </div>
        </div>
      
    </div>
  )
}

export default Blogs
