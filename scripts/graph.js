HACKATON.graph = (function(){
    var simulationData = [
        [Date.UTC(2017,6,1,12,30,30), 0.7695, 'Mi papa'],
        [Date.UTC(2017,6,1,12,30,31), 0.575, 'bebia'],
        [Date.UTC(2017,6,1,12,30,32), 0.6645, 'Demasiado'],
        [Date.UTC(2017,6,1,12,30,33), 0.3626, 'Siempre'],
        [Date.UTC(2017,6,1,12,30,34), 0.1644, 'Siempre'],
        [Date.UTC(2017,6,1,12,30,35), -0.0044, 'Llegaba a'],
        [Date.UTC(2017,6,1,12,30,36), -0.1645, 'Gritar y golpear'],
        [Date.UTC(2017,6,1,12,30,37), 0, '...'],
        [Date.UTC(2017,6,1,12,30,38), 0, '...'],
        [Date.UTC(2017,6,1,12,30,39), 0, '...'],
        [Date.UTC(2017,6,1,12,30,40), 0, '...'],
        [Date.UTC(2017,6,1,12,30,41), 0, '...'],
        [Date.UTC(2017,6,1,12,30,42), 0.5645, "¿Por que?"],
        [Date.UTC(2017,6,1,12,30,43), 0.7645, '¿Por que no hice nada?'],
        [Date.UTC(2017,6,1,12,30,44), 0.9645, 'Yo tengo la culpa'],
    ];


    var _initVars = function _initVars(){

        Highcharts.chart('containerGraph', {
            chart: {
                zoomType: 'x',
                style: {
                    fontFamily: 'Roboto'
                }
            },
            title: {
                text: 'Analisis de terapia'
            },
            subtitle: {
            },
            xAxis: {
                type: 'datetime',
                tickOptions: {
                    formatString: '$%.2f'
                }
            },
            yAxis: {
                title: {
                    text: 'Intensidad de voz (db)'
                },
                tickPositioner: function () {
                    var maxDeviation = Math.ceil(Math.max(Math.abs(this.dataMax), Math.abs(this.dataMin)));
                    var halfMaxDeviation = Math.ceil(maxDeviation / 2);
                    return [-maxDeviation, -halfMaxDeviation, 0, halfMaxDeviation, maxDeviation];
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#406ad2'],
                            [1, '#74b0ec']
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    animation: {
                        duration: 2000
                    },
                    threshold: null
                }
            },
            tooltip: {
                backgroundColor: '#FFFFFF',
                borderColor: 'black',
                borderRadius: 20,
                borderWidth: 0,
                formatter: function() {
                    return 'Intensidad de voz: <b>' + this.y + ' db</b><br/>' +
                        'Contexto: <b>'+ simulationData[this.series.data.indexOf( this.point )][2] +'</b>';
                }
            },

            series: [{
                type: 'area',
                name: 'Segundos',
                stacking: 'normal',
                borderWidth: 0,
                data: simulationData,
                pointStart: simulationData[0][0],
                pointInterval: 3600 * 1000
                // pointInterval: 24 * 3600 * 1000 // one day
            }],
            credits: {
                enabled: false
            }
        });
    };

    return {
        init: function init() {
            _initVars();
        }
    }
})();