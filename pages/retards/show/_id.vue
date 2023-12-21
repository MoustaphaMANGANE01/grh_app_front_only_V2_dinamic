<template>
  <div class="flex justify-center py-20">
    <div class="rounded-xl bg-gray-800 p-10 h-full text-gray-500 w-full mx-48">
      <div class="text-2xl font-bold">
        <h4>Détails</h4>
      </div>

      <div class="flex-col">
        <div class="mb-4 flex-1 p-2" v-if="retardDetails">
          <label for="motif" class="block text-sm font-semibold text-gray-100">
            Motifs du retard
          </label>
          <div
            class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2"
          >
            {{ retardDetails.motif || "N/A" }}
          </div>
        </div>
        <div class="mb-4 flex-1 p-2" v-if="retardDetails"
        >
          <label
            for="date_debut"
            class="block text-sm font-semibold text-gray-100"
            >Heure Attendu</label
          >
          <div
            class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2"
          >
            {{ formatDate(retardDetails.date_heure_attendue) || "N/A" }}
          </div>
        </div>
        <div class="mb-4 flex-1 p-2" v-if="retardDetails">
          <label
            for="date_fin"
            class="block text-sm font-semibold text-gray-100"
            >Heure Arrivée</label
          >
          <div
            class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2"
          >
            {{ formatDate(retardDetails.date_heure_arrivee) || "N/A" }}
          </div>
        </div>
        <div class="mb-4 flex-1 p-2" v-if="retardDetails">
          <label
            for="date_fin"
            class="block text-sm font-semibold text-gray-100"
            >Durée</label
          >
          <div
            class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2"
          >
            {{ formatDate(retardDetails.late_minutes) || "N/A" }}
          </div>
        </div>
        <div class="mb-4 flex-1 p-2" v-if="retardDetails">
          <label
            for="points_perdues"
            class="block text-sm font-semibold text-gray-100"
            >Points perdus</label
          >
          <div
            class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2"
          >
            {{ retardDetails.points_perdues || "N/A" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      employe: {},
      employes: [],
      selectedEmploye: null,
      motif: "",
      points_perdues: 0.25,
      date_heure_attendue: "",
      date_heure_arrivee: "",
      late_minutes: "",
      error: null,
    };
  },
  computed: {
    defaultPointsPerdus() {
      return 0.25;
    },
  },
  mounted() {
    console.log("Component is mounted");
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const token = localStorage.getItem("token");
        const retardId = this.$route.params.id;

        if (!token || !retardId) {
          console.error("Invalid token or retard ID");
          return;
        }

        const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

        const response = await axios.get(
          `${apiUrl}/api/v1/retards/show/${retardId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data && response.data.data) {
          const retardDetails = response.data.data;

          this.motif = retardDetails.motif || "N/A";
          this.date_heure_attendue = retardDetails.date_heure_attendue || "N/A";
          this.date_heure_arrivee = retardDetails.date_heure_arrivee || "N/A";
          this.late_minutes = retardDetails.late_minutes || "N/A";
          this.points_perdues = retardDetails.points_perdues || "N/A";

          const employeId = retardDetails.employes_id;
          console.log(employeId);
          const responseEmploye = await axios.get(
            `${apiUrl}/api/v1/employes/show/${employeId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          this.selectedEmploye = employeId;
          this.employe = responseEmploye.data.data || {};
          console.log(responseEmploye.data.data);
        } else {
          console.error("Invalid API response structure");
        }
      } catch (error) {
        console.error("Error fetching data from the API", error);
      }
    },

    formatDate(value) {
      if (value === undefined || value === null || value === "") return "N/A";

      if (typeof value === "number") {
        const hours = Math.floor(value / 60);
        const minutes = value % 60;
        return `${hours}h ${minutes}min`;
      }

      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(value).toLocaleDateString("fr-FR", options);
    },
  },
};
</script>

<style scoped>
</style>
