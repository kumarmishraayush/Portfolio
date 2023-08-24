import React from 'react'
import ProfilePic from "../Assets/img/ProfilePic.jpg";
import Button from 'react-bootstrap/Button';
 
import "./main.css";

const HomeContent = () => {
  return (
    <>
    <div >
   
      <div className="content">
        <div className="Profile">
          <img src={ProfilePic} alt="Profile " />
          <div style={{ textAlign: "center" }}>
            <h3>Ayush Mishra</h3>
            <h6>
              B.Tech CSE (2020 - 2024) <br />
              Mern stack Developer<br></br>
              Software Developer
              <br />
              Tech Teacher
            </h6>
          </div>
        </div>

        <div className="textContent">
          <div className="wrapper">
            <div className="static-txt">I'm a</div>

            <ul className="dynamic-txts">
              <li>
                <span>Software Engineer</span>
              </li>
              <li>
                <span>Mern stack Developer</span>
              </li>
              <li>
                <span>Freelancer</span>
              </li>
              <li>
                <span>Tech Teacher</span>
              </li>
            </ul>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="ScrollDown">
          <img
            className="scrolldown"
            //style={{width:"200px" ,borderRadius :" 50%",marginTop :"50px"}}
            src="https://www.pngkit.com/png/detail/302-3022662_picture-please-scroll-down.png"
            alt="new"
          />
        </div>
      </div>

      <div className="Intro">
        <h1 style={{ textAlign: "center" }}>Introduction</h1>
        <br />
        <ul style={{ listStyleType: "circle" }}>
          <li>
            <h6 style={{ paddingLeft: "20px" }}>
              Hello, my name is Ayush, i'm pursuing Btech from Donacharya
              Group of Institution Greater Noida, Currently i'm in my seventh
              semester with 7.5 CGPA and I’m a MERN stack developer.
            </h6>
            <br />
          </li>
          <li>
            <h6 style={{ paddingLeft: "20px" }}>
              I have good command over both front-end and back-end
              technologies, allowing me to build complete and scalable
              applications.
            </h6>
            <br />
          </li>

          <li>
            <h6 style={{ paddingLeft: "20px" }}>
              I have good knowledge of WEB 1.0, WEB 2.0, and introductory
              knowledge of WEB 3.0 (through solidity as language).
            </h6>
            <br />
          </li>

          <li>
            <h6 style={{ paddingLeft: "20px" }}>
              I worked in the technologies like Reactjs, Nodejs,
              Mongoose, MongoDB, Expressjs. I also have knowledge SQL, MySQL, C++, C, OPPS, Java(core).
            </h6>
            <br />
          </li>
          <li>
            <h6 style={{ paddingLeft: "20px" }}>
              I also have good command in data structures and algorithm, solved
              200+ DSA problem in leetcode using c++ as programming language,
              As you see my leetcode profile in navbar .
            </h6>
            <br />
          </li>
          <li>
            <h6 style={{ paddingLeft: "20px" }}>
              My hobbies is to learn and explore new technologies.
            </h6>
            <br />
          </li>

          <li>
            <h6 style={{ paddingLeft: "20px" }}>
              I also did machine learning certification from Prutor (IIT
              Kanpur).Where I learned creation of machine learning model through
              python ML tools like pandas, scikitLearn, seaborn etc.
            </h6>
            <br />
          </li>

          <li>
            <h6 style={{ paddingLeft: "20px" }}>
              I'm also fond of teaching , teaching technologies on my YouTube channel Serious Ayush
            </h6>
            <br />
          </li>

          <li>
            <h6 style={{ paddingLeft: "20px" }}>
              Language known
              <ul>
                <li>
                  Hindi
                </li>
                <li>
                  English
                </li>
                <li>
                  Bhojhpuri
                </li>
              </ul>
              
            </h6>
            <br />
          </li>
        </ul>
        <Button style={{marginLeft:"40%"}} href="https://drive.google.com/file/d/1VSbOIFSRMw4DA6Xt9H6dh-pInxvvpW6K/view?usp=drivesdk">Resume</Button>
      </div>
    </div>


  </>
  )
}

export default HomeContent