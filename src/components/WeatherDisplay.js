import React from "react";

const WeatherDisplay = ({ weather }) => {
    const { temperature, conditions } = weather;

    const tempStyle = {
        color: temperature > 20 ? 'red' : 'blue',
    };

    return (
        <div>
            <h1>Weather Information</h1>
            <p style={tempStyle} data-testid="temperature"> Temperature: {temperature}' </p>
            <p data-testid="conditions"> Conditions: {conditions}</p>
        </div>
    );
};

export default WeatherDisplay;