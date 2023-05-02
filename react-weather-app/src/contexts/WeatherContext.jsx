
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


}