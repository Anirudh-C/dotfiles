/**
 * Application options weather setting
 */
/**
 * Display current weather location
 */
function displayWeatherLocation() {
    var $weatherLocationDescription = $("#options-settings-weather-location-description");
    var $weatherLocationText = $("#options-settings-weather-location-text");
    var $weatherLocationInput = $("#options-settings-weather-location-input");
    var $weatherLocationInputField = $("#weather-location");
    
    getLastLocationWeather(function (locationWeather) {
        var $locationText = "";
        if (locationWeather) {
            //console.info(locationWeather);
            
            $locationText += locationWeather.location.city;
            
            if(locationWeather.location.area && locationWeather.location.countrycode){
                $locationText += " (" + locationWeather.location.area + "), " + locationWeather.location.countrycode;
            }else if (locationWeather.location.country){
                $locationText += ", " + locationWeather.location.country;
            }
            
        }
        else {
            $locationText = translate("options_settings_weather_location_unknown");
        }
        
        //console.info($locationText);
        
        $weatherLocationDescription.text($locationText);
    });
    $(document).on("click", "#options-settings-weather-location-change", function (e) {
        e.preventDefault();
        
        $weatherLocationText.fadeOut("fast", function () {
            $weatherLocationInput.fadeIn("fast");
        });
        
        weatherAnimation('off');
    });
    $(document).on("click", "#options-settings-weather-location-cancel", function (e) {
        e.preventDefault();
        endEditWeatherLocation();
    });
    $("#weather-location-current-img").on("click", onClientPlaceCurrentClick);
    $("#options-settings-weather-location-form").on("submit", function (e) {
        e.preventDefault();
        confirmClientPlaceSettings($weatherLocationInputField, false);
    });
}

function confirmClientPlaceSettings($el, placeByKey, fullPlace) {
    if (typeof WeatherSuggest == "object" && WeatherSuggest.state.cursor.cur && !placeByKey) return;
    
    var val = $el.val().trim();
    
    if (val || placeByKey) {
        if (AUTH && AUTH.isPremium()) { //For premium /*weather on*/
            if (!placeByKey) searchPlaceByDirectInputAccuweather(val, updateWeatherLocation);
            else searchPlaceByDirectInputAccuweather(placeByKey, updateWeatherLocation, true);
        }
        else {
            WEATHER.openweather.getPlace(fullPlace.data.GeoPosition.Latitude+","+fullPlace.data.GeoPosition.Longitude, updateWeatherLocation, fullPlace);

            /* Task #1969
            if (!placeByKey) {
                BRW_getAcceptLanguages(function (languages) {
                    var hasRuLanguage = languages.indexOf("ru") != -1;
                    if (hasRuLanguage) searchPlaceByDirectInputYandex(val, updateWeatherLocation);
                    else searchPlaceByDirectInput(val, updateWeatherLocation);
                });
            }
            else {
                searchPlaceByDirectInput(placeByKey, updateWeatherLocation, true);
            }
            */
        }

        if(fullPlace && typeof fullPlace == "object"){
            var data = {
                coords:{
                    accuracy : 45,
                    latitude : fullPlace.data.GeoPosition.Latitude,
                    longitude: fullPlace.data.GeoPosition.Longitude,
                },
                data: {
                    LocalizedName: fullPlace.data.LocalizedName
                }
            };
            
            setSettingsValue("location-weather-geo", JSON.stringify(data));
        }
    }
    else {
        endEditWeatherLocation();
    }
    weatherAnimation('on');
}
/**
 * Client place current click
 *
 * @param e Event
 */
function onClientPlaceCurrentClick(e) {
    e.preventDefault();
    weatherAnimation('on');
    getCurrentLocation();
}
/**
 * Get client current location
 */
function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(function (geo) {
        getLocationWeather(geo);

        var data = {
            coords:{
                accuracy : geo.coords.accuracy,
                latitude : geo.coords.latitude,
                longitude: geo.coords.longitude,
            }
        };
        
        setSettingsValue("location-weather-geo", JSON.stringify(data));

    }, function (e) {
        getLocationError(e)
    });
    
    localStorage.setItem('weather-last-update', Date.now());
}
/**
 * Get client current location error
 *
 * @param e Error
 */
function getLocationError(e) {
    var $locationBtn = $("#weather-location-current-img");
    var $locationBlock = $("#weather-location-current-block-text");
    if ($locationBtn.hasClass("btn-info")) {
        $locationBtn.addClass("btn-warning");
        $locationBtn.removeClass("btn-info");
        var $locationIcon = $locationBtn.find("span");
        $locationIcon.removeClass("glyphicon-map-marker").addClass("glyphicon-ban-circle");
        $locationBtn.off("click", onClientPlaceCurrentClick).on("click", function (e) {
            e.preventDefault();
            if (!$locationBlock.is(":visible")) $locationBlock.fadeIn();
        });
        $locationBtn.attr("title", translate("options_settings_weather_location_block"));
        $locationBlock.fadeIn();
    }
    weatherAnimation('off');
}
/**
 * Get location weather by client coordinates
 *
 * @param geo Object
 */
function getLocationWeather(geo) {
    if (AUTH && AUTH.isPremium()) { //For premium /*weather on*/
        //console.log(locationWeather);
        if (geo) {
            //Get location
            getPlaceWeatherAccuweather(geo, updateWeatherLocation);
        }
        else {
            if (!locationWeather.location.key) {
                getCurrentLocation();
            }
            else {
                //Weather
                getWeatherAccuweather(locationWeather.location.key, locationWeather.location, updateWeatherLocation);
            }
        } //else
    }
    else { //Free weather
        //BRW_getAcceptLanguages(function (languages) {
        //    var hasRuLanguage = languages.indexOf("ru") != -1;
            if (geo) {
                /* Task #1969
                if (hasRuLanguage) getPlaceWeatherYandex(geo, updateWeatherLocation);
                else getPlaceWeather(geo.coords.latitude + "," + geo.coords.longitude, updateWeatherLocation);
                */
                WEATHER.openweather.getPlace(geo.coords.latitude+","+geo.coords.longitude, updateWeatherLocation, geo);
            }
            else {
                getLastLocationWeather(function (locationWeather) {
                    if (typeof (locationWeather['source']) != "undefined") {
                        if (locationWeather.source == locationWeatherSourceYandex) getWeatherYandex(locationWeather.location.woeid, locationWeather.location, updateWeatherLocation);
                        else getWeather(locationWeather.location.woeid, locationWeather.location, updateWeatherLocation);
                    }
                    else {
                        getWeather(locationWeather.location.woeid, locationWeather.location, updateWeatherLocation);
                    }
                });
            }
        //});
    }
}
/**
 * Display client weather location
 *
 * @param locationWeather Object
 */
function updateWeatherLocation(locationWeather) {
    if (locationWeather) {
        var locationText = "";
        locationText += locationWeather.location.city;
        
        if(locationWeather.location.area && locationWeather.location.countrycode){
            locationText += " (" + locationWeather.location.area + "), " + locationWeather.location.countrycode;
        }else if (locationWeather.location.country){
            locationText += ", " + locationWeather.location.country;
        }
        
        $(".weather-unit-item").removeAttr("checked");
        if (locationWeather.unit) $(".weather-unit-item[data-weather-unit=" + locationWeather.unit + "]").prop('checked', true);
        $("#options-settings-weather-location-description").text(locationText);
        
        //console.info(locationText);
        
        endEditWeatherLocation();
        getNetTabPages(reloadTabPages);
        BRW_TabsGetCurrentID(function (tab) {
            getSettingsTabPages(reloadTabPages, {
                skipTab: (typeof tab == "object" ? tab.id : tab)
            });
        });
    }
    else {
        endEditWeatherLocation();
    }
}
/**
 * Cancel edit weather location
 */
function endEditWeatherLocation() {
    weatherAnimation('off');
    var $weatherLocationText = $("#options-settings-weather-location-text");
    var $weatherLocationInput = $("#options-settings-weather-location-input");
    var $weatherLocationInputField = $("#weather-location");
    var $locationBlock = $("#weather-location-current-block-text");
    if ($locationBlock.is(":visible")) $locationBlock.fadeOut("fast");
    $weatherLocationInput.fadeOut("fast", function () {
        $weatherLocationText.fadeIn("fast", function () {
            $weatherLocationInputField.val("");
        });
    });
}

weatherAnimationTimeout = false;
function weatherAnimation(state) {
    if (!state) state = "off";
    $wrap = $("#weather-block-wrap");
    clearTimeout(weatherAnimationTimeout);
    
    if (state == "on") {
        $wrap.addClass("loading");
    }
    else {
        weatherAnimationTimeout = setTimeout(()=>{
            $wrap.removeClass("loading");
        }, 500);
    }
}