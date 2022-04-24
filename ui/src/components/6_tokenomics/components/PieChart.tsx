import { defineComponent, onMounted, ref, watch } from "vue";
import { Chart, ChartItem, DoughnutController, ArcElement, ChartEvent, ActiveElement, Tooltip } from "chart.js";
import "../styles/PieChart.scss";

let tokenChart: Chart;
const ChartCanvas = ref(null);

function drawChart(activeIndex?: number, onHover?: (evt: ChartEvent, elements: ActiveElement[]) => void) {
  if (!tokenChart) {
    Chart.register({ DoughnutController, ArcElement, Tooltip });
  } else {
    tokenChart.destroy();
  }

  if (!ChartCanvas.value) {
    console.log("no canvas element", ChartCanvas.value);
    return;
  }

  tokenChart = new Chart((ChartCanvas.value as ChartItem), {
    type: 'doughnut',
    data: {
      labels: [
        'Exchange and public offering',
        'Ecosystem',
        'Adviser',
        'Game rewards',
        'Community',
        'Market',
        'Team',
        'Private placement',
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [10, 10, 3, 40, 7, 5, 10, 15],
        backgroundColor: "rgba(6, 15, 18, 1)",
        borderWidth: 3,
        borderColor: "rgb(92, 105, 248)",
        hoverBackgroundColor: "rgba(147, 211, 255, 0.3)",
        // hoverOffset: 3
      }]
    },
    options: {
      animation: {
        duration: 1
      },
      plugins: {
        legend: {
          display: true,
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem: any) {
              return tooltipItem.label + ':' + tooltipItem.formattedValue + '%';
            }
          }
        },
      },
      onHover
    },
  });

  (activeIndex && !isNaN(activeIndex)) && tokenChart.setActiveElements([{ datasetIndex: 0, index: activeIndex }]);
}

export default defineComponent({
  props: ["activeIndex", "onHover"],
  setup(props) {
    let noNeedDrawChart = false;

    function onHover(evt: ChartEvent, elements: ActiveElement[]) {
      if (!elements || !elements.length) return;
      props.onHover(elements[0].index);
      noNeedDrawChart = true;
    }

    onMounted(() => {
      drawChart(props.activeIndex, onHover);
      console.log("!!!!", tokenChart);
    });
    watch(props.activeIndex, (newIndex: number) => {
      !noNeedDrawChart && drawChart(newIndex, onHover)
      noNeedDrawChart = false;
    });

    return () => <div class="pie-chart-wrapper">
      <div class="chart-container">
        <canvas ref={ ChartCanvas }></canvas>
      </div>
      <div class="logo-container">
        <img src="/images/TokenomicsPieChart/Logo.png" alt="" srcset="/images/TokenomicsPieChart/Logo@2x.png 2x,/images/TokenomicsPieChart/Logo@3x.png 3x" />
      </div>
    </div>
  }
});
