import React from "react";

const WeatherDisplay = ({ weather }) => {
    const { temperature, conditions } = weather;

    const tempStyle = {
        color: temperature > 20 ? 'red' : 'blue',
    };

    return (
        <div>
            <h1>Weather Information</h1>
            <span style={tempStyle}>Temperature: {temperature}' </span>
            <span>Conditions: {conditions}</span>
        </div>
    );
};

export default WeatherDisplay;