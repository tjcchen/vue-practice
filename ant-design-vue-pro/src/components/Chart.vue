<template>
  <div ref="chartDom" style="height: 400px;"></div>
</template>

<script>
import echarts from "echarts";
import { addListener } from "resize-detector";

export default {
  mounted () {
    // Initialize echarts DOM instance
    this.chart = echarts.init(this.$refs.chartDom);

    // Monitor chartDom resize event
    addListener(this.$refs.chartDom, this.resize);

    // Set chart options
    this.chart.setOption({
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
          data: [5, 20, 36, 10, 10, 20]
      }]
    });
  },
  methods: {
    resize() {
      this.chart.resize();
    }
  }
}
</script>

<style>
</style>