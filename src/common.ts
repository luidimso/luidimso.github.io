const totalProjects:number = 8;

export const env = {
  chartOptions: {
    responsive: true,
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false
    },
    title: {
      display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                display: true,
                fontColor: "black",
                fontStyle: "bold",
                fontSize: 12,
                fontFamily: '"Flexo", Helvetica, Arial, sans-serif'
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                display: false,
                min: 0,
                max: totalProjects,
                callback: function (value:number) {
                  return (value / totalProjects * 100).toFixed(0) + '%';
                }
            }
        }]
    },
    hover: {
      animationDuration: 0
    },
    animation:{
      onComplete: function () {
        var chartInstance = this.chart,
        ctx = chartInstance.ctx;
        ctx.font = 'bold 1.2em "Flexo"';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillStyle = "#FFF";

        this.data.datasets.forEach(function (dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function (bar, index) {
                var data = (dataset.data[index] / totalProjects * 100).toFixed(0) + '%';
                ctx.fillText(data, bar._model.x, bar._model.y + 23);
            });
        });
      }
    }
  },




  chartOptionsMobile: {
    responsive: true,
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false
    },
    title: {
      display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                display: true,
                fontColor: "black",
                fontStyle: "bold",
                fontSize: 8,
                fontFamily: '"Flexo", Helvetica, Arial, sans-serif'
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                display: false,
                min: 0,
                max: totalProjects,
                callback: function (value:number) {
                  return (value / totalProjects * 100).toFixed(0) + '%';
                }
            }
        }]
    },
    hover: {
      animationDuration: 0
    },
    animation:{
      onComplete: function () {
        var chartInstance = this.chart,
        ctx = chartInstance.ctx;
        ctx.font = 'bold 0.7em "Flexo"';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillStyle = "#FFF";

        this.data.datasets.forEach(function (dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function (bar, index) {
                var data = (dataset.data[index] / totalProjects * 100).toFixed(0) + '%';
                ctx.fillText(data, bar._model.x, bar._model.y + 15);
            });
        });
      }
    }
  }
}
