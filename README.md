# Weather Dashboard (ReactJS Assignment)

## Project Overview
This is a responsive Weather Dashboard built with React and Vite. It integrates with the Open-Meteo APIs to display real-time and historical weather data. The app automatically detects the user location via browser GPS and shows detailed insights including temperature, humidity, wind, air quality, and more.

## Live Demo
- https://weather-dashboard-bvt9.vercel.app/

## Tech Stack
- React (Vite)
- Tailwind CSS
- Recharts (charts)
- Axios (API calls)
- Open-Meteo API

## Features
### Page 1: Current Weather and Hourly Forecast
- Auto-detect user location (GPS)
- Temperature (min, max, current)
- Humidity, precipitation, wind speed, visibility
- UV index, sunrise, and sunset
- Air quality (PM10 and PM2.5)
- Hourly charts for temperature, humidity, precipitation, wind speed, visibility, and air quality

### Page 2: Historical Data (up to 2 years)
- Custom date range selection (max 2 years)
- Temperature trends (min, max, mean)
- Precipitation totals
- Wind speed analysis
- Air quality trends (PM10 and PM2.5)
- Sunrise and sunset data

### Advanced UI
- Fully responsive (mobile and desktop)
- Horizontal scrolling for large datasets
- Zoom using Recharts Brush
- Card-based UI with Tailwind CSS
- Celsius and Fahrenheit toggle

### Performance
- Efficient API calls (triggered only when needed)
- useMemo for data transformation
- Limited dataset rendering for large charts
- Fast load time target (<500ms)

## APIs
- https://api.open-meteo.com
- https://archive-api.open-meteo.com

## Run Locally
```bash
git clone https://github.com/codemanav16/weather-dashboard
cd weather-dashboard
npm install
npm run dev
```

## Deployment
Suitable for Vercel or Netlify.

## Project Structure
```
src/
├── api/
├── components/
├── hooks/
├── pages/
├── App.jsx
├── main.jsx
```

## Key Highlights
- Real-time and historical weather insights
- Interactive charts with zoom and scroll
- Clean, modular React architecture
- Built to match assignment requirements

## Author
Manav Anal, MCA Final Year, Chandigarh University
