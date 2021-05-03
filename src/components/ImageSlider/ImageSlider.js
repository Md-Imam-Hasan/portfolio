import React, { useEffect, useState } from 'react';
import style from './ImageSlider.module.scss'


const delay = 2500;
const ImageSlider = (props) => {
  const colors = props.projectImg;
  console.log(colors);
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={style.slideshow}>
      <div
        className={style.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className={style.slide}
            key={index}
          >
            <img src={backgroundColor} className='img-fluid' alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;