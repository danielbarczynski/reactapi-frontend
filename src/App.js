import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
    const [weather, setWeather] = useState([]);
    const API_URL = "https://localhost:7000/weatherforecast";
    const fetchWeather = () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setWeather(JSON.stringify(data)));
    }

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={fetchWeather}>Fetch weather</button>
                <div>
                    {weather}
                </div>
            </header>
        </div>
    );
}

export default App;
