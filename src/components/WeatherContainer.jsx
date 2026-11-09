import React from "react";
import CitySearch from "./CitySearch";
import WeatherDisplay from "./WeatherDisplay";
import "./style.css";

export default function WeatherContainer({
    cityData,
    city,
    setCityData,
    setCity,
    setGeoData,
    geo_data
}) {

    return (
        <>
            <CitySearch
                setCityData={setCityData}
                setCity={setCity}
                setGeoData={setGeoData}
                geo_data={geo_data}
            />

            {cityData && (
                <WeatherDisplay
                    cityData={cityData}
                    city={city}
                    setCityData={setCityData}
                    setCity={setCity}
                    setGeoData={setGeoData}
                    geo_data={geo_data}
                />
            )}
        </>
    );
}