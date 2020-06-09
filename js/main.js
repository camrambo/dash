//sidebar toggle
$('.xToggle').click(function(){
    $('.appSidebar').toggleClass('shrink', 1000, 'easeInQuad');
    $('.appBody').toggleClass('shrink', 1000, 'easeInQuad');
});


//Change the dashboard nodes based on nav option selected
//My Dashboard (show all)
$('.mainDash').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.dn0').show()
    $('.dn1').show();
    $('.dn2').show();
    $('.dn4').show();
    $('.dn5').show();
    $('.dn6').show();
    $('.dnWide').show();
    $('.dn7').show();
    $('.dn8').show();
    $('.nodeWrapper').show();
    $('.settingsPage').hide();
});
//Finance
$('.financeDash').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.dn0').show()
    $('.dn1').hide();
    $('.dn2').hide();
    $('.dn4').hide();
    $('.dn5').hide();
    $('.dn6').hide();
    $('.dnWide').hide();
    $('.dn7').show();
    $('.dn8').show();
    $('.nodeWrapper').hide();
    $('.settingsPage').hide();
});
//Productivity
$('.prodDash').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.dn0').hide()
    $('.dn1').show();
    $('.dn2').show();
    $('.dn4').show();
    $('.dn5').show();
    $('.dn6').show();
    $('.dnWide').hide();
    $('.dn7').hide();
    $('.dn8').hide();
    $('.nodeWrapper').show();
    $('.settingsPage').hide();
});
//Our Team
$('.teamDash').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.dn0').hide()
    $('.dn1').show();
    $('.dn2').show();
    $('.dn4').hide();
    $('.dn5').hide();
    $('.dn6').hide();
    $('.dnWide').show();
    $('.dn7').hide();
    $('.dn8').hide();
    $('.nodeWrapper').show();
    $('.settingsPage').hide();
});
//Settings
$('.settingsDash').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.dn0').hide()
    $('.dn1').hide();
    $('.dn2').hide();
    $('.dn4').hide();
    $('.dn5').hide();
    $('.dn6').hide();
    $('.dnWide').hide();
    $('.dn7').hide();
    $('.dn8').hide();
    $('.nodeWrapper').hide();
    $('.settingsPage').show();
});
//Settings - Change between themes depending on selected button
//Default Theme
$('.defaultTheme').click(function() {
    $('.headingSide').css("background", "#346497");
    $('.headingMain').css("background", "#17508b");
    $('.appSidebar').css("background", "#222222");
    $('.appBody').css("background-color", "#f1f4f6");
});

//Secondary Theme
$('.secondaryTheme').click(function() {
    $('.headingSide').css("background", "#C65B7C");
    $('.headingMain').css("background", "#F9627D");
    $('.appSidebar').css("background", "#5b3758");
    $('.appBody').css("background-color", "#f9ada03d");
});


//Show Stats Box
$('.btnStats').toggle(function () {
    $(".graphWrap").addClass("active");
    $('.goalBox').hide();
}, function () {
    $(".graphWrap").removeClass("active");
});


//Show Goals Box
$('.btnGoals').click(function() {
    $('.goalBox').toggle()
    $('.graphWrap').hide();
});


//grab top news stories from news api
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://bloomberg-market-and-financial-news.p.rapidapi.com/stories/list?template=CURRENCY&id=usdjpy",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "bloomberg-market-and-financial-news.p.rapidapi.com",
        "x-rapidapi-key": "20a7b8dd31msh6fc07efc4888c70p1c97adjsn89be696b126f"
    }
}

$.ajax(settings).done(function (response) {
    //Grab 5 stories
    for (var i = 0; i < 5; i++) {
        var NewsTitles = response.stories[i].title;
        var NewsLinks = response.stories[i].longURL;
        // var NewsDescription = parsedDataFour.articles[i].description;
        // $('.newsBox').append('<a href="' + NewsLinks + '" target="_blank"><div class="newsCard"><div class="cardBody"><h4 class="cardTitle">' + NewsTitles + '</h4></div><div class="cardText">' + NewsDescription + '</div></div></a>');
        $('.newsBox').append('<a href="' + NewsLinks + '" target="_blank"><div class="newsCard"><div class="cardBody"><h4 class="cardTitle">' + NewsTitles + '</h4></div></div></a>');
    };
});



//get current weather data from open weather api
var requestTwo = new XMLHttpRequest();
requestTwo.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=draper,utah&appid=88049e9fbd71684e2371cb55502349e3&units=imperial');
requestTwo.onload = function() {
    var response = requestTwo.response;
    var parsedData = JSON.parse(response);
    var cityName = parsedData.name;
    var currentTemp = parsedData.main.temp;
    var currentTempSimp = Math.trunc(currentTemp) + '\xB0';
    var weatherType = parsedData.weather[0].main;
    var iconCode = parsedData.weather[0].id;
    $('.weatherBox').append('<div class="cityBox">' + cityName + '</div><div class="tempBox">' + '<i class="wi wi-owm-' + iconCode + '"></i>' + currentTempSimp + '</div><div class="typeBox">' + weatherType + '</div>');

};
requestTwo.send();


//get 3 day forecast from Accuweather (Open Weather's Free API key did not allow for proper forecasting)
var requestThree = new XMLHttpRequest();
requestThree.open('GET', 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/2195948?apikey=Kp5RXPKo6ihAsy7vMmGN7I1l7gXJjLUa');
requestThree.onload = function() {
    var response = requestThree.response;
    var parsedData = JSON.parse(response);
    var dayOne = parsedData.DailyForecasts[1];
    var dayTwo = parsedData.DailyForecasts[2];
    var dayThree = parsedData.DailyForecasts[3];

    var maxTempOne = Math.trunc(dayOne.Temperature.Maximum.Value) + '\xB0';
    var maxTempTwo = Math.trunc(dayTwo.Temperature.Maximum.Value) + '\xB0';
    var maxTempThree = Math.trunc(dayThree.Temperature.Maximum.Value) + '\xB0';

    var minTempOne = Math.trunc(dayOne.Temperature.Minimum.Value) + '\xB0';
    var minTempTwo = Math.trunc(dayTwo.Temperature.Minimum.Value) + '\xB0';
    var minTempThree = Math.trunc(dayThree.Temperature.Minimum.Value) + '\xB0';

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var x = weekday[d.getDay()+1];
    var y = weekday[d.getDay()+2];
    var z = weekday[d.getDay()+3];

    $('.fcOne').append('<div class="dayName">' + x + '</div><div class="tempForecasts">' + maxTempOne + ' / ' + minTempOne + '</div><div class="tempLabel">High / Low</div>');
    $('.fcTwo').append('<div class="dayName">' + y + '</div><div class="tempForecasts">' + maxTempTwo + ' / ' + minTempTwo + '</div><div class="tempLabel">High / Low</div>');
    $('.fcThree').append('<div class="dayName">' + z + '</div><div class="tempForecasts">' + maxTempThree +  ' / ' + minTempThree + '</div><div class="tempLabel">High / Low</div>');

};
requestThree.send();


//customize modal for each employee
$('.empModal').click(function() {
    var pic4Modal = $(this).find('.userPIC').html();
    $('.ePic').html(pic4Modal);
    
    var name4Modal = $(this).find('.userNAME').text();
    $('.eName').text(name4Modal);

    var pos4Modal = $(this).find('.userPOS').text();
    $('.ePos').text(pos4Modal);

    var ext4Modal = $(this).find('.userEXT').text();
    $('.eExt').text(ext4Modal);
});
