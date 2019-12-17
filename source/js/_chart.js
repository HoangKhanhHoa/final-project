/* eslint-disable no-unused-vars */
/* eslint-disable comma-spacing */

//- Init Sparkline Chart
$('#sparkline-1').sparkline('html', {
  type: 'line',
  pointDot: false,
  spotColor: false,
  minSpotColor: false,
  maxSpotColor: false,
  lineColor: '#4285f4',
  highlightLineColor: '#4285f4',
  highlightSpotColor: '#4285f4',
  fillColor: false,
  width: '85',
  height: '35',
  lineWidth: 1.15
});

$('#sparkline-2').sparkline('html', {
  type: 'bar',
  barColor: '#fbbc05',
  fillColor: false,
  highlightColor: '#fbbc05',
  width: '81',
  height: '35',
  barWidth: 3,
  barSpacing: 3,
  chartRangeMin: 0,
});

$('#sparkline-3').sparkline('html', {
  type: 'discrete',
  fillColor: false,
  width: '85',
  height: '35',
  lineHeight: 20,
  lineColor: '#007f00',
  highlightColor: '#007f00',
  xwidth: 18
});

$('#sparkline-4').sparkline('html', {
  type: 'line',
  lineColor: '#e12717',
  pointDot: false,
  spotColor: false,
  minSpotColor: false,
  maxSpotColor: false,
  fillColor: false,
  highlightSpotColor: '#e12717',
  width: '85',
  height: '35',
  lineWidth: 1.15
});

//- Function Init Pie Chart

function chartCircle(ele) {
  if ($(ele).length) {
    $.plot($('#top-sales'), [{
      label: 'Services',
      data: 33
    }, {
      label: 'Standard Plans',
      data: 33
    }, {
      label: 'Services',
      data: 33
    }],
    {
      series: {
        pie: {
          radius: .75,
          innerRadius: .58,
          show: !0,
          highlight: {
            opacity: .1
          },
          label: {
            show: !1
          }
        }
      },
      grid: {
        hoverable: !0
      },
      legend: {
        show: !1
      },
      colors: ['#34A853', '#FBBC05', '#4285F4']
    });
  }
}

//- Function Init CurvedLine Chart

function chartMain(ele) {
  if ($(ele).length) {
    $.plot($('#main-chart'), [{
      data: [
        [1, 35],
        [2, 60],
        [3, 40],
        [4, 65],
        [5, 45],
        [6, 75],
        [7, 35],
        [8, 40],
        [9, 60]
      ],
      label: 'Purchases',
    }, {
      data: [
        [1, 20],
        [2, 40],
        [3, 25],
        [4, 45],
        [5, 25],
        [6, 50],
        [7, 35],
        [8, 60],
        [9, 30]
      ],
      label: 'Plans',
    }, {
      data: [
        [1, 35],
        [2, 15],
        [3, 20],
        [4, 30],
        [5, 15],
        [6, 18],
        [7, 28],
        [8, 10],
        [9, 30]
      ],
      label: 'Services',
    }], {
        series: {
          lines: {
            show: !0,
            lineWidth: 0,
            fill: !0,
            fillColor: {
              colors: [{
                opacity: 1
              }, {
                opacity: 1
              }]
            }
          },
          fillColor: 'rgba(0, 0, 0, 1)',
          shadowSize: 0,
          curvedLines: {
            apply: !0,
            active: !0,
            monotonicFit: !0
          }
        },
        legend: {
          show: !1
        },
        grid: {
          show: !0,
          margin: {
            top: 20,
            bottom: 0,
            left: 0,
            right: 0
          },
          labelMargin: 0,
          minBorderMargin: 0,
          axisMargin: 0,
          tickColor: 'rgba(0,0,0,0.05)',
          borderWidth: 0,
          hoverable: !0,
          clickable: !0
        },
        tooltip: {
          show: !0,
          cssClass: 'tooltip-chart',
          content: '<div class=\'content-chart\'> <span> %s </span> <div class=\'label\'> <div class=\'label-x\'> %x.0 </div> - <div class=\'label-y\'> %y.0 </div> </div></div>',
          defaultTheme: !1
        },
        colors: ['#4386f4', '#81adf8', '#a2c3fa'],
        xaxis: {
          tickFormatter: function() {
            return ''
          },
          autoscaleMargin: 0,
          ticks: 11,
          tickDecimals: 0,
          tickLength: 0
        },
        yaxis: {
          tickFormatter: function() {
            return ''
          },
          ticks: 4,
          tickDecimals: 0
        }
      });

    $(ele).bind('plothover', function(event, pos, item) {
      var width = $('.tooltip-chart').width();
      if (item) {
        $('.tooltip-chart').css({
          top: item.pageY - 60,
          left: item.pageX - (width / 2),
        }).fadeIn(200);
      } else {
        $('.tooltip-chart').hide()
      }
    });
  }
}

//- Function Init Bar Chart

function chartBar(ele) {
  if ($(ele).length) {
    $.plot($('#bar-chart1'), [{
      label: 'Page Views',
      data: [
        [0, 7],
        [1, 13],
        [2, 17],
        [3, 20],
        [4, 26],
        [5, 37],
        [6, 35],
        [7, 28],
        [8, 38],
        [9, 38],
        [10, 32],
        [11, 25]
      ]
    }, {
      label: 'Unique Visitor',
      data: [
        [0, 15],
        [1, 10],
        [2, 15],
        [3, 25],
        [4, 30],
        [5, 29],
        [6, 25],
        [7, 33],
        [8, 45],
        [9, 43],
        [10, 38],
        [11, 36]
      ]
    }], {
      series: {
        bars: {
          order: 2,
          align: 'center',
          show: !0,
          barWidth: .3,
          lineWidth: .7,
          fill: !0,
          fillColor: {
            colors: [{
              opacity: 1
            }, {
              opacity: 1
            }]
          }
        },
        shadowSize: 2
      },
      legend: {
        show: !1
      },
      grid: {
        margin: 0,
        show: !1,
        labelMargin: 10,
        axisMargin: 500,
        hoverable: !0,
        clickable: !0,
        tickColor: 'rgba(0,0,0,0.15)',
        borderWidth: 0
      },
      tooltip: {
        show: !0,
        cssClass: 'tooltip-chart',
        content: '<div class=\'content-chart\'> <span> %s </span> <div class=\'label\'> <div class=\'label-x\'> %x.0 </div> - <div class=\'label-y\'> %y.0 </div> </div></div>',
        defaultTheme: !1
      },
      colors: ['#4386f4', '#acc9fa'],
      xaxis: {
        ticks: 11,
        tickDecimals: 0
      },
      yaxis: {
        ticks: 4,
        tickDecimals: 0
      }
    })

    $(ele).bind('plothover', function(event, pos, item) {
      var width = $('.tooltip-chart').width();
      if (item) {
        $('.tooltip-chart').css({
          top: item.pageY - 60,
          left: item.pageX - (width / 2),
        }).fadeIn(200);
      } else {
        $('.tooltip-chart').hide()
      }
    });
  }
}
