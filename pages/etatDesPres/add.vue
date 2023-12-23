<template>
  <div class="p-28">
    <div
      class="p-5 overflow-hidden shadow rounded-lg w-full md:w-full"
      :class="{ 'bg-gray-800': isDarkMode, 'bg-white': !isDarkMode }"
    >
      <div
        class="px-2 py-5 sm:px-6 flex justify-center rounded-xl"
        :class="{ 'bg-blue-900': !isDarkMode, 'bg-gray-900': isDarkMode }"
      >
        <h2
          class="md:text-2xl sm:text-sm text-white leading-6 font-bold"
          :class="{ 'text-white': isDarkMode }"
        >
          Enregistrer un Prêt
        </h2>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <form @submit.prevent="submitForm" enctype="multipart/form-data">
          <div class="flex-col">
            <div class="md:flex sm:flex-row sm:p-0 p-2"></div>
          </div>

          <div class="flex-col">
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
                  for="email"
                  class="block text-sm font-semibold"
                  :class="{
                    'text-gray-100': isDarkMode,
                    'text-gray-900': !isDarkMode,
                  }"
                >
                  Montant Demandé
                </label>
                <input
                  v-model="montantDemande"
                  type="number"
                  class="mt-1 p-2 w-full border rounded-md"
                  :class="{
                    'text-gray-100': isDarkMode,
                    'text-gray-900': !isDarkMode,
                  }"
                />
              </div>
            </div>

            <div class="mb-4 flex-1 p-2">
              <label
                for="email"
                class="block text-sm font-semibold"
                :class="{
                  'text-gray-100': isDarkMode,
                  'text-gray-900': !isDarkMode,
                }"
              >
                Date de la Demande
              </label>
              <input
                v-model="dateDeLaDemande"
                type="date"
                class="mt-1 p-2 w-full border rounded-md"
                :class="{
                  'text-gray-100': isDarkMode,
                  'text-gray-900': !isDarkMode,
                }"
              />
            </div>
            <div class="mb-4 flex-1 p-2">
              <label
                for="email"
                class="block text-sm font-semibold"
                :class="{
                  'text-gray-100': isDarkMode,
                  'text-gray-900': !isDarkMode,
                }"
              >
                Date de Remboursement
              </label>
              <input
                v-model="dateDeRemboursement"
                type="date"
                class="mt-1 p-2 w-full border rounded-md"
                :class="{
                  'text-gray-100': isDarkMode,
                  'text-gray-900': !isDarkMode,
                }"
              />
            </div>
          </div>

          <div class="flex-col">
            <div class="md:flex sm:flex-row sm:p-0 p-2"></div>

            <div class="mb-4 flex-1 p-2">
              <label
                for="password"
                class="block text-sm font-semibold"
                :class="{
                  'text-gray-100': isDarkMode,
                  'text-gray-900': !isDarkMode,
                }"
              >
                Montant Remboursé
              </label>
              <input
                v-model="montantRembourse"
                type="number"
              
                class="mt-1 p-2 w-full border rounded-md"
                :class="{
                  'text-gray-100': isDarkMode,
                  'text-gray-900': !isDarkMode,
                }"
              />
            </div>
            <div class="mb-4 flex-1 p-2">
              <label
                for=""
                class="block text-sm font-semibold"
                :class="{
                  'text-gray-100': isDarkMode,
                  'text-gray-900': !isDarkMode,
                }"
              >
                Montant Restant
              </label>
              <input
                v-model="montantRestant"
                type="number"
             
                class="mt-1 p-2 w-full border rounded-md"
                :class="{
                  'text-gray-100': isDarkMode,
                  'text-gray-900': !isDarkMode,
                }"
              />
            </div>
          </div>
          <div class="p-2">
            <div class="flex items-center">
              <button
                type="submit"
                :class="{
                  'bg-gray-900': isDarkMode,
                  'bg-blue-900 text-white': !isDarkMode,
                }"
                class="flex justify-center w-full py-2 rounded-xl"
              >
                Enregistrer
              </button>
            </div>
          </div>

          
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
      isDarkMode: false,
      employes: [],
      selectedEmploye: null,
      montantDemande: null,
      dateDeLaDemande: null,
      dateDeRemboursement: null,
      montantRembourse: null,
      montantRestant: null,
    };
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
    const token = localStorage.getItem("token");
    const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

    const employeId = this.selectedEmploye;

    const montantRestant = this.montantDemande - this.montantRembourse;

    const response = await axios.post(
      `${apiUrl}/api/v1/etats/store`,
      {
        employe_id: employeId,
        montant_demande: this.montantDemande,
        date_de_la_demande: this.dateDeLaDemande,
        date_de_remboursement: this.dateDeRemboursement,
        montant_rembourse: this.montantRembourse,
        montant_restant: montantRestant,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response);
    if (response.status === 201) {
      console.log("Prêt enregistré avec succès");
      this.selectedEmploye = null;
      this.montantDemande = null;
      this.dateDeLaDemande = null;
      this.dateDeRemboursement = null;
      this.montantRembourse = null;
      this.montantRestant = null;
      this.$router.push({ name: "etatDesPres" });
    } else {
      console.error("API Error. Status:", response.status);
    }
  } catch (error) {
    console.error("Error submitting form", error);

    if (error.response && error.response.status === 422) {
      console.error("Validation error details:", error.response.data);
    }
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
