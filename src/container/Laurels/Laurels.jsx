import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import './Laurels.css';

gsap.registerPlugin(ScrollTrigger);

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className='app__laurels_awards-card' id='awards'>
    <img src={imgUrl} alt='award' />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
      <p className='p__cormorant'>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  const awardsContainerRef = useRef(null);

  useEffect(() => {
    const awards = awardsContainerRef.current.querySelectorAll('.app__laurels_awards-card');

    gsap.from(awards, {
      x: '-100%',
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: awardsContainerRef.current,
        start: 'top center',
        end: 'bottom center',
        
        scrub: false, 
      },
    });

    // Slow down the scroll when this section comes into view
    gsap.to(window, {
      scrollTrigger: {
        trigger: awardsContainerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: false, 
        onToggle: self => {
          if (self.isActive) {
            
            
          }
        },
      },
    });
  }, []);

  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_info'>
        <SubHeading title='Awards and recognition' />
        <h1 className='headtext__cormorant'>Our Laurels</h1>
        <div className='app__laurels_awards' ref={awardsContainerRef}>
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.laurels} alt='laurels' />
      </div>
    </div>
  );
};

export default Laurels;
