<template>
  <div>
    <cardDashbord
    @toggle-sidebar="toggleSidebar"
      :style="{ marginLeft: dynamicMargin }"
      :salaireNetEmployes="salaireNetEmployes"
      :nombreEmployes="nombreEmployes"
    />
  </div>
</template>

<script>
import cardDashbord from "../components/cardDashbord.vue";

export default {
  components: { cardDashbord },
  data() {
    return {
      tokenData: null,
      dynamicMargin: "70px",
      salaireNetEmployes: "",
      nombreEmployes: "",
      isSidebarMinimized: false,
      showSpans: false,
    };
  },
  async created() {
    if (process.client) {
      // Exécutez fetchData seulement côté client
      await this.fetchData();
    }
  },
  mounted() {
    // Utilisez mounted au lieu de created pour s'assurer que le composant est monté
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        console.log('#1');
        if (process.client) {
          this.tokenData = localStorage.getItem("token");
        }

        if (!this.tokenData) {
          // Traitez le cas où le token n'est pas disponible
          return;
        }

        console.log('Token:', this.tokenData);

        const config = { headers: { 'Authorization': `Bearer ${this.tokenData}` } };
        const response = await this.$axios.get("home/statistique", config);

        this.salaireNetEmployes = response.data.data.salaireNetEmployes;
        console.log('salaireNetEmployes:', this.salaireNetEmployes);
        this.nombreEmployes = response.data.data.nombreEmployes;
      } catch (error) {
        this.handleFetchError(error);
      }
    },
    handleFetchError(error) {
      console.error("Error fetching data:", error);
      // Affichez un message d'erreur à l'utilisateur si nécessaire
    },
    toggleSidebar() {
      const separatorSidebar = document.getElementById("separator-sidebar");

      if (this.isSidebarMinimized) {
        separatorSidebar.style.width = "270px";
        this.dynamicMargin = "270px";
      } else {
        separatorSidebar.style.width = "70px";
        this.dynamicMargin = "70px";
      }

      this.isSidebarMinimized = !this.isSidebarMinimized;
      this.showSpans = !this.showSpans;
    },
  },
};
</script>

<style scoped>
#separator-sidebar {
  transition: width 0.9s ease;
}
#nav {
  transition: margin-left 0.9s ease;
}
#nav .rounded-xl {
  transition: margin-left 0.9s ease;
}

.dark-fill {
  fill: #ffffff;
}
</style>
