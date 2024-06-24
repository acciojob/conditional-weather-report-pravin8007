import React from "react";

const WeatherDisplay = ({ weather }) => {
    const { temperature, conditions } = weather;

    const tempStyle = {
        color: temperature > 20 ? 'red' : 'blue',
    };

    return (
        <div>
            <h1>Weather Information</h1>
            <h3 style={tempStyle}>Temperature: {temperature}°C</h3>
            <h3>Conditions: {conditions}</h3>
        </div>
    );
};

export default WeatherDisplay;