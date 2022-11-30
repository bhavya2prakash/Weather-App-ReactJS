import React from 'react'

function HourlyWeather(props) {
    console.log(props.day);
   
    function date(date){
        date = new Date(date);
       
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
      
    }
    
    function rex(x)
    {
        x = new Date(x)
        return x.getDay();
    }
  return (
  <> 
    <h1>Hourly Forecast</h1>
    {
    props.hourlydata?props.hourlydata.map((hour,i) =>  { 
        let houricon= `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`
       if(rex(hour.dt_txt)==props.day){    
        return <div className='hour'>
        {console.log(hour.weather[0].icon)}
            <ul>
                <li>Time : {date(hour.dt_txt)}</li>
                <li><img src = {houricon}/></li>
                <li>Max Temp :{hour.main.temp_max} Fahrenheit</li>
                <li>Min Temp :{hour.main.temp_min} Fahrenheit</li>
            </ul>
    
        </div>
              
       }
             
      }) 
  : <h2>Loading...</h2>
  }
  </>
  )
}

export default HourlyWeather