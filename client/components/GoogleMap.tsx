import React, { useState } from 'react';

const GoogleMap = () => {
  const [mapPin, setMapPin] = useState('');

  const queryMap = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    setMapPin(query);
  };

  return (
    <>
      <form onSubmit={queryMap}>
        <input type="text" name="query" id="query" />
        <button>search</button>
      </form>
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
