import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css';


function Home() {
  return (
    <div className="home font20">
      <Typewriter
        options={{
          strings: ["Hi There! 👋🏻", "I'm Ali Hamza", "Welcome to My Portfolio"],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 25,
        }}
      />
    </div>
  );
}

export default Home;
