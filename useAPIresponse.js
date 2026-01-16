// CustomHooks/useAPIresponse.js
import { useState, useEffect } from 'react';
import weather from '../APIInfo';

const useAPIresponse = (defaultCity) => {
  const [weatherData, setWeatherData] = useState(null);
  const [term, setTerm] = useState(defaultCity);

  const searchAPI = async (cityName) => {
    try {
      const response = await weather.get('/weather', {
        params: {
          q: cityName,
          appid: b7f3c880a9562c96527bd4bbf34b9c6d,
          units: 'metric',
        },
      });
      setWeatherData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    searchAPI(defaultCity);
  }, []);

  return [weatherData, searchAPI, term, setTerm];
};

export default useAPIresponse;


