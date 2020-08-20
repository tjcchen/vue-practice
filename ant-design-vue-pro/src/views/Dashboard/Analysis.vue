<template>
  <div class="analysis">
    <Chart :option="chartOption" style="height: 400px;" />
  </div>
</template>

<script>
// import random from "lodash/random";
import axios from "axios";
import Chart from "@/components/Chart";

export default {
  data() {
    return {
      chartOption: {}
    }
  },
  methods: {
    getChartData() {
      axios.get("/api/dashboard/chart", { params: { ID: 12345 } }).then(response => {
        this.chartOption = {
          title: {
              text: 'ECharts Demo'
          },
          tooltip: {},
          xAxis: {
              data: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6']
          },
          yAxis: {},
          series: [{
              name: 'Volume',
              type: 'bar',
              data: response.data
              // data: [5, 20, 36, 10, 10, 20]
          }]
        };
      });
    }
  },
  mounted() {
    // Retrieve chart data
    this.getChartData();

    // Chart data options will be changing at interval
    this.interval = setInterval(() => {
      // this.chartOption.series[0].data = this.chartOption.series[0].data.map(() => {
      //   return random(100);
      // });

      // // [Important: ]
      // // There are two solutions to monitor option changes
      // // Solution1: reassign new chartOption to the old one
      // // solution2: use deep watch monitoring, but such an option is expensive
      // this.chartOption = { ...this.chartOption };

      this.getChartData();
    }, 3000);
  },
  beforeDestroy () {
    clearInterval(this.interval);
  },
  components: {
    Chart
  }
};
</script>

<style scoped></style>