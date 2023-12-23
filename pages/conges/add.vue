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
            <div class="md:flex sm:flex-row sm:p-0 p-2"></div>
          </div>

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
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

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
                  for="prenom"
                  class="block text-sm font-semibold "
                 :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Motifs de l'absence</label
                >
                <input
                  v-model="motif"
                  type="text"
                  name="prenom"
                  id="prenom"
                  class="mt-1 p-2 w-full  border rounded-md"
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                />
              </div>
              <!-- 
              <div class="mb-4 flex-1 p-2">
                <label
                  for="nom"
                  class="block text-sm font-semibold text-gray-100"
                  >justifié</label
                >
                <input
                  v-model="justifie"
                  type="number"
                  name="nom"
                  id="nom"
                  class="mt-1 p-2 w-full bg-gray-500 border rounded-md"
                />
              </div> -->
            </div>
          </div>

          <div class="flex-col">
            <h5 class="font-bold text-xl text-gray-500 p-2">Marge</h5>
            <div class="md:flex sm:flex-row sm:p-0 p-2">
              <div class="mb-4 flex-1 p-2">
                <label
                  for="phone"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Date de début</label
                >
                <input
                  v-model="date_debut"
                  type="date"
                  name="telephone"
                  id="phone"
                  class="mt-1 p-2 w-full  border rounded-md"
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="adresse"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Date de fin</label
                >
                <input
                  v-model="date_fin"
                  type="date"
                  name="adresse"
                  id="adresse"
                  class="mt-1 p-2 w-full  border rounded-md"
                  :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="email"
                  class="block text-sm font-semibold "
                                     :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

                  >Points perdus</label
                >
               <input v-model="points_perdues" type="float"                   class="mt-1 p-2 w-full  border rounded-md"
                                  :class="{'text-gray-100':isDarkMode, 'text-gray-900':!isDarkMode}"

 step="0.01" />
              </div>
            </div>
          </div>

          <div class="p-2">
            <div class="flex items-center">
              <button
                type="submit"
                                 :class="{'bg-gray-900':isDarkMode, 'bg-blue-900':!isDarkMode}"

                class="flex justify-center w-full py-2 rounded-xl"
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
      employes: [],
      selectedEmploye: null,
      // justifie: "",
      motif: "",
      points_perdues:  0.5,

      date_debut: "",
      date_fin: "",
      error: null,
    };
  },
  computed: {
    defaultPointsPerdus() {
      return 0.5;
    },
    points_perdues() {
      return this.defaultPointsPerdus;
    },
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
    async submitForm() {
      try {
        await this.fetchEmployes();

        const token = localStorage.getItem("token");

        if (!token) {
          console.error(
            "No authToken available. Make sure the user is authenticated."
          );
          return;
        }

        const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

        const response = await axios.post(
          `${apiUrl}/api/v1/absences/store`,
          {
            employes_id: this.selectedEmploye,
            date_debut: this.date_debut,
            date_fin: this.date_fin,
            points_perdues: this.points_perdues,
            motif: this.motif,
            // justifie:this.justifie,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200 && response.data.status === "success") {
          console.log("Absence enregistrée avec succès");
          this.selectedEmploye = null;
          // this.justifie = "";
          this.motif = "";
          this.date_debut = "";
          this.date_fin = "";
          this.points_perdues = "";
        } else {
          console.error("API Error. Status:", response.status);
          this.$router.push({ name: "Absence" });
        }
      } catch (error) {
        console.error("Error submitting form", error);
        this.error =
          "Une erreur s'est produite lors de l'enregistrement de l'absence.";
      }
    },
  },
  mounted() {
    this.fetchEmployes();
  },
};
</script>


<style lang="scss" scoped>
</style>
