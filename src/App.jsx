import { useState } from 'react'
import CitySearch from './components/CitySearch'
import WeatherDisplay from './components/WeatherDisplay'
import WeatherContainer from './components/WeatherContainer';

function App() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <WeatherContainer setSearch={setSearch} setCity={setCity} search={search} city={city} />
    </>
  )
}

export default App
