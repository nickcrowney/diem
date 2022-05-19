import React, { useState } from 'react';

const GoogleMap = ({ mapPin }) => {
  // const [mapPin, setMapPin] = useState('');
  // const [showMap, setShowMap] = useState(false);
  // // const [showMapSearch, setShowMapSearch] = useState(true);
  // const queryMap = (e) => {
  //   e.preventDefault();
  //   setMapPin(e.target.query.value);
  //   setShowMap((prev) => {
  //     return !prev;
  //   });
  //   setShowMapSearch((prev) => {
  //     return !prev;
  //   });
  // };

  return (
    <>
      <iframe
        width="100%"
        height="200"
        style={{ margin: '1em 0', borderRadius: '5px' }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBsNI21BHJIIKWSngJbtch5hnqfnLlTP6o&q=${mapPin}`}
      ></iframe>
    </>
  );
};

export default GoogleMap;