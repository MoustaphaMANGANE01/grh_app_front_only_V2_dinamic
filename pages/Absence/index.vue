<template>
  <div class="p-28 h-full dark:bg-gray-900">
    <!-- Bouton pour ajouter une absence -->
    <NuxtLink to="/Absence/add">
      <button class="bg-blue-500 mb-20 text-white px-4 py-2 rounded">
        Ajouter
      </button>
    </NuxtLink>

    <!-- Tableau pour afficher les absences -->
    <div class="shadow-md sm:rounded-lg">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <!-- En-tête du tableau -->
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Prenom et Nom</th>
            <th scope="col" class="px-6 py-3">Motif</th>
            <th scope="col" class="px-6 py-3">Justification</th>
            <th scope="col" class="px-6 py-3">Date de debut</th>
            <th scope="col" class="px-6 py-3">Date de Fin</th>
            <th scope="col" class="px-6 py-3">Point perdue</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>

        <!-- Corps du tableau avec les données des absences -->
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="(absence, index) in absences"
            :key="index"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ absence.prenom }} {{ absence.nom }}
            </th>
            <td class="px-6 py-4">{{ absence.motif }}</td>
            <td class="px-6 py-4">{{ absence.justifie }}</td>
            <td class="px-6 py-4">{{ absence.date_debut }}</td>
            <td class="px-6 py-4">{{ absence.date_fin }}</td>
            <td class="px-6 py-4">{{ absence.points_perdues }}</td>
            <!-- Actions avec un menu déroulant -->
            <td class="px-6 py-4 relative" @click="toggleDropdown">
              <img :src="require(`@/assets/svg/menu.svg`)" alt="" />
              <div v-if="showDropdown" class="dropdown font-semibold">
                <NuxtLink :to="`/Absence/show/${absence.id}`">
                  <button>Voir</button>
                </NuxtLink>
                <NuxtLink :to="`/Absence/edit/${absence.id}`">
                  <button>Modifier</button>
                </NuxtLink>
                <button @click="deleteAbsence">Supprimer</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Formulaire pour ajouter une absence -->
    <form v-if="showAddForm" class="max-w-md mx-auto" @submit.prevent="addAbsence">
      <!-- Champs pour les détails de l'absence -->
      <!-- ... -->
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      absences: [],
      showDropdown: false,
      showAddForm: false,
      absenceDetails: {
        employes_id: '',
        date_debut: '',
        date_fin: '',
        points_perdues: '',
      },
    };
  },
  mounted() {
    console.log("Component is mounted");
    this.fetchData();
  },
  methods: {
    // Fonction pour récupérer les données des absences
    async fetchData() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error(
            "No authToken available. Make sure the user is authenticated."
          );
          return;
        }

        const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

        const response = await axios.get(`${apiUrl}/api/v1/absences/list`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        this.absences = response.data.data.absences;
      } catch (error) {
        console.error("Error fetching data from the API", error);
      }
    },
    // Fonction pour supprimer une absence
    async deleteAbsence() {
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

        const response = await axios.delete(
          `http://127.0.0.1:8000/api/v1/absences/destroy/${this.absenceDetails.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Absence supprimée avec succès:", response.data);
        // Rediriger l'utilisateur vers la page d'accueil ou une autre page si nécessaire

      } catch (error) {
        console.error("Erreur lors de la suppression de l'absence", error);
        // Gérer les erreurs et donner un retour à l'utilisateur si nécessaire
      }
    },

    // Fonction pour basculer l'affichage du menu déroulant
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    // Fonction pour basculer l'affichage du formulaire d'ajout
    toggleAddForm() {
      this.showAddForm = !this.showAddForm;
    },

    // Fonction pour ajouter une absence
    async addAbsence() {
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

        const employesId = this.absenceDetails.employes_id;
        const dateDebut = this.absenceDetails.date_debut;
        const dateFin = this.absenceDetails.date_fin;
        const pointsPerdus = this.absenceDetails.points_perdues;

        const response = await axios.post(
          `http://127.0.0.1:8000/api/v1/absences/store`,
          {
            employes_id: employesId,
            date_debut: dateDebut,
            date_fin: dateFin,
            points_perdues: pointsPerdus,
            // Ajouter d'autres champs selon vos besoins
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Absence ajoutée avec succès:", response.data);

      } catch (error) {
        console.error("Erreur lors de l'ajout de l'absence", error);
        // Gérer les erreurs et donner un retour à l'utilisateur si nécessaire
      }
    },
  },
};
</script>

<style  scoped>
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 5px;
  z-index: 1;
}

.dropdown button {
  display: block;
  width: 100%;
  padding: 5px;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
}
</style>
