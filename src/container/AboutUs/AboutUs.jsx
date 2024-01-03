import React, { useEffect, useRef } from 'react';
import { images } from '../../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './AboutUs.css';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const aboutUsRef = useRef(null);
  const historyRef = useRef(null);

  useEffect(() => {
   
    const aboutUsAnimation = gsap.from(aboutUsRef.current, {
      x: '-100%',
      duration: 1,
      ease: 'power3.out',
      opacity: 0,
      scrollTrigger: {
        trigger: aboutUsRef.current,
        start: 'top center+=100',
      },
    });

    const historyAnimation = gsap.from(historyRef.current, {
      x: '100%',
      duration: 1,
      ease: 'power3.out',
      opacity: 0,
      scrollTrigger: {
        trigger: historyRef.current,
        start: 'top center+=100',
      },
    });

    // When the component unmounts, kill the animations to avoid memory leaks
    return () => {
      aboutUsAnimation.kill();
      historyAnimation.kill();
    };
  }, []);

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about" ref={aboutUsRef}>
          <h1 className="headtext__cormorant">About us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ispum dolor sit amte, concestetur apdiscing elit. quis phatera
            adispcing vulputate posurere trustuqye. in sedio nec aliwuet eu proin
            mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="knife" />
        </div>
        <div className="app__aboutus-content_history" ref={historyRef}>
          <h1 className="headtext__cormorant">Our history</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ispum dolor sit amte, concestetur apdiscing elit. quis phatera
            adispcing vulputate posurere trustuqye. in sedio nec aliwuet eu proin
            mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
