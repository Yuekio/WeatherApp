import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
} from './../../constants/weathers';

const location = "Cancun,mx";
const api_key = "0a29440f140eb10144a18bd7874c222c";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const api_wheater = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}


class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Cancún',
            data: data,
        }
    }

    getWeatherState = weather_data => {
        return SUN;
    }
    
    getData = weather_data => {
        const {humidity, temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }
        return data;
    }
    
    handleUpdateClick = () => {
        fetch(api_wheater).then( resolve => {
            return resolve.json();
        }).then(w => {
            const newWeather = this.getData(w);
            console.log(newWeather);            
            debugger;

            this.setState({
                data: newWeather
            })
        });
    }

    render(){
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}>                    
                </WeatherData>
                    <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;