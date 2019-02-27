if (typeof WEATHER != "object")
    WEATHER = {};
var openWeather = (function () {
    function openWeather() {
        this.API = {
            key: 'fbfd7b4f7c914c65705a6c5f5f448207',
            server: 'https://api.openweathermap.org/data/2.5/weather',
            find: 'https://api.openweathermap.org/data/2.5/find',
            source: 'openweather'
        };
        this.state = {
            cacheTime: 12 * 60 * 60 * 1e3
        };
        var ts = this;
    }
    ;
    openWeather.prototype.getUrl = function (place, type) {
        var ts = this;
        var url = ts.API.find + "?appid=" + ts.API.key;
        if (typeof place == "object" && place.length == 2) {
            url += "&lat=" + place[0] + "&lon=" + place[1];
        }
        return url;
    };
    ;
    openWeather.prototype.getPlace = function (place, callback, searchData) {
        var ts = this;
        var coordinates = String(place).split(",");
        if (place.indexOf(",") !== -1 && coordinates.length == 2) {
            var placeUrl = ts.getUrl(coordinates, 'coord');
            ts.getWeather(placeUrl, callback, searchData, coordinates);
        }
        else {
            console.info('getPlaceOpenWeather Search', place);
        }
    };
    ;
    openWeather.prototype.getWeather = function (placeUrl, callback, searchData, coords) {
        var ts = this;
        var countrycode = localStorage.getItem("weather-location") || localStorage.getItem("service-location") || localStorage.getItem("definedLocation");
        countrycode = countrycode ? String(countrycode).split('-')[0].toLowerCase() : false;
        console.info('Get weather', (new Date()));
        getCountryTemperatureUnit(countrycode, function (unit) {
            placeUrl += '&units=' + (unit == 'c' ? 'Metric' : 'Imperial');
            $.getJSON(placeUrl, function (weatherInfo) {
                var dMin = false, result;
                if (coords && weatherInfo.list.length > 1) {
                    for (var key in weatherInfo.list) {
                        var val = weatherInfo.list[key];
                        var dLat = Math.abs(coords[0] - val.coord.lat) * 1e3;
                        var dLong = Math.abs(coords[1] - val.coord.lon) * 1e3;
                        var dAbs = dLat + dLong;
                        if (!dMin || dAbs < dMin) {
                            weatherInfo.nearest = val;
                            dMin = dAbs;
                        }
                    }
                }
                else {
                    weatherInfo.nearest = weatherInfo.list[0];
                }
                if (weatherInfo && weatherInfo.nearest && weatherInfo.nearest.id) {
                    var placeLocation = {
                        id: weatherInfo.nearest.id,
                        city: weatherInfo.nearest.name,
                        name: weatherInfo.nearest.name,
                        lat: weatherInfo.nearest.coord.lat,
                        long: weatherInfo.nearest.coord.long,
                        country: weatherInfo.nearest.sys.country || '',
                        region: weatherInfo.nearest.sys.country || '',
                        countrycode: weatherInfo.nearest.sys.id || ''
                    };
                    if (searchData && typeof searchData == 'object' && typeof searchData.data == "object") {
                        placeLocation.city = searchData.data.LocalizedName;
                    }
                    var weatherChanel = weatherInfo;
                    var locationWeather = {
                        location: placeLocation,
                        unit: unit,
                        nextUpdate: new Date().getTime() + ts.state.cacheTime,
                        source: ts.API.source,
                        weather: {
                            text: weatherInfo.nearest.weather[0].description,
                            icon: weatherInfo.nearest.weather[0].icon,
                            temp: weatherInfo.nearest.main.temp,
                            city: placeLocation.city,
                            unit: unit
                        },
                        full: weatherInfo
                    };
                    setLastLocationWeather(locationWeather);
                    setWeatherForecast(weatherInfo.nearest);
                    callback(locationWeather);
                }
            }).fail(function (ex) {
                ts.error(callback, ex);
            });
        });
    };
    ;
    openWeather.prototype.error = function (cb, ex) {
        console.warn('OW Error');
    };
    ;
    return openWeather;
}());
WEATHER.openweather = new openWeather();
//# sourceMappingURL=openweather.js.map