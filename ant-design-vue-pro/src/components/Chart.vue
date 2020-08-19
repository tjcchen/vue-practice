<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";

export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    // When an option attribute changes, it will not trigger this function
    // There a deep monitoring is needed
    option(val) {
      this.chart.setOption(val);
    },

    // Deep option monitoring
    // option: {
    //   handler(val) {
    //     this.chart.setOption(val);
    //   },
    //   deep: true
    // }
  },
  created () {
    // Avoid constantly resizing
    this.resize = debounce(this.resize, 300);
  },
  mounted () {
    // Render chart to the page
    this.renderChart();

    // Monitor chartDom resize event
    addListener(this.$refs.chartDom, this.resize);
  },
  beforeDestroy () {
    // Remove chartDom event and eliminate object
    removeListener(this.$refs.chartDom, this.resize);

    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    resize() {
      console.log('resize');
      this.chart.resize();
    },
    renderChart() {
      // Initialize echarts DOM instance
      this.chart = echarts.init(this.$refs.chartDom);

      // Set chart options from component arguments
      this.chart.setOption(this.option);
    }
  }
}
</script>

<style>
</style>