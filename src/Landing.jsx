import './Landing.css';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/Land2/About';
import Properties from './Components/Properties/Properties';
import Slider from './Components/Slideshow/Slider';
import Testimonial from './Components/Testimonials/Testimonial';
import Intro from './Components/Intro/Intro';
import Overview from './Components/Overview/Overview';
import Review from './Components/Reviews/Review';
import Disclaimer from './Components/Disclaimer/Disclaimer';
import Header from './Components/Header/Header';

function Landing() {
  return (
      <div className='landing'>
        <div className="section2">
          <Intro />
        </div>
        <div className="section2">
          <Home />
        </div>
        <div className="section" 
        style={{marginBottom: '150px'}}
        >
          <About />
        </div>
        <div className="section1">
          <Review />
        </div>
        <div className="section">
          <Properties />
        </div>
        <div className="section" 
        style={{marginBottom: '150px', marginTop: '100px'}}
        >
          <Testimonial />
        </div>
        <div className="section" 
        style={{marginBottom: '150px'}}
        >
          <Blogs />
        </div>
        {/* <div className="section" 
        style={{marginBottom: '150px'}}
        >
          <Details />
        </div> */}
        <div className="section" 
        style={{}}
        >
          <Overview />
        </div>
        <div className="" 
        style={{
          marginTop: '150px',
          marginBottom: '-50px'
        }}
        >
          <Header />
        </div>
        <div className="section" style={{
          overflowX: 'hidden',
          marginBottom: '100px',
        }}>
          <Slider />
        </div>
        {/* <div className="section1">
          <Reviews />
        </div> */}
        <div className="section1">
          <Contact />
        </div>
        <div className="section1">
          <Disclaimer />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
  );
}

export default Landing;
