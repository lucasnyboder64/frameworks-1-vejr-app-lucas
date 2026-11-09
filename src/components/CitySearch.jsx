import React from "react";
import "./style.css";

export default function CitySearch({ setCityData, setCity, setGeoData, geo_data }) {
    const API_url = import.meta.env.VITE_WEATHER_URL;
    const API_Geo_url = import.meta.env.VITE_GEO_WEATHER_URL;
    const API_key = import.meta.env.VITE_API;

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const city = formData.get("city");

        const url = new URL(API_url);
        const geo_url = new URL(API_Geo_url);

        if (city != "") {
            url.searchParams.set("q", city);
            url.searchParams.set("appid", API_key);

            geo_url.searchParams.set("q", city);
            geo_url.searchParams.set("appid", API_key);
            geo_url.searchParams.set("limit", 5);

            try {
                const response = await fetch(url);
                const geo_response = await fetch(geo_url);

                if (!response.ok) {
                    throw new Error("Kunne ikke finde byen");
                }

                const data = await response.json();
                const geo_data = await geo_response.json();

                geo_data.shift();

                setGeoData(geo_data);
                setCityData(data[0]);
                setCity(data[0].local_names?.da || data[0].name);

            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <section className="top">
            <h1>Søg By</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="city"
                    placeholder="Skriv bynavn"
                    className="search_city"
                />

                <button type="submit" className="search_button">
                    <p className="fa-solid fa-magnifying-glass"></p>
                    SØG
                </button>
            </form>
        </section>
    );
}