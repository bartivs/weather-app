
const Weather =(function(){
    let apiKey= ""; 

    const setApiKey =(key)=>{
        apiKey=key;
    }
    async function getWeather(location){
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;
        let response= await fetch(url); 
        let jsonResponse= await response.json();
        return  await jsonResponse; 
    }
    return {
        setApiKey,
        getWeather
    };
})();


export default Weather;