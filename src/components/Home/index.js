// Home.js

// Home.js

// Home.js

import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom"
import './index.css';

const candidateProfilesData = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Software Engineer',
    experience: '5+ years',
    skills: 'JavaScript, React, Node.js',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'UX Designer',
    experience: '7+ years',
    skills: 'User Research, Prototyping, UI/UX Design',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    title: 'Data Scientist',
    experience: '6+ years',
    skills: 'Python, Machine Learning, Data Analysis',
  },
  {
    id: 4,
    name: 'Emily Brown',
    title: 'Graphic Designer',
    experience: '4+ years',
    skills: 'Adobe Illustrator, Photoshop, Branding',
  },
  {
    id: 5,
    name: 'William Lee',
    title: 'Product Manager',
    experience: '8+ years',
    skills: 'Product Strategy, Agile, Market Analysis',
  },
  {
    id: 6,
    name: 'Sophia Garcia',
    title: 'Frontend Developer',
    experience: '3+ years',
    skills: 'HTML, CSS, React, Vue.js',
  }]


const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    company: 'ABC Inc.',
    content:
      "We were able to the best candidates beacause of PostIT.",
  },
  {
    id: 2,
    name: 'Jane Smith',
    company: 'XYZ Corp.',
    content:
      "Excellent Services and EXperience",
  },
];


const Header = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!isNavbarActive);
  };

  return (
    <div className="navbar ">
      <div className="navbar-logo">PostIt</div>
      <div className={`navbar-menu ${isNavbarActive ? 'active' : ''}`}>
        <a href="#dashboards">Testimonials</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        &#9776; {/* Hamburger icon */}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      {Header}
      <div className="gradient-background">
        {/* Content for the home page */}
        <h1>Welcome to PostIt!</h1>
        <p>We offer excellent services to give you the right candidates.</p>
        <Link to="/post"><button className="post-job-button">Post Job</button></Link>
      </div>

      {/* Testimonials Section */}
      <section className="testimonials" id="dashboards">
        <h2>Testimonials of some of our customers</h2>
        <div className="testimonial-list">
          {testimonialsData.map((testimonial) => (
            <div className="testimonial" key={testimonial.id}>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-company">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </section>


      <div className='div'>
        <h1>We are proud to say that we have provided servicesto more than 500+ StartUps</h1>
      </div>

      <section className="candidate-profiles">
        <h2>Candidate Profiles</h2>
        <div className="profile-list">
          {candidateProfilesData.map((profile) => (
            <div className="profile" key={profile.id}>
              <h3>{profile.name}</h3>
              <p>{profile.title}</p>
              <p>{profile.experience} of experience</p>
              <p>Skills: {profile.skills}</p>
              <a href="#contact">Contact</a>
            </div>
          ))}
        </div>
      </section>

      

      {/* Contact Form Section */}
      
        <section className="contact-form" id='contact'>
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" required />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
      
    </div>
  );
};

export default Home;
