/*====================
  chart js
======================*/

// dealchart chart
(function () {
  var dealchart = {
    series: [
      {
        name: "Sell",
        data: [18, 10, 70, 18, 28, 10],
      },
      {
        name: "Rent",
        data: [25, 50, 30, 30, 25, 45],
      },
    ],
    chart: {
      type: "bar",
      height: 230,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 6,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      borderColor: "var(--chart-border)",
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ["#FFA941", "var(--chart-theme)"],
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      tickAmount: 4,
      tickPlacement: "between",
      labels: {
        style: {
          fontFamily: "outfit, sans-serif",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      tickPlacement: "between",
      labels: {
        style: {
          fontFamily: "outfit, sans-serif",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "outfit, sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      markers: {
        width: 6,
        height: 6,
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
      },
    },
    responsive: [
      {
        breakpoint: 1639,
        options: {
          chart: {
            height: 250,
          },
        },
      },
      {
        breakpoint: 1400,
        options: {
          chart: {
            height: 235,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "80%",
            },
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "70%",
            },
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "70%",
            },
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "60%",
            },
          },
          grid: {
            padding: {
              right: 5,
            },
          },
        },
      },
    ],
  };
  // JObchart chart
  var chartdeal = new ApexCharts(document.querySelector("#dealChart"), dealchart);
  chartdeal.render();

  var options_earning = {
    series: [
      {
        data: [20, 40, 60, 20, 100, 60, 20, 80, 40, 10, 80, 100, 100],
      },
    ],
    chart: {
      type: "line",
      height: 158,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 20,
        color: "var(--chart-theme)",
        opacity: 0.5,
      },
    },
    grid: {
      show: true,
      borderColor: "var(--chart-border)",
      strokeDashArray: 6,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    stroke: {
      curve: "stepline",
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      min: 0,
      tickAmount: 5,
      tickPlacement: "between",
    },
    markers: {
      size: 3,
      colors: "var(--chart-white)",
      strokeColors: "#188aec",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      shape: "circle",
      offsetX: 2,
      offsetY: 2,
      radius: 2,
      hover: {
        size: 3,
      },
    },
    colors: ["#188aec"],

    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 122,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 160,
          },
        },
      },
    ],
  };

  var chart_earning = new ApexCharts(
    document.querySelector("#jobChart"),
    options_earning
  );
  chart_earning.render();
})();


