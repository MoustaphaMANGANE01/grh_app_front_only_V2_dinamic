<template>
  <div>
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script>
import axios from 'axios';

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
      axios.get("http://127.0.0.1:8000/api/v1/charts/absences", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        }
      })
        .then(response => {
          this.chartData = response.data.data;
          this.createChart();
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données de l\'API', error);
        });
    },
    createChart() {
      const ctx = this.$refs.myChart.getContext('2d');
      const myChart = new this.$chart(ctx, {
        type: 'bar',
        data: {
          labels: this.chartData.labels,
          datasets: [{
            label: 'Nombre d\'absences',
            data: this.chartData.datas,
            backgroundColor: '#6666ff', 
            borderColor: '#6666ff',   
            borderWidth: 1,
            borderRadius: 50,  
            hoverBackgroundColor: '#6666ff',   
            hoverBorderColor: '#6666ff',   
            tension: 0.0
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true  
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
