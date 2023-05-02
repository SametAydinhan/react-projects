
import { createContext,useState,useContext,useEffect } from "react";
import axios from 'axios';

export const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider= (porps) => {
    const [city,setCity] = useState({
        "id": 20,
        "name": "Denizli",
        "latitude": "37.7765",
        "longitude": "29.0864",
        "population": 993442,
        "region": "Ege"
    });

    const [current, setCurrent] = useState(null);
    const [daily,setDaily] = useState([]);

    const apiKey = import.meta.env.VİTE_API_KEY;
    
    useEffect(() => {
        axios(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=hourly,minutely&units=metric&lang=tr&appid=${apiKey}`
        ).then(({data}) =>{
            setDaily(data.daily);
        });
    }, [city]);
    
    return(
        <WeatherContext.Provider
        value={{
            city,
            setCity,
            current,
            setCurrent,
            daily,
            setDaily
        }}
        >
            {porps.children}
        </WeatherContext.Provider>
    );
};