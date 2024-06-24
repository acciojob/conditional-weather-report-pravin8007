import React from "react";

const WeatherDisplay = ({ weather }) => {
    const { temperature, conditions } = weather;

    const tempStyle = {
        color: temperature > 20 ? 'red' : 'blue',
    };

    return ( 
        <div>
            <h1>Weather Information</h1>
            <p>
                <span style={tempStyle}>Temperatur : {temperature}' </span>
                <span>Condition : {conditions}</span>
            </p>
        </div>
    );
};

export default WeatherDisplay;