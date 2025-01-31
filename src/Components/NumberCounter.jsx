import React, { useRef, useEffect, useState } from 'react';
import classes from './NumberCounter.module.css';

const NumberCounter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(799900);
  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        const interval1 = setInterval(() => {
          setCount1((prevCount) => {
            if (prevCount === 200) {
              clearInterval(interval1);
              return prevCount;
            }
            return prevCount + 1;
          });
        }, 10);

        const interval2 = setInterval(() => {
          setCount2((prevCount) => {
            if (prevCount === 3) {
              clearInterval(interval2);
              return prevCount;
            }
            return prevCount + 1;
          });
        }, 200);

        const interval3 = setInterval(() => {
          setCount3((prevCount) => {
            if (prevCount === 800000) {
              clearInterval(interval3);
              return prevCount;
            }
            return prevCount + 1;
          });
        }, 70);
      }
    });

    const currentRef = numberRef.current; // Capture the current value of the ref

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); 

  return (
    <div className={classes.numberCounter}>
      <div className={classes.summaryTitle}>Season 1 Summary</div>
      <div className={classes.data}>
      <div className={classes.counter} ref={numberRef}>
        <div className={classes.three}>{count1}+</div>
        <div className={classes.participants}>Participants</div>
        <div className={classes.twoHundred}>{count2}</div>
        <div className={classes.country}>Countries</div>
      </div>

      <div className={classes.socialCount}>
      <div className={classes.views}>{count3.toLocaleString('en-IN')}+</div>
      <div className={classes.viewsCount}>Views</div>
      </div>
      </div>
    </div>
  );
};

export default NumberCounter;
