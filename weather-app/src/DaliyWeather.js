import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import HourlyWeather from './HourlyWeather';

function DailyWeather({dateNum, dayIcon, tempHigh, tempLow,days,hourlydata }) {
   
    dateNum = new Date(dateNum * 1000)
    var x=(dateNum.getMonth()+1) + "/" + dateNum.getDate() + "/" + dateNum.getFullYear();
    dateNum.getDay();
    let options = { weekday: 'short'}
    dateNum = Intl.DateTimeFormat('en-US', options).format(dateNum)
    
  return (
      <div className="container">
          <div className="day">
            <img src={dayIcon} />
            <h2>{dateNum}</h2>
            <h2>{x}</h2>
            <div className="temp-container">
                <h2 className="temp-high">Max Temp :{tempHigh.toString().slice(0,2)}&#x2109;</h2>
                <h2 className="temp-low">Mix Temp :{tempLow.toString().slice(0,2)}&#x2109;</h2>
            </div>
            {/* <Router>
            <Link to={'/'+dateNum+'Day'+days}>
                  <button type="button">
                        Click Me!
                  </button>
                </Link>
                <Routes>
                
      <Route exact path = {'/'+dateNum+'Day1'} element = {<HourlyWeather hourlydata={hourlydata} day={x}/>}></Route>
      <Route exact path = {'/'+dateNum+'Day2'} element = {<HourlyWeather hourlydata={hourlydata} day={x}/>}></Route>
      <Route exact path = {'/'+dateNum+'Day3'} element = {<HourlyWeather hourlydata={hourlydata} day={x}/>}></Route>
      <Route exact path = {'/'+dateNum+'Day4'} element = {<HourlyWeather hourlydata={hourlydata} day={x}/>}></Route>
      <Route exact path = {'/'+dateNum+'Day5'} element = {<HourlyWeather hourlydata={hourlydata} day={x}/>}></Route>
      
      </Routes>
      </Router>   */}
               
                
          </div>
      </div>
  )
}


export default DailyWeather