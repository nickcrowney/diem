<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from 'react';
>>>>>>> a94eb8c8150b5bf8accefaae2903b2bfc7ca0a4b

const GoogleMap = () => {
  const [mapPin, setMapPin] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [showMapSearch, setShowMapSearch] = useState(true);
  const queryMap = (e) => {
    e.preventDefault();
    setMapPin(e.target.query.value);
    setShowMap((prev) => {
      return !prev;
    });
    setShowMapSearch((prev) => {
      return !prev;
    });
  };

  return (
    <>
<<<<<<< HEAD
      <form onSubmit={queryMap}>
        <input type="text" name="query" id="" />
        <button>search</button>
      </form>
      <iframe
        width="100%"
        height="200"
        style={{ margin: "1em 0", borderRadius: "5px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBsNI21BHJIIKWSngJbtch5hnqfnLlTP6o&q=sagrada`}
      ></iframe>
=======
      {showMapSearch && (
        <form onSubmit={queryMap}>
          <input
            type="text"
            name="query"
            id="query"
            className="py-2 px-4 rounded border-none mr-4"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            search
          </button>
        </form>
      )}

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
>>>>>>> a94eb8c8150b5bf8accefaae2903b2bfc7ca0a4b
    </>
  );
};

export default GoogleMap;
