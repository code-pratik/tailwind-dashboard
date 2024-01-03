const sliderBtn = document.getElementById("sliderBtn");
const sliderCloseBtn = document.getElementById("sliderCloseBtn");
const aside = document.getElementById("aside");
const main = document.getElementById("main1");

sliderBtn.addEventListener("click", () => {
  aside.setAttribute("style", "transform: translateX(0px)");
  sliderBtn.style.visibility = "hidden";
  sliderCloseBtn.style.display = "block";
  main.setAttribute("style", "position: fixed");
});

sliderCloseBtn.addEventListener("click", () => {
  aside.setAttribute("style", "transform: translateX(-380px)");
  sliderBtn.style.visibility = "visible";
  main.removeAttribute("style", "position: fixed");
});

let options = {
  series: [
    {
      data: [5, 28, 95, 4, 2, 69, 47, 15, 96, 24],
    },
  ],
  chart: {
    toolbar: {
      show: false,
    },
    height: 67,
    padding: 0,
    type: "area",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#90E2DC"],
  stroke: {
    curve: "smooth",
    width: 4,
  },
  title: {
    text: "",
    align: "left",
  },
  grid: {
    show: false,
    padding: {
      top: -20,
      bottom: -15,
      left: 0,
      right: 0,
    },
  },

  legend: {
    show: false,
  },
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

let chart = new ApexCharts(document.querySelector("#chart1"), options);
let chart2 = new ApexCharts(document.querySelector("#chart2"), {
  ...options,
  colors: ["#4C51BF"],
});
chart.render();
chart2.render();

let options3 = {
  series: [
    {
      name: "Series1",
      data: [
        538, 462, 480, 804, 836, 280, 387, 991, 870, 198, 922, 494, 770, 474,
        578, 778, 476, 392, 662, 97,
      ],
    },
  ],
  chart: {
    toolbar: {
      show: false,
    },
    height: 450,
    type: "bar",
    zoom: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#58aca0"],

  title: {
    text: "",
    align: "left",
  },
  grid: {
    show: false,
    padding: {
      top: -20,
      bottom: -15,
      left: 0,
      right: 0,
    },
  },

  legend: {
    show: false,
  },
  xaxis: {
    show: false,
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
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  // chart: {
  //   toolbar: { // Hamburger menu at top
  //     show: false,
  //   },
  //   height: 350,
  //   padding:0,
  //   type: 'bar',
  //   zoom: {
  //     enabled: false,
  //   },
  // },
  // plotOptions: {
  //   bar: {
  //     columnWidth: '60%'
  //   }
  // },
  // colors: ['#58aca0'],
  // dataLabels: {
  //   enabled: false
  // },
  //   grid: {
  //   show: false,
  //   padding: {
  //       top: -20,
  //       bottom: -15,
  //       left:0 ,
  //       right:0
  //     },
  // },
  // xaxis: {
  //   show: false,
  //   labels: {
  //     show: false,
  //   },
  //   axisBorder: {
  //     show: false,
  //   },
  //   axisTicks: {
  //     show: false,
  //   },
  //   crosshairs: {
  //     show: false,
  //   },
  //   tooltip: {
  //     enabled: false,
  //   },
  // },
  // yaxis: {
  //   show: false,
  //   labels: {
  //     show: false,
  //   },
  //   // axisBorder: {
  //   //   show: false,
  //   // },
  //   crosshairs: {
  //     show: false,
  //   },
  // },
};

let chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();
