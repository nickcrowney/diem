import React, { useEffect, useState } from 'react';
import hooks from '../services/ApiServices';

const GoogleMap = ({ currentDiem, setAllDiems }) => {
  const [mapPin, setMapPin] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [showMapSearch, setShowMapSearch] = useState(true);
  const queryMap = (e) => {
    e.preventDefault();
    setMapPin(e.target.query.value);

    currentDiem.id && hooks.modifyDiemMap(currentDiem.id, e.target.query.value);
    setAllDiems((diems) => {
      const copy = diems;
      const mapped = copy.map((diem) => {
        diem.id === currentDiem.id ? (diem.map = e.target.query.value) : diem;
        return diem;
      });
      return mapped;
    });
    setShowMap((prev) => {
      return !prev;
    });
    setShowMapSearch((prev) => {
      return !prev;
    });
  };
  useEffect(() => {
    if (currentDiem.map) setShowMap(true);
    if (!currentDiem.map) setShowMap(false);

    currentDiem.map && setMapPin(currentDiem.map);
  }, [currentDiem]);

  return (
    <>
      {/* {showMapSearch && (
        <form onSubmit={queryMap}>
          <input
            type="text"
            name="query"
            id="query"
            className="py-2 px-4 rounded border-none mr-4"
            placeholder="Enter location..."
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            search
          </button>
        </form>
      )} */}

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
