<template>
  <div>
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      chartData: null,
    };
  },
  mounted() {
    this.fetchChartData();
  },
  methods: {
    fetchChartData() {
      const authToken = localStorage.getItem("token");
      console.log("Token:", authToken);
      axios
        .get("http://127.0.0.1:8000/api/v1/charts/retards", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          this.chartData = response.data.data;
          this.createChart();
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des données de l'API",
            error
          );
        });
        
    },
    createChart() {
      const ctx = this.$refs.myChart.getContext("2d");
      const myChart = new this.$chart(ctx, {
        type: "bar",
        data: {
          labels: this.chartData.labels,
          datasets: [
            {
              label: "Nombre de retards",
              data: this.chartData.datas,
              backgroundColor: [
                "rgba(255, 133, 51, 0.8)",
                "rgba(70, 130, 180, 0.8)",
              ],
              borderColor: ["rgba(255, 133, 51, 1)", "rgba(70, 130, 180, 1)"],
              borderWidth: 1,
              borderRadius: 15,
              hoverBackgroundColor: [
                "rgba(255, 133, 51, 1)",
                "rgba(70, 130, 180, 1)",
              ],
              hoverBorderColor: [
                "rgba(255, 133, 51, 1)",
                "rgba(70, 130, 180, 1)",
              ],
              tension: 0.0,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true, // Commencer à partir de zéro
            },
          },
        },
      });
    },
  },
  
};
</script>

<style scoped>
</style>
