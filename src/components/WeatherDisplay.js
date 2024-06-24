import React from "react";

const WeatherDisplay = ({ weather }) => {
    const { temperature, conditions } = weather;

    const tempStyle = {
        color: temperature > 20 ? 'red' : 'blue',
    };

    return (
        <div>
            <h1>Weather Information</h1>
            <p style={tempStyle}> <span>Temperature: {temperature}'</span> </p>
            <p><span>Conditions: {conditions}</span></p>
        </div>
    );
};

export default WeatherDisplay;