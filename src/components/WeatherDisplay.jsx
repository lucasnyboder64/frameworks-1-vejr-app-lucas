import React, { useEffect, useState } from "react";
import "./style.css";

export default function WeatherDisplay({ cityData, city, geo_data, setCityData, setCity }) {

    const API_url_data = import.meta.env.VITE_WEATHER_DATA_URL;
    const API_key = import.meta.env.VITE_API;

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        async function fetchWeather() {
            const url = new URL(API_url_data);

            url.search = new URLSearchParams(
                { lat: cityData.lat, lon: cityData.lon, appid: API_key, lang: "da", units: "metric" }
            );

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Kunne ikke hente vejret");
                }

                const data = await response.json();
                setWeather(data);

            } catch (error) {
                console.error(error);
            }
        }

        fetchWeather();

    }, [cityData]);

    console.log(cityData, "kig her");


    if (!weather) {
        return <p>Henter vejret...</p>;
    }

    const regionNames = new Intl.DisplayNames(['da'], {
        type: 'region'
    });

    const icon_path = "/src/assets/" + weather.weather[0].icon + ".png";

    return (
        <>
            <section className="weather_info">
                <p className="country_text">
                    {regionNames.of(weather.sys.country).toUpperCase()}
                </p>

                <p>{city.toUpperCase()}</p>

                <h1>{Math.floor(weather.main.temp)}°</h1>

                <h1>
                    Føles som {Math.floor(weather.main.feels_like)}°
                </h1>

                <img src={icon_path} alt="Vejrikon" />

                <p>Vejret nu - {weather.weather[0].description}</p>
            </section>

            <section className="other">
                <h1>Mente du:</h1>
                {geo_data.map((data, index) => {
                    return (
                        <button
                            onClick={() => {
                                setCityData(data);
                                setCity(data.local_names?.da || data.name);
                            }}
                            key={index}
                            className="other_countries"
                        >
                            {data.name}, {regionNames.of(data.country)}, {data.state}
                        </button>
                    );
                })}
            </section>
        </>
    );
}