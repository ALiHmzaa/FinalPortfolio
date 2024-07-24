import React from 'react';
import viteLogo from '../vite.svg';
import '../App.css';
 // Ensure the path is correct

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h2>Know Who I Am</h2>
        <p>
          Hi everyone, I am Ali Hamza from Muzaffargarh, Pakistan. I recently graduated from Islamia University Bahawalpur.
        </p>
        <p>
          During my university period, I delved into various fields, gaining knowledge and skills in cryptocurrency, SEO, lead generation, WordPress, blogging, HTML, CSS, Tailwind CSS, the basics of React, Python, and Django. Now, I have decided to become a DevOps engineer and have recently joined a fellowship at UET, where I am currently learning about cloud computing.
        </p>
        <p>
          Apart from these professional pursuits, here are some activities I love to do:
        </p>
        <ul>
          <li>Playing games</li>
          <li>Stand-Up Comedy Show</li>
          <li>Watching anime</li>
        </ul>
      </div>
      <div className="about-img">
        <img src={viteLogo} alt="Ali Hamza" />
      </div>
    </div>
  );
}

export default About;
