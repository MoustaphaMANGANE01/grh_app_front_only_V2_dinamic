<template>
  <div>
  
    <cardDashbord
      @toggle-sidebar="toggleSidebar"
      :style="{ marginLeft: dynamicMargin }"
      :salaireNetEmployes="salaireNetEmployes"
      :nombreEmployes="nombreEmployes"
      :nombreEmployesAbscent="nombreEmployesAbscent"
      :employésPresents="employésPresents"
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
      employésPresents: "",
      nombreEmployesAbscent: "",
      isSidebarMinimized: false,
      showSpans: false,
    };
  },
  async created() {
    if (process.client) {
      await this.fetchData();
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        if (process.client) {
          this.tokenData = localStorage.getItem("token");
        }

        if (!this.tokenData) {
          return;
        }

        const config = {
          headers: { Authorization: `Bearer ${this.tokenData}` },
        };
        const response = await this.$axios.get("home/statistique", config);

        this.salaireNetEmployes = response.data.data.salaireNetEmployes;
        console.log("salaireNetEmployes:", this.salaireNetEmployes);
        this.nombreEmployes = response.data.data.nombreEmployes;
        this.nombreEmployesAbscent = response.data.data.nombreEmployesAbscent;
        this.employésPresents = response.data.data.employésPresents;
      } catch (error) {
        this.handleFetchError(error);
      }
    },
    handleFetchError(error) {
      console.error("Error fetching data:", error);
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
