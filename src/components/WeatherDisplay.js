import React from "react";

const WeatherDisplay = ({ weather }) => {
    const { temperature, conditions } = weather;

    const tempStyle = {
        color: temperature > 20 ? 'red' : 'blue',
    };

    return (
        <>
            <p>
                <span data-testid="temperature" style={tempStyle}>
                    Temperature: {temperature}
                </span>

                <span data-testid="conditions">
                    Conditions: {conditions}
                </span>
            </p>
        </>
    );
};

export default WeatherDisplay;