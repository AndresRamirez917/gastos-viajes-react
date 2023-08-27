import React, { useEffect, useState } from 'react'

const UseWeather = (city = 'Fresno') => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=58d47201e8f766bb0ca71980a2eefc37&units=metric`)
            .then(response => response.json())
            .then(json => {
                setLoading(false);
                setError(null);
             
                setData({
                    city,
                    temp: json.main.temp,
                    temp_min: json.main.temp_min,
                    temp_max: json.main.temp_max,
                    humedad: json.main.humidity,
                    estado: json.weather[0].description
                });
            })
            .catch(error => {
                setData(null);
                setError(error);
            })
    }, [city]);
    return [data, loading, error];
    

}
export default UseWeather