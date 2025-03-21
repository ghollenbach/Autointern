import './home.css';
import Banner from "./Banner";
import Bios from "./Bios";

function Home() {
    return (
        <div className="container">
          <Banner />
        <div className="columns">
          <div className="column">
            <h2>What is AutoIntern?</h2>
            <p>AutoIntern is a revolutionary new application designed in the second quarter of the 21st century. It's goal is to help enlighten the millions of students who, every year, seek illuminating oppurtunities for research. By automating the intership application process, human efficiency is maximized, and the small time we beings have on this fragile Earth can be used best. Thus is the gift of AutoIntern to the world.</p>
          </div>
          <div className="column">
            <h2>How it works</h2>
            <p>Provide us with your resume, a list of professors, their email addresses, and temporary access to your email. Our AI-powered application will then generate a personalized cover letter using online information about each professor and your resume. Finally, it will send the tailored application to your selected recipients with your resume attached.</p>
          </div>
        </div>
        <div className="image">
          <h2>Example</h2>
          <img src="/download.jpeg" alt="example" />
        </div>
        <div className="container">
          <Bios/>
        </div>
        <div className="footer">
          <p>AutoIntern &copy; 2025</p>
        </div>
        </div>
      )
    }

  export default Home;