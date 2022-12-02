import './App.css';
import {BrowserRouter as Router,Routes,Route,Link, BrowserRouter} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DailyWeather from './DaliyWeather';
import HourlyWeather from './HourlyWeather';

function App() {
  const [weatherDayData, setWeatherDayData] = useState()
  const [weatherHourlyData, setWeatherHourlyData] = useState(null)
  
  const url= 'https://api.openweathermap.org/data/2.5/onecall?lat=42.361145&lon=-71.057083&units=imperial&exclude=minutely&appid=ffe63745a1e6cbad92e44b2bf6f0ea6a';
  useEffect(() => {
    axios.get(url)
           .then(function (res) {
            setWeatherDayData(res.data.daily);
            
            
              
               
           })
           .catch(function (error) {
               console.log(error);
           })
    axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=42.361145&lon=-71.057083&units=imperial&appid=5cf99048e1d5692e630d2e400cf735ee')
    .then(function (res) {
    setWeatherHourlyData(res.data.list);
      
        
    })
    .catch(function (error) {
        console.log(error);
    })       
}, [])
function changeDate(a){

 a.setDate(a.getDate() + 1);
 return a.getDay();

}
var d1 = new Date();
var a = new Date();
// var d1= changeDate(a);
var d2= changeDate(a);
var d3= changeDate(a);
var d4= changeDate(a);
var d5= changeDate(a);
console.log(d1,d2,d3,d4,d5)
        var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        var day1 = weekdays[d1.getDay()];
        
       
        var day2 = weekdays[d2];
        
        var day3 = weekdays[d3];
       
        var day4 = weekdays[d4];
        
        var day5 = weekdays[d5];
        
        
var days=  1;

// var day1= new Date().getDay().toLocaleString('en-us', {weekday:'long'});
// // let options = { weekday: 'short'}
// // day1 = Intl.DateTimeFormat('en-US', options).format(day1)


  return (
    <div className="App">
      <h1>Boston 5 day Weather</h1>
      <div className='card' >
        {weatherDayData? 
            weatherDayData.slice(0,5).map((day, i) =>  {
              return <DailyWeather key={i} 
                  dateNum={day.dt}
                  dayIcon={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  tempHigh={day.temp.max}
                  tempLow={day.temp.min} days={days++}
                  hourlydata={weatherHourlyData}
                  />
                 
          }) 
      : <h2>Loading...</h2>
      }
       
        
    </div>
    <Router>
            <Link to={'/'+day1}>
                  <button type="button" className='button'>
                  Hourly data of {day1}
                  </button>
                </Link>
                <Link to={'/'+day2}>
                  <button type="button" className='button'>
                  Hourly data of {day2}
                  </button>
                </Link>
                <Link to={'/'+day3}>
                  <button type="button" className='button'>
                  Hourly data of {day3}
                  </button>
                </Link>
                <Link to={'/'+day4}>
                  <button type="button" className='button'>
                  Hourly data of {day4}
                  </button>
                </Link>
                <Link to={'/'+day5}>
                  <button type="button" className='button'>
                  Hourly data of {day5}
                  </button>
                </Link>
                <Routes>
                
      <Route exact path = {'/'+day1} element = {<HourlyWeather hourlydata={weatherHourlyData} day={d1.getDay()}/>}></Route>
      <Route exact path = {'/'+day2} element = {<HourlyWeather hourlydata={weatherHourlyData} day={d2}/>}></Route>
      <Route exact path = {'/'+day3} element = {<HourlyWeather hourlydata={weatherHourlyData} day={d3}/>}></Route>
      <Route exact path ={'/'+day4} element = {<HourlyWeather hourlydata={weatherHourlyData} day={d4}/>}></Route>
      <Route exact path = {'/'+day5} element = {<HourlyWeather hourlydata={weatherHourlyData} day={d5}/>}></Route>
      
      </Routes>
      </Router>  
               
    
    </div>
    
  );
}

export default App;
