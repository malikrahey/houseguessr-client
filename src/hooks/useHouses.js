import { useState, useEffect, useCallback } from 'react';

export function useHouses() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  // const setLoadingState = useCallback(newState => {
  //   setLoading(newState);
  // })

  useEffect(() => {
    setLoading(true);
    try {
    fetch(`${import.meta.env.VITE_API_ROUTE}houses`).then(resp => 
        resp.json()
    ).then(data => {
      const houses = data.map(item => ({
        location: item.location.S,
        price: item.price.N,
        bathrooms: item.bathrooms.N,
        bedrooms: item.bedrooms.N,
        pictures: item.pictures.L.map(picture => picture.S)
      }))
        setHouses(houses);
        // setHouses(data);

        setLoading(false);
    })

    
  }
  catch (e) {
    console.error(e);
  }
}
  , []);

  return [ houses, loading ];
}