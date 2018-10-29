import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">The Venue</div>
        <div className="footer_copyright">
          The venue 2019 by{' '}
          <a
            href="https://github.com/Robert-OP"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Robert-OP
          </a>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
