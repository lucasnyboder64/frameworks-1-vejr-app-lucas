import { useState } from 'react'
import CitySearch from './components/CitySearch'
import WeatherDisplay from './components/WeatherDisplay'
import WeatherContainer from './components/WeatherContainer';
import "/src/components/CitySearch.css";

function App() {
  const [cityData, setCityData] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <WeatherContainer setCityData={setCityData} setCity={setCity} cityData={cityData} city={city} />
    </>
  )
}

export default App
