import React, { useState, useEffect } from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = "auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .";

  useEffect(() => {
    const typeText = () => {
      let textIndex = 0;

      const typingInterval = setInterval(() => {
        if (textIndex < textToType.length) {
          setTypedText(textToType.substring(0, textIndex + 1));
          textIndex++;
        } else {
          clearInterval(typingInterval);

          
          setTimeout(() => {
            setTypedText('');
            typeText();
          }, 2000); 
        }
      }, 25); 
    };

    typeText();

    return () => {
     
    };
  }, []);

  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt='chef' />
      </div>
      <div className='app__wrapper_info'>
        <SubHeading title='Chefs word' />
        <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
          </div>
          <p className="p__opensans">{typedText}</p>
        </div>
        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef x Founder</p>
          <img src={images.sign} alt='sign' />
        </div>
      </div>
    </div>
  );
};

export default Chef;


