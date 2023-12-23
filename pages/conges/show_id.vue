<template>
  <div class="flex justify-center py-20">
    <div class="rounded-xl p-10 h-full w-full mx-48"
    :class="{'bg-gray-800 text-gray-500':isDarkMode, 'bg-white':!isDarkMode}"
>
      <div class="text-2xl font-bold">
        <h4>Détails</h4>
      </div>


<div class="flex-col">
 <div class="mb-4 flex-1 p-2">
                <label for="motif" class="block text-sm font-semibold "
                
                >Motifs de l'absence</label>
                <div class="rounded-xl py-2  flex justify-center items-center text-gray-200 w-full mt-2"
                :class="{'bg-gray-500':isDarkMode,'bg-blue-900':!isDarkMode}"
                >
                  {{ absenceDetails.motif || 'N/A' }}
                </div>
              </div>
  <div class="mb-4 flex-1 p-2">
              <label for="date_debut" class="block text-sm font-semibold ">Date de début</label>
              <div class="rounded-xl py-2  flex justify-center items-center text-gray-200 w-full mt-2"
                              :class="{'bg-gray-500':isDarkMode,'bg-blue-900':!isDarkMode}"
>
                {{ formatDate(absenceDetails.date_debut) || 'N/A' }}
              </div>
            </div>
               <div class="mb-4 flex-1 p-2">
              <label for="date_fin" class="block text-sm font-semibold ">Date de fin</label>
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2  " :class="{'bg-gray-500':isDarkMode,'bg-blue-900':!isDarkMode}">
                {{ formatDate(absenceDetails.date_fin) || 'N/A' }}
              </div>
            </div>
            <div class="mb-4 flex-1 p-2">
              <label for="points_perdues" class="block text-sm font-semibold ">Points perdus</label>
              <div class="rounded-xl py-2  flex justify-center items-center text-gray-200 w-full mt-2"                  :class="{'bg-gray-500':isDarkMode,'bg-blue-900':!isDarkMode}"
>
                {{ absenceDetails.points_perdues || 'N/A' }}
              </div>
            </div>
</div>

      <!-- <div>
        <div class="flex justify-between w-full font-semibold">
          <div class="flex-col">
            <h5 class="font-bold text-xl text-gray-500 p-2">Justification</h5>
            <div class="md:flex sm:flex-row sm:p-0 p-2">
              <div class="mb-4 flex-1 p-2">
                <label for="employes" class="block text-sm font-semibold text-gray-100">Employé</label>
                <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-900 w-full mt-2">
                  {{ employe.prenom || 'N/A' }} {{ employe.nom || 'N/A' }}
                </div>
              </div>

              <div class="mb-4 flex-1 p-2">
                <label for="motif" class="block text-sm font-semibold text-gray-100">Motifs de l'absence</label>
                <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-900 w-full mt-2">
                  {{ absenceDetails.motif || 'N/A' }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-col">
          <h5 class="font-bold text-xl text-gray-500 p-2">Marge</h5>
          <div class="md:flex sm:flex-row sm:p-0 p-2">
            <div class="mb-4 flex-1 p-2">
              <label for="date_debut" class="block text-sm font-semibold text-gray-100">Date de début</label>
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-900 w-full mt-2">
                {{ formatDate(absenceDetails.date_debut) || 'N/A' }}
              </div>
            </div>

            <div class="mb-4 flex-1 p-2">
              <label for="date_fin" class="block text-sm font-semibold text-gray-100">Date de fin</label>
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-900 w-full mt-2">
                {{ formatDate(absenceDetails.date_fin) || 'N/A' }}
              </div>
            </div>

            <div class="mb-4 flex-1 p-2">
              <label for="points_perdues" class="block text-sm font-semibold text-gray-100">Points perdus</label>
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-900 w-full mt-2">
                {{ absenceDetails.points_perdues || 'N/A' }}
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      employe: {},
      absenceDetails: {
        employes_id: "",
        prenom: "",
        nom: "",
        date_debut: "",
        date_fin: "",
        points_perdues: "",
        motif: "",
      },
    };
  },
  mounted() {
    console.log("Component is mounted");
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const token = localStorage.getItem("token");
        const absenceId = this.$route.params.id;

        if (!token || !absenceId) {
          console.error("Invalid token or absence ID");
          return;
        }

        const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

        // 1. Récupérer les détails de l'absence
        const responseAbsence = await axios.get(`${apiUrl}/api/v1/absences/show/${absenceId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // 2. Récupérer les détails de l'employé
        const employeId = responseAbsence.data.data.employes_id;
        console.log(employeId);
        const responseEmploye = await axios.get(`${apiUrl}/api/v1/employes/show/${employeId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // 3. Mettre à jour les détails dans le composant avec des vérifications de nullité
        this.absenceDetails = {
          ...responseAbsence.data.data,
          prenom: responseEmploye.data.data ? responseEmploye.data.data.prenom : '',
          nom: responseEmploye.data.data ? responseEmploye.data.data.name : '',
        };

        // Mettre à jour la variable employe
        this.employe = responseEmploye.data.data || {};
        console.log(responseEmploye.data.data);

      } catch (error) {
        console.error("Error fetching data from the API", error);
      }
    },

    formatDate(dateString) {
      if (!dateString) return 'N/A';

      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('fr-FR', options);
    },
  },
};
</script>

<style scoped>
</style>
