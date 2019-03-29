import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.699537101401!2d77.65662546482015!3d12.798004840969936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6cb89b103f232255!2sRoyal+Apartment!5e0!3m2!1sen!2sin!4v1544026761044" 
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;
