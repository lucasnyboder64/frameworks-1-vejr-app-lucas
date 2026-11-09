import { useState } from "react";
import CitySearch from "./CitySearch";
import WeatherDisplay from "./WeatherDisplay";

export default function WeatherContainer({ setSearch, setCity, search, city }) {
    const [cityData, setCityData] = useState("");

    return (
        <section className="container">
            <CitySearch setSearch={setSearch} setCity={setCity} setCityData={setCityData} />
            <WeatherDisplay search={search} city={city} cityData={cityData} />
        </section>
    );
}