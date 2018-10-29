import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="Venue Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1427.2902932976265!2d23.792445023056743!3d44.31857209508359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752d79e85f44945%3A0x2634ec0265cc4a2a!2sParcul+Prefecturii%2C+Strada+Popa+%C8%98apc%C4%83%2C+Craiova%2C+Romania!5e0!3m2!1sen!2sdk!4v1540850652441"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
