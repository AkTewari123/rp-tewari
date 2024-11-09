async function getData() {
  const response = await fetch("./js/data.csv");
  const data = await response.text();
  console.log(data);

  const xSeconds = [];
  const controlBefore = [];
  const controlAfter = [];
  const tenMaBefore = [];
  const tenMaAfter = [];

  const table = data.split("\n").slice(1);
  console.log(table);

  table.forEach((row) => {
    const columns = row.split(",");
    const second = parseFloat(columns[0]);
    const ethControlBefore = parseFloat(columns[1]);
    const ethControlAfter = parseFloat(columns[2]);
    const ethTenMaBefore = parseFloat(columns[3]);
    const ethTenMaAfter = parseFloat(columns[4]);
    xSeconds.push(second);
    controlBefore.push(ethControlBefore);
    controlAfter.push(ethControlAfter);
    tenMaBefore.push(ethTenMaBefore);
    tenMaAfter.push(ethTenMaAfter);
    console.log(second, ethControlBefore);
  });
  return { xSeconds, controlBefore, controlAfter, tenMaBefore, tenMaAfter };
}

async function createChart() {
  const data = await getData();
  const lineChart = document.getElementById("lineChart").getContext("2d");
  const degreeSymbol = String.fromCharCode(176);

  const myChart = new Chart(lineChart, {
    type: "line",
    data: {
      labels: data.xSeconds,
      datasets: [
        {
          label: `Control Group Before 48 hour period`,
          data: data.controlBefore,
          fill: false,
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Control Group After 48 hours period",
          data: data.controlAfter,
          fill: false,
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "10mA Group Before 48 hour period",
          data: data.tenMaBefore,
          fill: false,
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 1,
        },
        {
          label: "10mA Group After 48 hour period",
          data: data.tenMaAfter,
          fill: false,
          borderColor: "#4f46e5",
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Ethanol Concentration (%) Vs. Time (Seconds)",
          font: {
            size: 20,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Seconds",
            font: {
              size: 16,
            },
          },
          ticks: {
            callback: function (value, index, values) {
              return index % 5 === 0 ? this.getLabelForValue(value) : null;
            },
          },
        },
        y: {
          title: {
            display: true,
            text: "Ethanol Concentration (%)",
            font: {
              size: 16,
            },
          },
        },
      },
    },
  });
}

createChart();
