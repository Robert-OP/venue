import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../layout/MyButton';

const Highlights = () => {
  return (
    <div className="highlight_wrapper">
      <Fade>
        <div className="center_wrapper">
          <h2>Highlights</h2>
          <div className="highlight_description">
            Ariana Grande-Butera is an American singer, songwriter and actress.
            She began her career in 2008 in the Broadway musical 13, before
            playing the role of Cat Valentine in the Nickelodeon television
            series Victorious and in the spinoff Sam & Cat.
          </div>
        </div>
      </Fade>

      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade>
            <div className="discount_porcentage">
              <span>25%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 25th December</h3>
              <p>
                First 1000 buyers will get a popsicle at the event. Get good
                seats and cheaper tickets before it is too late.{' '}
              </p>
              <MyButton
                text="Purchase tickets"
                bck="#ffa800"
                color="%ffffff"
                link="#!"
              />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
