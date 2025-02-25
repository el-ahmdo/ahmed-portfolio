import React from "react";
import "./Resume.css";
const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="backGround-text-con">
        <p className="back-text">Resume</p>
        <p className="front-text">Resume</p>
      </div>
      <div className="resume_description">
        <p>
          I craft digital experiences that are functional, efficient, and
          user-friendly. With a passion for problem-solving and clean code, I
          bring ideas to life. Every project is an opportunity to learn, grow,
          and innovate
        </p>

        <div className="resume_cards_con">
          <div className="card">
            <h1 className="date">2016-2022</h1>
            <h2 className="acheivement">
              Bachelor's degree of Computer Science
            </h2>
            <h3 className="institution"> Ahamadu Bello University Zaria</h3>
            <p className="card-description">
              I earned my Bachelor's degree in Computer Science from the
              prestigious Ahmadu Bello University, where I built a strong
              foundation in core computing principles. During my studies, I
              gained hands-on experience in web application development,
              mastering both frontend and backend technologies. I also developed
              a deep understanding of data structures and algorithms, essential
              for optimizing software performance.
            </p>
          </div>

          <div className="card">
            <h1 className="date">2023-2024</h1>
            <h2 className="acheivement">National Youth service Corps</h2>
            <h3 className="institution">Niger Delta Power Holding Company</h3>
            <p className="card-description">
              During my NYSC at NDPHC, I worked closely with the software team
              to maintain and enhance office software solutions. I provided
              hands-on support for both mobile and desktop applications,
              ensuring seamless operation across departments. My role involved
              troubleshooting, optimizing performance, and assisting in software
              updates to improve efficiency
            </p>
          </div>

          <div className="card">
            <h1 className="date">2019-2020</h1>
            <h2 className="acheivement">InternShip </h2>
            <h3 className="institution"> Transmission Company of Nigeria</h3>
            <p className="card-description">
              During my internship at Transmission Company of Nigeria, I gained
              hands-on experience across the Helpdesk, Networking, and Software
              departments. I provided IT support, troubleshooting hardware and
              software issues to ensure smooth operations. My role also involved
              assisting with network maintenance and software management,
              enhancing my technical expertise.
            </p>
          </div>

          <div className="card">
            <h1 className="date">2023-2024</h1>
            <h2 className="acheivement">internship </h2>
            <h3 className="institution">Warrams services</h3>
            <p className="card-description">
              At Warrams Services, a construction company, I was responsible for
              maintaining office computers and troubleshooting technical issues.
              I ensured the smooth operation of hardware and software,
              minimizing downtime for employees. My role involved diagnosing and
              resolving system failures, optimizing performance, and providing
              IT support.
            </p>
          </div>
        </div>
        <div className="download_resume_button">Download Cv</div>
      </div>
    </section>
  );
};

export default Resume;
