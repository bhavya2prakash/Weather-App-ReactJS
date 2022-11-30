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
       if(rex(hour.dt_txt)==props.day){    
        return <div className='hour'>
            
            <ul>
                <li> Date & Time :{date(hour.dt_txt)}</li>
                <li>Temparature :{hour.main.temp} Fahrenheit</li>
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