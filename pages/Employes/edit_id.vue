<template>
  <div>
    <div class="flex justify-center bg-gray-900 p-20">
      <div class="dark:bg-white overflow-hidden shadow rounded-lg border">
        <div
          v-if="absenceDetails"
          class="dark:bg-gray-500 p-10 overflow-hidden shadow rounded-lg border"
        >
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-2xl leading-6 font-bold text-white">
              Modifier l'Absence de {{ absenceDetails.prenom }}
              {{ absenceDetails.nom }}
            </h3>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
            <form @submit.prevent="updateAbsence">
              <div class="mb-4">
                <label
                  for="motif"
                  class="block pt-10 text-sm font-bold text-white"
                  >Motif de l'absence</label
                >
                <input
                  v-model="absenceDetails.motif"
                  type="text"
                  name="motif"
                  id="motif"
                  class="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div class="mb-4">
                <label for="motif" class="block text-sm font-bold text-white"
                  >Congé</label
                >
                <input
                  v-model="absenceDetails.conge"
                  type="text"
                  name="motif"
                  id="motif"
                  class="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <!-- <div class="mb-4">
                <label for="motif" class="block text-sm font-bold text-white">Justification</label>
                <input v-model="absenceDetails.justifie" type="text" name="motif" id="motif" class="mt-1 p-2 w-full border rounded-md" />
              </div> -->
              <div class="mb-4">
                <label
                  for="date_debut"
                  class="block text-sm font-bold text-white"
                  >Date de début</label
                >
                <input
                  v-model="absenceDetails.date_debut"
                  type="date"
                  name="date_debut"
                  id="date_debut"
                  class="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div class="mb-4">
                <label for="date_fin" class="block text-sm font-bold text-white"
                  >Date de fin</label
                >
                <input
                  v-model="absenceDetails.date_fin"
                  type="date"
                  name="date_fin"
                  id="date_fin"
                  class="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div class="mb-4">
                <label
                  for="points_perdues"
                  class="block text-sm font-bold text-white"
                  >Points perdus</label
                >
                <input
                  v-model="absenceDetails.points_perdues"
                  type="text"
                  name="points_perdues"
                  id="points_perdues"
                  class="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div class="mb-4">
                <label for="justifie" class="block text-sm font-bold text-white"
                  >Justifié</label
                >
                <input
                  v-model="absenceDetails.justifie"
                  type="text"
                  name="justifie"
                  id="justifie"
                  class="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div class="flex items-center">
                <button
                  type="submit"
                  class="bg-blue-500 text-white flex justify-center w-full py-2 rounded"
                >
                  Modifier
                </button>
              </div>
            </form>
          </div>
        </div>
        <div v-else>
          <p class="text-red-500">
            Erreur lors de la récupération des détails de l'absence. Vérifiez
            l'ID de l'absence.
          </p>
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
      absenceDetails: null,
    };
  },
  async asyncData({ params }) {
    try {
      let token = null;

      if (process.client) {
        token = localStorage.getItem("token");
      }

      if (!token) {
        console.error(
          "No authToken available. Make sure the user is authenticated."
        );
        return {};
      }

      const apiUrl = "http://127.0.0.1:8000";
      const response = await axios.get(
        `${apiUrl}/api/v1/absences/show/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const absenceDetails = response.data.data;

      return { absenceDetails };
    } catch (error) {
      console.error("Error fetching data from the API", error);
      return { absenceDetails: null };
    }
  },
  methods: {
    async updateAbsence() {
      try {
        let token = null;

        if (process.client) {
          token = localStorage.getItem("token");
        }

        if (!token) {
          console.error(
            "No authToken available. Make sure the user is authenticated."
          );
          return {};
        }

        const response = await axios.put(
          `http://127.0.0.1:8000/api/v1/absences/update/${this.absenceDetails.id}`,
          {
            employes_id: this.absenceDetails.employes_id,
            motif: this.absenceDetails.motif,

            date_debut: this.absenceDetails.date_debut,
            date_fin: this.absenceDetails.date_fin,
            points_perdues: this.absenceDetails.points_perdues,
            justifie: this.absenceDetails.justifie,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Absence mise à jour avec succès:", response.data);
        console.log("Réponse de l'API :", response.data);
        this.$router.push("/Absence");
      } catch (error) {
        console.error("Erreur lors de la mise à jour de l'absence", error);
      }
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
