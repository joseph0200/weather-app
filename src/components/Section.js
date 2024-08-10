import axios from 'axios';
import React, { useState } from 'react';
import "./Section.css";
import { SearchIcon } from '@heroicons/react/solid';
import { useQuery } from 'react-query';

function Section() {
    const API_KEY = "8854d1b7883c4062acb53215241008";
    const [district, setDistrict] = useState("");

    const fetchWeather = () => {
        return axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${district}&aqi=no`);
    };

    const { data, refetch } = useQuery("Weather", fetchWeather, { enabled: false });

    return (
        <div className='section'>
            {/* Left section of the whole section */}
            <div className='leftSection'>
                <div className="leftSectionData">
                    <h1>
                        {data?.data?.current?.temp_c}
                        {/* temp in c */}
                        <span className='leftSection__degree'> °C</span>
                    </h1>

                    <h2>
                        {/* location */}
                        {data?.data?.location?.name}
                    </h2>
                    <div className="data__Details">
                        {/* Additional details can be added here */}
                    </div>
                    <div className="data__type">
                        <img
                            src={data?.data?.current?.condition?.icon}
                            alt="Weather condition icon"
                        />
                        <p>Condition: <span>
                            {/* Weather condition */}
                            {data?.data?.current?.condition?.text}
                        </span></p>
                    </div>
                </div>
            </div>

            {/* Right section of the whole section */}
            <div className='rightSection'>
                <div className="rightSection__header">
                    <div className="header__Left">
                        <input
                            onChange={(e) => setDistrict(e.target.value)}
                            type="text" placeholder='Enter your district/state' />
                    </div>

                    <div className="header__Right">
                        <button onClick={refetch}>
                            <SearchIcon style={{ width: "40px" }} />
                        </button>
                    </div>
                </div>

                <div className="rightSection__lastSearched">
                    <h2>Recently Searched</h2>
                    {/* Update these with dynamic values as needed */}
                    <p>Brisbane</p>
                    <p>Sydney</p>
                    <p>Kottayam</p>
                    <p>Kochi</p>
                </div>

                <div className="rightSection__weatherDetails">
                    <h2>Weather Details</h2>
                    <p>Country: {data?.data?.location?.country}</p>
                    <p>Region: {data?.data?.location?.region}</p>
                    <p>Local Time: {data?.data?.location?.localtime}</p>
                    <p>Time Zone: {data?.data?.location?.tz_id}</p>
                    <p>Temp in °C: {data?.data?.current?.temp_c}</p>
                    <p>Condition: {data?.data?.current?.condition?.text}</p>
                    <img
                        src={data?.data?.current?.condition?.icon}
                        alt="Weather condition icon"
                    />
                    <p>Wind Speed in kph: {data?.data?.current?.wind_kph}</p>
                </div>
            </div>
        </div>
    );
}

export default Section;
