<template>
<div class="p-4  lg:p-28 sm:pt-20 sm:pl-20 md:pl-20 h-full dark:bg-gray-900">
    <div class="headTitle flex flex-col lg:flex-row mt-20 justify-between mb-4">
      <div class="leftTitle mb-2 lg:mb-0">
        <h4 class="text-2xl text-black dark:text-white">Liste des Employés Absents</h4>
      </div>
      <div class="rightContent flex">
        <NuxtLink to="/Absence/add">
          <button
            type="button"
            class="inline-flex items-center ml-2 text-gray-500 bg-blue-500 hover:bg-gray-100 font-medium rounded-xl text-sm px-3 py-2 dark:bg-accent dark:text-white dark:hover:bg-gray-700"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V9H5C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11H9V15C9 15.5523 9.44772 16 10 16C10.5523 16 11 15.5523 11 15V11H15C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H11V5Z"
              fill="white"
            ></path>
          </svg>
        </button>
          </NuxtLink>
      </div>
    </div>
  

    <div class="shadow-md overflow-x-auto sm:rounded-lg">
      <table
        class="w-full table-auto  rounded-xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
                      <th scope="col" class="px-6 py-3">ID</th>

            <th scope="col" class="px-6 py-3">Prenom et Nom</th>
            <th scope="col" class="px-6 py-3">Motif</th>
<!-- :            <th scope="col" class="px-6 py-3">Justification</th> -->
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
                      <td class="px-6 py-4">{{ absence.id }}</td>

            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ absence.prenom }} {{ absence.name}}
            </th>
            <td class="px-6 py-4">{{ absence.motif }}</td>
            <!-- <td class="px-6 py-4">{{ absence.justifie }}</td> -->
            <td class="px-6 py-4">{{ absence.date_debut }}</td>
            <td class="px-6 py-4">{{ absence.date_fin }}</td>
            <td class="px-6 py-4">{{ absence.points_perdues }}</td>
            <!-- Actions avec un menu déroulant -->
           <td class="px-6 py-4 relative">
    <img
      @click="toggleDropdown(absence.id)"
      :src="require(`@/assets/svg/menu.svg`)"
      alt=""
      class="cursor-pointer"
    />
    <div v-if="showDropdown[absence.id]" class="dropdown font-semibold">
      <NuxtLink :to="`/Absence/show/${absence.id}`">
        <button @click="toggleDropdown(absence.id)">Voir</button>
      </NuxtLink>
      <NuxtLink :to="`/Absence/edit/${absence.id}`">
        <button @click="toggleDropdown(absence.id)">Modifier</button>
      </NuxtLink>
      <button @click="deleteAbsence(absence.id)">Supprimer</button>
    </div>
  </td>
          </tr>
        </tbody>
      </table>
    </div>

  
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      absences: [],
    showDropdown: {},
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
  async deleteAbsence(absenceId) {
  try {
    let token = null;

    if (process.client) {
      token = localStorage.getItem("token");
    }

    if (!token || !absenceId) {
      console.error("Invalid token or absence ID");
      return;
    }

    const response = await axios.delete(
      `http://127.0.0.1:8000/api/v1/absences/delete/${absenceId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      console.log("Absence deleted successfully");
      this.fetchData();
    } else {
      console.error("API Error. Status:", response.status);
    }
  } catch (error) {
    console.error("Error deleting absence", error);
  }
}
,

  toggleDropdown(absenceId) {
    this.$set(this.showDropdown, absenceId, !this.showDropdown[absenceId]);
  },


   

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
