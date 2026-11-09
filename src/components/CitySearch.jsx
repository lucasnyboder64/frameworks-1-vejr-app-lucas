import React from "react";
import "./CitySearch.css";

export default function CitySearch({ setCityData, setCity }) {
    const API_url = import.meta.env.VITE_WEATHER_URL;
    const API_key = import.meta.env.VITE_API;

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const city = formData.get("city");

        const url = new URL(API_url);

        url.searchParams.set("q", city);
        url.searchParams.set("appid", API_key);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Kunne ikke finde byen");
            }

            const data = await response.json();

            setCityData(data[0]);
            setCity(city);

        } catch (error) {
            console.error(error);
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