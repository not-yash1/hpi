import React, { useEffect, useMemo, useState } from 'react'
import './Contact.css'
import CallMadeIcon from '@mui/icons-material/CallMade';
import { contactUs } from '../../Redux/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const toastOptions = useMemo(() => ({
        position: "bottom-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
            backgroundColor: 'yellow !important',
            color: 'black',
        }
    }), [])

    const [value, setValue] = useState({
        fName: "",
        email: "",
        msg: ""
    });

    const [btn, setBtn] = useState(false);

    const dispatch = useDispatch();
    const {message, loading, error} = useSelector((state) => state.contact)

    const handleChange = (e) => {
        setValue((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(contactUs(value.fName, value.email, value.msg));
    }

    useEffect(() => {
        if(error){
            toast.error(error, toastOptions);
            dispatch({type: "clearErrors"});
        }
        if(message){
            toast.success(message, toastOptions);
            dispatch({type: "clearMessage"});
        }
    }, [dispatch, error, message])

    useEffect(() => {
        if(value.fName && value.email && value.msg){
            setBtn(true);
        }else{
            setBtn(false);
        }
    }, [value])

  return (
    <div className='contact-contain'>
        <div className="contact-header">
            <h1>Get in touch</h1>
            <h2>with us.</h2>
        </div>
        <div className="contact-form">
            <div className="form-details">
                <input type="text" name='fName' placeholder='Full Name' value={value.fName} onChange={handleChange} />
                <input type="email" name='email' placeholder='Email' value={value.email} onChange={handleChange} />
            </div>
            <div className="form-msg">
                <input type="text" name='msg' placeholder='Enter your message' value={value.msg} onChange={handleChange} />
            </div>
            <div className="form-btn">
                <button disabled={!btn || loading} className={(!btn || loading) ? 'disable-btn' : ''} type='submit' onClick={handleSubmit}>
                    <p>Send Details</p>
                    <CallMadeIcon sx={{
                        backgroundColor: (btn && !loading) ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                        color: (btn || !loading) ? 'rgb(14, 40, 71)' : 'rgba(14, 40, 71, 0.5)',
                        height: '90%',
                        width: '15.5%',
                        borderRadius: '50%',
                        padding: '4px',
                        marginTop: '-2px',
                        marginRight: '4px'
                    }} />
                </button>
            </div>
        </div>
    
    </div>
  )
}

export default Contact
