<template>
  <div id="statsChart" class="tw-bg-white dark:tw-bg-surface tw-rounded-xl tw-p-4">
    <div class="headTitle tw-flex tw-justify-between tw-mb-3 tw-flex-wrap">
      <div class="leftTitle">
        <h4 class="tw-text-2xl tw-text-black dark:tw-text-white">Statistics</h4>
      </div>
    </div>
    <div>
      <client-only>
        <ApexCharts
          :options="chartOptions"
          :series="series"
          :height="300"
          chart-id="lineChart"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
// import ApexCharts from 'vue-apexcharts';

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: "bar",
          stacked: true,
          toolbar: {
            show: true,
          },
        },
        foreColor: "#999",
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "30%",
            borderRadius: 5,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
          curve: "smooth", // Ajout de curve ici si nécessaire
        },
        zoom: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        colors: ["#0090FF", "#FF955C"],
        xaxis: {
          categories: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
          ],
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            formatter: (val) => val + "k",
            offsetX: -15,
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: (val) => "$" + val + "k",
          },
        },
        grid: {
          show: true,
          borderColor: "#33363d",
          xaxis: {
            lines: {
              show: false,
            },
          },
          padding: {
            left: -5,
            right: 5,
          },
        },
      },
      series: [
        {
          name: "Actual",
          data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
        },
        {
          name: "Projection",
          data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
        },
      ],
    };
  },
};
</script>

<style></style>
