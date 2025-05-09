import React, { useEffect, useState } from 'react'
import { GalleryVerticalEnd } from 'lucide-react'
import { NavLink } from 'react-router'

const Navbar = () => {
  const [location, setLocation] = useState({ city: 'Welcome', country: 'User', temperature: null })

  useEffect(() => {
    async function fetchLocationAndWeather() {
      try {
        // Get location data
        const locRes = await fetch('https://ipapi.co/json/')
        const locData = await locRes.json()
        const { city, country_name, latitude, longitude } = locData

        let temperature = null
        if (latitude && longitude) {
          // Get weather data
          const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
          const weatherData = await weatherRes.json()
          temperature = weatherData.current_weather?.temperature
        }

        setLocation({
          city,
          country: country_name,
          temperature
        })
      } catch (error) {
        setLocation({ city: 'Unknown', country: '', temperature: null })
      }
    }

    fetchLocationAndWeather()
  }, [])

  return (
    <div className="flex items-center justify-between px-6 pt-8 pb-3">
      <div className="text-gray-200">
        {/* Place and temperature */}
        <span>
          {location.city}, {location.country}
          {location.temperature !== null && (
            <span className="font-sans font-extralight"> • {location.temperature}°C</span>
          )}
        </span>
      </div>
      <h1 className="text-gray-200 text-xl"></h1>
      <NavLink to='/history'>
        <div className="w-8 h-8 text-gray-200">
          <GalleryVerticalEnd size={24} />
        </div>
      </NavLink>
    </div>
  )
}

export default Navbar
