import React from "react";

const WeatherDisplay = ({ weather }) => {
    const { temperature, conditions } = weather;

    const tempStyle = {
        color: temperature > 20 ? 'red' : 'blue',
    };

    return (
        <div>
            <p>
                <span style={tempStyle}>Temperature: {temperature}</span>
            </p>
            <p>Conditions: {conditions}</p>
        </div>
    );
};

export default WeatherDisplay;