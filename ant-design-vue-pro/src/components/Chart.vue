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
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
          name: 'Volumn',
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