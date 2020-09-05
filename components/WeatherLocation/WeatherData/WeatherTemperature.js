import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy'
}

const getWeatherIcon = (weatherState) => {
    const icon =icons[weatherState];
    const sizeIcon = "4x";

    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
    else
        return <WeatherIcons className="wicon" name={"rain"} size={sizeIcon}/>  
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        <span>           
            {getWeatherIcon(weatherState)}
            <span className="temperature">{`${temperature}`}</span>
            <span className="temperatureType">{`C°`}</span>
        </span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired, 
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;