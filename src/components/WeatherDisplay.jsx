import React from "react";

export default function WeatherDisplay({ search, city }) {
    let regionNames = new Intl.DisplayNames(['da'], { type: 'region' });
    let data = search;

    if (!search) {
        return;
    }

    const icon_path = "/src/assets/" + data.weather[0].icon + ".png";

    console.log(data);

    return (
        <>
            <section className="weather_info">
                {search && <p className="country_text">{regionNames.of(data.sys.country).toUpperCase()}</p>}
                {<p>{city.toUpperCase()}</p>}
                {<h1>{Math.floor(data.main.temp)}°</h1>}
                {<h1>Føles som {Math.floor(data.main.feels_like)}°</h1>}
                {<img src={icon_path}></img>}
                {<p>Vejret nu - {data.weather[0].description}</p>}
            </section>

        </>
    );
}