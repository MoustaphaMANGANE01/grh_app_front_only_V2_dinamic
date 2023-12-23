<template>
  <div class="p-28">
     <div
      class=" p-5 overflow-hidden shadow rounded-lg w-full md:w-full"
      :class="{'bg-gray-800':isDarkMode,'bg-white  ':!isDarkMode}"
    >
      <div class="px-2 py-5 sm:px-6  flex justify-center rounded-xl"
      :class="{'bg-blue-900':!isDarkMode,'bg-gray-900':isDarkMode}">
        <h2 class="md:text-2xl sm:text-sm text-white leading-6 font-bold "
        :class="{'text-white':isDarkMode,}">
          Enregistrer l'Absence d'un employé
        </h2>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <form @submit.prevent="submitForm" enctype="multipart/form-data">
          <div class="flex-col">
            <h5 class="font-bold text-xl text-gray-500 p-2">Justification</h5>
            <div class="md:flex sm:flex-row sm:p-0 p-2">
              <div class="mb-4 flex-1 p-2">
                <label
                  for="employes"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Employé</label
                >
                <select
                  v-model="selectedEmploye"
                  name="employes"
                  id="employes"
                  class="mt-1 p-2 w-full  border rounded-md"
                >
                  <option
                    v-for="employe in employes"
                    :key="employe.id"
                    :value="employe.id"
                  >
                    {{ employe.name }} {{ employe.prenom }}
                  </option>
                </select>
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="motif"
                  class="block text-sm font-semibold "
                                                       :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Motifs de l'absence</label
                >
                <input
                  v-model="motif"
                  type="text"
                  name="motif"
                  id="motif"
                  class="mt-1 p-2 w-full border rounded-md"
                                                       :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                />
              </div>
            </div>
          </div>

          <div class="flex-col">
            <h5 class="font-bold text-xl text-gray-500 p-2">Marge</h5>
            <div class="md:flex sm:flex-row sm:p-0 p-2">
              <div class="mb-4 flex-1 p-2">
                <label
                  for="date_debut"
                  class="block text-sm font-semibold "
                                                       :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Date de début</label
                >
                <input
                  v-model="date_debut"
                  type="date"
                  name="date_debut"
                  id="date_debut"
                  class="mt-1 p-2 w-full border rounded-md"
                                                       :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="date_fin"
                  class="block text-sm font-semibold "
                                                       :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Date de fin</label
                >
                <input
                  v-model="date_fin"
                  type="date"
                  name="date_fin"
                  id="date_fin"
                  class="mt-1 p-2 w-full  border rounded-md"
                                                       :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="points_perdues"
                  class="block text-sm font-semibold "
                                                       :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Points perdus</label
                >
                <input
                  v-model="points_perdues"
                  type="number"
                  name="points_perdues"
                  id="points_perdues"
                  class="mt-1 p-2 w-full border rounded-md"
                                                       :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                />
              </div>
            </div>
          </div>

          <div class="p-2">
            <div class="flex items-center">
              <button
                type="submit"
                class=" flex justify-center w-full py-2 rounded-xl"
                                 :class="{'bg-gray-900':isDarkMode, 'bg-blue-900':!isDarkMode}"

              >
                Enregistrer
              </button>
            </div>
          </div>

          <div v-if="error" class="text-red-500 mt-2">{{ error }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedEmploye: "",
      motif: "",
      date_debut: "",
      date_fin: "",
      points_perdues: "",
      employes: [],
      error: null,
    };
  },
  mounted() {
    this.fetchEmployes();
    this.fetchAbsenceDetails();
  },
  methods: {
    async fetchEmployes() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error(
            "No authToken available. Make sure the user is authenticated."
          );
          return;
        }

        const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

        const response = await axios.get(`${apiUrl}/api/v1/employes/list`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          console.log("Employés récupérés avec succès");
          this.employes = response.data.data;
        } else {
          console.error("API Error. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching employés from the API", error);
      }
    },
    async fetchAbsenceDetails() {
      try {
        const token = localStorage.getItem("token");
        const absenceId = this.$route.params.id;

        console.log("Absence ID:", absenceId);
        if (!token || !absenceId) {
          console.error("Invalid token or absence ID");
          return;
        }

        const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

        const responseAbsence = await axios.get(
          `${apiUrl}/api/v1/absences/show/${absenceId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const absenceDetails = responseAbsence.data.data;
        this.selectedEmploye = absenceDetails.employes_id;
        this.motif = absenceDetails.motif;
        this.date_debut = absenceDetails.date_debut;
        this.date_fin = absenceDetails.date_fin;
        this.points_perdues = absenceDetails.points_perdues;
      } catch (error) {
        console.error("Error fetching absence details from the API", error);
      }
    },
    async submitForm() {
      try {
        const token = localStorage.getItem("token");
        const absenceId = " this.$route.params.id";

        if (!token || !absenceId) {
          console.error("Invalid token or absence ID");
          return;
        }

        const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

        const data = {
          employes_id: this.selectedEmploye,
          motif: this.motif,
          date_debut: this.date_debut,
          date_fin: this.date_fin,
          points_perdues: this.points_perdues,
        };

        const response = await axios.put(
          `${apiUrl}/api/v1/absences/update/${absenceId}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("API Response:", response.data);

        this.selectedEmploye = "";
        this.motif = "";
        this.date_debut = "";
        this.date_fin = "";
        this.points_perdues = "";
        this.error = null;
        this.$router.push({ name: "Absence" });
      } catch (error) {
        console.error("Error submitting form", error);
        this.error =
          "Une erreur s'est produite lors de l'enregistrement de l'absence.";
      }
    },
  },
};
</script>

<style scoped>
/* Ajoutez vos styles CSS spécifiques au composant ici */
</style>
