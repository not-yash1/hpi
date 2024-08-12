import React, { useEffect, useState } from 'react'
import './Properties.css'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import img3 from '../../images/img3.jpg'
// import img15 from '../../images/img15.jpg'
// import img2 from '../../images/img2.jpg'
import { Dialog } from '@mui/material'
import { LuDownload } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { fileDownload } from '../../Redux/userAction';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Properties = ({ isOpen, onClose }) => {

    const [data, setData] = useState({
        "fname": "",
        "email": "",
        "mob": ""
    })

    const [val, setVal] = useState(0);

    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState("")
    const [container, setContainer] = useState("")

    const [btn, setBtn] = useState(false);

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.file);

    const handleChange = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleClose = () => {
        setOpen(false);
        if(container){
            container.style.pointerEvents = 'visible'
            container.classList.remove('blur');
        }
    }

    const handleOpen = (value) => {
        setOpen(true);
        setVal(value);
        if(container){
            container.classList.add('blur');
            container.style.pointerEvents = 'none'
        }
        if(modal){
            modal.style.pointerEvents = 'visible'
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(data.fname && data.email && data.mob){
            // setOpen(false);
            await dispatch(fileDownload(data.fname, data.email, data.mob, val));
            setOpen(false);
            if(container){
                container.style.pointerEvents = 'visible'
                container.classList.remove('blur');
            }
        }
    }

    const [track, setTrack] = useState("");
    const [items, setItems] = useState("");
    const [itemWidth, setItemWidth] = useState(0);
    const [index, setIndex] = useState(0);
    const [leftBtn, setLeftBtn] = useState(false);
    const [rightBtn, setRightBtn] = useState(false);

    const updatePosition = (val) => {
        let elem = track;
        if(elem){
            if(val){
                elem.style.transform = `translateX(0vw)`;
            } else {
                elem.style.transform = `translateX(-24vw)`;
            }
        }
        setTrack(elem);
    }

    const handleLeftClick = () => {
        if (index > 0) {
            updatePosition(true);
            setIndex((prevIndex) => {
                const newIndex = prevIndex - 1;
                // updateCarouselPosition(newIndex);
                return newIndex;
            });
        }
    }

    const handleRightClick = () => {
        if (index < items.length - 2) {
            updatePosition(false);
            setIndex((prevIndex) => {
                const newIndex = prevIndex + 1;
                // updateCarouselPosition(newIndex);
                return newIndex;
            });
        }
    }

    useEffect(() => {
        if(open){
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'scroll';
        }
    }, [open])

    useEffect(() => {
        const trace = document.querySelector('.caraousel-track')
        const list = Array.from(trace.children)
        setTrack(trace);
        setItems(list);
        const width = list[0].getBoundingClientRect().width + 4 / 100 * trace.offsetWidth
        setItemWidth(width);
        
        const cont = document.querySelector('.prop-container')
        const mod = document.querySelector('.modal')
        setModal(mod);
        setContainer(cont);
    }, [])

    useEffect(() => {
        if(data.fname !== "" && data.email !== "" && data.mob !== ""){
            setBtn(true);
        }else{
            setBtn(false);
        }
    }, [data])

  return (
    <>
        <div className='prop-container'>
            <div className="prop-header">
                <h4>INTRODUCING OPULENT SPACES</h4>
                <h1>Our Properties</h1>
            </div>
            <div className="prop-caraousel">
                <div className="caraousel-btn left-btn">
                    <button disabled={leftBtn} onClick={handleLeftClick} className='left-arrow btns'><FaAngleLeft style={{
                        background: 'none',
                        marginTop: '6%',
                    }}/></button>
                </div>
                <div className="caraousel-track">
                    <div className="caraousel-item" onClick={() => handleOpen(0)}>
                        <div className="caraousel-img">
                            <div className="hover-text">
                                <div className="header-btn">
                                    <button className='top-btn'>
                                        <LuDownload />
                                        <h5>DOWNLOAD BROCHURE</h5>
                                    </button>
                                </div>
                                <div className="content">
                                    <div className="main-content">
                                        <div className="cont content2">
                                            <h2>64</h2>
                                            <h4>flats</h4>
                                        </div>
                                        <div className="cont content3">
                                            <h2>100</h2>
                                            <h4>parking spaces</h4>
                                        </div>
                                    </div>
                                    <div className="foot-btns">
                                        <button className='fbtns left-btn'>PREMIUM APARTMENTS</button>
                                        <button className='fbtns right-btn'>FULLY DEVELOPED</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="caraousel-img-name">
                            The Crown
                        </div>
                    </div>
                    <div className="caraousel-item" onClick={() => handleOpen(1)}>
                        <div className="caraousel-img">
                            <div className="hover-text">
                                <div className="header-btn">
                                    <button className='top-btn'>
                                        <LuDownload />
                                        <h5>DOWNLOAD BROCHURE</h5>
                                    </button>
                                </div>
                                <div className="content">
                                    <div className="main-content">
                                        <div className="cont content2">
                                            <h2>66</h2>
                                            <h4>flats</h4>
                                        </div>
                                        <div className="cont content3">
                                            <h2>100</h2>
                                            <h4>parking spaces</h4>
                                        </div>
                                    </div>
                                    <div className="foot-btns">
                                        <button className='fbtns left-btn'>SUPER LUXURY APARTMENTS</button>
                                        <button className='fbtns right-btn'>UNDER CONSTRUCTION</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="caraousel-img-name">
                            The Emperor
                        </div>
                    </div>
                    <div className="caraousel-item" 
                    // onClick={() => handleOpen(2)}
                    >
                        <div className="caraousel-img">
                            <div className="hover-text">
                                <div className="header-btn">
                                    <button className='top-btn'>
                                        <LuDownload />
                                        <h5>DOWNLOAD BROCHURE</h5>
                                    </button>
                                </div>
                                <div className="content">
                                    <div className="main-content">
                                        <div className="cont content2">
                                            <h2>-</h2>
                                            <h4>flats</h4>
                                        </div>
                                        <div className="cont content3">
                                            <h2>-</h2>
                                            <h4>parking spaces</h4>
                                        </div>
                                    </div>
                                    <div className="foot-btns">
                                        <button className='fbtns left-btn'>PREMIUM APARTMENTS</button>
                                        <button className='fbtns right-btn'>UPCOMING</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="caraousel-img-name">
                            The Kings Court
                        </div>
                    </div>
                </div>
                <div className="caraousel-btn righ-btn">
                    <button disabled={rightBtn} onClick={handleRightClick} className='right-arrow btns' ><FaAngleRight style={{
                        background: 'none',
                        marginTop: '6%',
                    }}/></button>
                </div>
            </div>  
            <div className='modal' style={{
                visibility: !open && 'hidden'
            }}>
                <div className='form-contain'>
                    <div className="form-header">
                        <div className="header-text">
                            <h1>Enter Details</h1>
                            <h4>Please enter the following details in order</h4>
                            <h4>to download the brochure</h4>
                        </div>
                        <div className="close-icon">
                            <button className='close-btn' onClick={handleClose}>
                                <RxCross2 style={{
                                    height: '20px',
                                    width: '20px',
                                    color: 'rgb(14, 40, 71)',
                                    marginRight: '20px'
                                }} />
                            </button>
                        </div>
                    </div>
                    <div className="form-details">
                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" placeholder='Full Name' name='fname' value={data.fname} onChange={handleChange} />
                            <input type="text" placeholder='Email Address' name='email' value={data.email} onChange={handleChange} />
                            <input type="text" placeholder='Mobile Number' name='mob' value={data.mob} onChange={handleChange} />
                            <button disabled={!btn} className={!btn ? 'disabled-btn' : ''} type='submit'>
                                <h4>Download Brochure</h4>
                                <LuDownload
                                style={{
                                    backgroundColor: btn ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                                    color: btn ? 'rgb(14, 40, 71)' : 'rgba(14, 40, 71, 0.6)',
                                    borderRadius: '50%',
                                    height: '30px',
                                    width: '30px',
                                    padding: '5px'
                                }} />
                            </button>

                        </form>
                    </div>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default Properties
