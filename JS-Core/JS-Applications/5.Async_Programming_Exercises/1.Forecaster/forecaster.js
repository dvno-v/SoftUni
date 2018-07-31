function attachEvents(){
    //constants
    const locationsUrl = "https://judgetests.firebaseio.com/locations.json";
    const todayWeatherUrl = "https://judgetests.firebaseio.com/forecast/today/";
    const upcomingWeatherUrl = "https://judgetests.firebaseio.com/forecast/upcoming/";
    const input = $("#location");
    //attaching events
    $("#submit").click(loadWeather);
    function loadWeather(){
        $.get(locationsUrl)
            .then(showWeather)
            .catch(displayError);
        function showWeather(data){
            let location = input.val();
            let currLoc = data.filter(e => e.name == location)[0];
            let todayWeatherP = $.get(todayWeatherUrl + currLoc.code + ".json");
            let upcomingWeatherP = $.get(upcomingWeatherUrl + currLoc.code + ".json");

            Promise.all([todayWeatherP, upcomingWeatherP])
                .then(displayWeather);
            function displayWeather([todayWeather, upcomingWeather]){
                //clearing html
                $("#current").html('<div class="label">Current conditions</div>');
                $("#upcoming").html('<div class="label">Three-day forecast</div>');
                //current conditions
                $("#forecast").css("display", "");
                let currConditionStatusSpan =$(`<span style='condition symbol'>${getCondition(todayWeather.forecast.condition)}</span>`);
                let currConditionSpan = $("<span>")
                                    .append($(`<span style="forecast-data"></span`).text(todayWeather.name))
                                    .append($(`<span style="forecast-data"></span`).text(`${todayWeather.forecast.low}°/${todayWeather.forecast.high}°`))
                                    .append($(`<span style="forecast-data"></span`).text(todayWeather.forecast.condition));
                $("#current")
                    .append(currConditionStatusSpan)
                    .append(currConditionSpan);
                
                //three day forecast 
                console.log(upcomingWeather.forecast)
                for(let weather of upcomingWeather.forecast){
                    let conditionSpan = $("<span>")
                                        .append($(`<span style='condition symbol'>${getCondition(weather.condition)}</span>`))
                                        .append($(`<span style="forecast-data"></span`).text(`${weather.low}°/${weather.high}°`))
                                        .append($(`<span style="forecast-data"></span`).text(weather.condition));
                    $("#upcoming").append(conditionSpan)                   
                }
            }
        }
        function getCondition(condition){
            switch(condition){
                case"Sunny":
                    return "&#x2600;"
                case"Partly sunny":
                    return "&#x26C5;"
                case"Overcast":
                    return "&#x2601;"
                case"Rain":
                    return "&#x2614;"
            }
        }
        function displayError(error){
        }
    }
}