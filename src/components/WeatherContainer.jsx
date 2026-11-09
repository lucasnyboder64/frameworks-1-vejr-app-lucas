import React from "react";
import CitySearch from "./CitySearch";
import WeatherDisplay from "./WeatherDisplay";
import "./CitySearch.css";

export default function WeatherContainer({
    cityData,
    city,
    setCityData,
    setCity
}) {

    return (
        <>
            <CitySearch
                setCityData={setCityData}
                setCity={setCity}
            />

            {cityData && (
                <WeatherDisplay
                    cityData={cityData}
                    city={city}
                />
            )}
        </>
    );
}