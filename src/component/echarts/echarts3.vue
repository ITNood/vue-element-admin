<template>
  <div>
    <div id="echarts3"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "Echarts3",
  data() {
    return {};
  },
  mounted() {
    let myChart = echarts.init(document.getElementById("echarts3"));
    const option = {
      backgroundColor: "#fff",
      title: {
        text: "南丁格尔玫瑰图",
        x: "center"
      },
      color: [
        "#0F74F7",
        "#04F7FF",
        "#ffdb5c",
        "#9fe6b8",
        "#ff9f7f",
        "#fb7293",
        "#e7bcf3",
        "#8378ea"
      ],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: {
            show: true,
            type: ["pie", "funnel"]
          },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      series: [
        {
          name: "工商用户安检隐患",
          type: "pie",
          radius: [40, 150],

          roseType: "area",
          data: [
            //  {value:2, name:'拒检'},
            // {value:10,name:'银行'},
            // {value:42.5,name:'客服'},
            // {value:56.9, name:'微信'},
            { value: 3600, name: "金水NB水表" },
            { value: 5400, name: "积成NB-IOT水表" },
            { value: 2900, name: "华旭NB水表" },
            { value: 2500, name: "瑞泉NB水表" },
            { value: 4500, name: "迈拓NB水表" },
            { value: 3500, name: "新天NB表计" }
          ],

          label: {
            fontSize: 14
          }
        }
      ]
    };
    myChart.setOption(option);
  }
};
</script>

<style scoped>
</style>
