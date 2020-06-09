//build doughnut chart
var ctx2 = document.getElementById('myChart2');
var myChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Sales', 'Upsells', 'Cancellations'],
        datasets: [{
            data: [12, 7, 2],
            backgroundColor: [
                'rgb(30, 128, 5, 0.4)',
                'rgb(52, 100, 151, 0.4)',
                'rgb(145, 0, 0, 0.4)'
            ],
            borderColor: [
                'rgb(30, 128, 5)',
                'rgb(52, 100, 151)',
                'rgb(145, 0, 0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: '# of Units',
            fontSize: 20
        }
    }
});


//build bar chart
var ctx3 = document.getElementById('myChart3');
var myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Sales', 'Upsells', 'Cancellations'],
        datasets: [{
            data: [12000, 3500, 2000],
            backgroundColor: [
                'rgb(30, 128, 5, 0.4)',
                'rgb(52, 100, 151, 0.4)',
                'rgb(145, 0, 0, 0.4)'
            ],
            borderColor: [
                'rgb(30, 128, 5)',
                'rgb(52, 100, 151)',
                'rgb(145, 0, 0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Total Value',
            fontSize: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        }
    }
});



//get stock market info last 5 days [WIP2]
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts?comparisons=%255EGSPC%252C%255EIXIC&region=US&lang=en&symbol=%255EDJI&interval=1d&range=5d",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "20a7b8dd31msh6fc07efc4888c70p1c97adjsn89be696b126f"
	}
}

$.ajax(settings).done(function (response) {
    $('.lds-spinner').hide();

    // IN ORDER TO EXPAND THE GRAPH, I WILL NEED TO CHANGE THE 5D RANGE TO 1MO
    
    //DOW
    var oneDayAgoA = response.chart.result[0].indicators.quote[0].close[3];
    var twoDaysAgoA = response.chart.result[0].indicators.quote[0].close[2];
    var threeDaysAgoA = response.chart.result[0].indicators.quote[0].close[1];
    var fourDaysAgoA = response.chart.result[0].indicators.quote[0].close[0];

    //S&P 500
    var oneDayAgoB = response.chart.result[0].comparisons[0].close[3];
    var twoDaysAgoB = response.chart.result[0].comparisons[0].close[2];
    var threeDaysAgoB = response.chart.result[0].comparisons[0].close[1];
    var fourDaysAgoB = response.chart.result[0].comparisons[0].close[0];

    //Nasdaq
    var oneDayAgoC = response.chart.result[0].comparisons[1].close[3];
    var twoDaysAgoC = response.chart.result[0].comparisons[1].close[2];
    var threeDaysAgoC = response.chart.result[0].comparisons[1].close[1];
    var fourDaysAgoC = response.chart.result[0].comparisons[1].close[0];
    
    // Chart.js setup (stock market graph)
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['4 Days Ago', '3 Days Ago', '2 Days Ago', 'Yesterday'],
            datasets: [{
                label: 'Dow Jones Industrial',
                borderColor: 'rgb(23, 80, 139)',
                backgroundColor: 'rgb(23, 80, 139, .28)',
                pointRadius: 8,
                pointBackgroundColor: 'rgb(255, 255, 255)',
                pointBorderWidth: 2,
                data: [oneDayAgoA, twoDaysAgoA, threeDaysAgoA, fourDaysAgoA]
            }, {
                label: 'S&P 500',
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgb(255, 99, 132, .28)',
                pointRadius: 8,
                pointBackgroundColor: 'rgb(255, 255, 255)',
                pointBorderWidth: 2,
                data: [oneDayAgoB, twoDaysAgoB, threeDaysAgoB, fourDaysAgoB],
                hidden: true
            }, {
                label: 'Nasdaq',
                borderColor: 'rgb(30, 128, 5)',
                backgroundColor: 'rgb(30, 128, 5, .28)',
                pointRadius: 8,
                pointBackgroundColor: 'rgb(255, 255, 255)',
                pointBorderWidth: 2,
                data: [oneDayAgoC, twoDaysAgoC, threeDaysAgoC, fourDaysAgoC],
                hidden: true
            }]
        },

        // Configuration options go here
        options: {
		maintainAspectRatio: false
        }
    });
});

//bar chart (3-box section)
var ctx5 = document.getElementById('myChart5');
var myChart3 = new Chart(ctx5, {
    type: 'horizontalBar',
    data: {
        labels: ['Employee #1', 'Employee #2', 'Employee #3', 'Employee #4', 'Employee #5'],
        datasets: [{
            data: [21, 32, 40, 25, 29],
            backgroundColor: [
                'rgb(105, 29, 98, 0.4)',
                'rgb(52, 100, 151, 0.4)',
                'rgb(145, 0, 0, 0.4)',
                'rgb(30, 128, 5, 0.4)',
                'rgb(198, 91, 124, 0.4)'
            ],
            borderColor: [
                'rgb(105, 29, 98)',
                'rgb(52, 100, 151)',
                'rgb(145, 0, 0)',
                'rgb(30, 128, 5)',
                'rgb(198, 91, 124)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: false,
        },
        scales: {
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    suggestedMin: 10
                },
                display: false
            }],
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                display: false
            }],
        },
        legend: {
            display: false
        }
    }
});

//line chart (3-box section)
var ctx4 = document.getElementById('myChart4').getContext('2d');
    var chart = new Chart(ctx4, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                label: '',
                borderColor: 'rgb(28, 147, 136)',
                backgroundColor: 'rgb(28, 147, 136, .28)',
                pointRadius: 8,
                pointBackgroundColor: 'rgb(255, 255, 255)',
                pointBorderWidth: 2,
                data: [6, 9, 5, 7, 4, 5, 8]
            }]
        },

        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    display: false
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    display: false,
                    ticks: {
                        suggestedMin: 3,
                        max: 11
                    }
                }]
            }
        }
    });


    //polar chart (3-box section)
var ctx6 = document.getElementById('myChart6').getContext('2d');
var chart = new Chart(ctx6, {
    // The type of chart we want to create
    type: 'polarArea',

    // The data for our dataset
    data: {
        labels: ['', '', '', '', ''],
        datasets: [{
            data: [21, 32, 40, 25, 29],
            backgroundColor: [
                'rgb(198, 91, 124, 0.4)',
                'rgb(52, 100, 151, 0.4)',
                'rgb(145, 0, 0, 0.4)',
                'rgb(30, 128, 5, 0.4)',
                'rgb(105, 29, 98, 0.4)'
            ],
            borderColor: [
                'rgb(198, 91, 124)',
                'rgb(52, 100, 151)',
                'rgb(145, 0, 0)',
                'rgb(30, 128, 5)',
                'rgb(105, 29, 98)'
            ],
            borderWidth: 1
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                display: false
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                display: false,
                ticks: {
                    suggestedMin: 3,
                    max: 11
                }
            }]
        }
    }
});




