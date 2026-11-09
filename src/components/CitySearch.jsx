import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import "./CitySearch.css"

export default function CitySearch({ setSearch, setCity, setCityData }) {
    const API_url = import.meta.env.VITE_WEATHER_URL;
    const API_key = import.meta.env.VITE_API;
    const API_url_data = import.meta.env.VITE_WEATHER_DATA_URL;

    async function handleSumit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const city = formData.get("city");
        const url = new URL(API_url);

        url.searchParams.set("q", city);
        url.searchParams.set("appid", API_key);

        const response = await fetch(url);
        const data = await response.json();
        setCityData(data);

        url.searchParams.set("lang", "da");
        const lat = data[0].lat;
        const lon = data[0].lon;

        const data_url = new URL(API_url_data);
        data_url.searchParams.set("lat", lat);
        data_url.searchParams.set("lon", lon);
        data_url.searchParams.set("lang", "da");
        data_url.searchParams.set("units", "metric");
        data_url.searchParams.set("appid", API_key);

        const weather_response = await fetch(data_url.href);
        const weather_data = await weather_response.json();
        setSearch(weather_data);
        setCity(city);
    }

    return (
        <>
            <section className="top">
                <h1>Søg By</h1>
                <form onSubmit={handleSumit}>
                    <input type="text" name="city" placeholder="Skriv bynavn" className="search_city"></input>
                    <button type="submit" className="search_button"><p className="fa-solid fa-magnifying-glass"></p>SØG</button>
                </form>
            </section>
        </>
    );
}