import React, { useEffect, useState } from 'react';

const GoogleMap = ({ currentDiem, setAllDiems }) => {
  const [mapPin, setMapPin] = useState('');
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (currentDiem.map) setShowMap(true);
    if (!currentDiem.map) setShowMap(false);

    currentDiem.map && setMapPin(currentDiem.map);
  }, [currentDiem]);

  return (
    <>
      {showMap && (
        <iframe
          width="100%"
          height="200"
          style={{ margin: '1em 0', borderRadius: '5px' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBsNI21BHJIIKWSngJbtch5hnqfnLlTP6o&q=${mapPin}`}
        ></iframe>
      )}
    </>
  );
};

export default GoogleMap;
