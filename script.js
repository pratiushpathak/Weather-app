const apikey="d91c8cc00fa1536cf7bd5a85d96c1ce6";


const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const seachBox=document.querySelector('.search input');

const seachBtn=document.querySelector('.search button');

const weathericon=document.querySelector('.weather-icon')


async function checkWeather(city)
{
  const response=await fetch(apiurl+city+`&appid=${apikey}`);
  if(response.status==404)
{
  document.querySelector('.eror').style.display="block";
  document.querySelector('.weather').style.display="none";
}else
{
  var data =await response.json();
  //console.log(data);

  document.querySelector('.city').innerHTML=data.name;
  document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
  document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
  document.querySelector('.wind').innerHTML=data.wind.speed+"km/h";

  if(data.weather[0].main=="Clouds")
{
  weathericon.src="images/clouds.png"
}
else if(data.weather[0].main=='Clear')
{
  weathericon.src="images/clear.png"
}
else if(data.weather[0].main=='Rain')
{
  weathericon.src="images/rain.png"
}
else if(data.weather[0].main=='Drizzle')
{
  weathericon.src="images/drizzle.png"
}
else if(data.weather[0].main=='Mist')
{
  weathericon.src="images/mist.png"
}
document.querySelector('.weather').style.
display="block";
document.querySelector('.eror').style.display="none";


}


 


}


seachBtn.addEventListener("click",()=>{
  checkWeather(seachBox.value);
})
document.addEventListener('keydown',(event)=>{
  if (event.key === 'Enter') {
    checkWeather(seachBox.value);
    
}

})