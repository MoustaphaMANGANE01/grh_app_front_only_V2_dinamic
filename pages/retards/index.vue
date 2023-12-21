<template>
  <div
    class="p-4 lg:p-28 sm:pt-20 sm:pl-20 md:pl-20 h-full dark:bg-gray-900 ml-20"
  >
    <div class="headTitle flex flex-col lg:flex-row mt-20 justify-between mb-4">
      <div class="leftTitle">
        <h4 class="text-2xl text-black dark:text-white">
          Liste des Employés Retards
        </h4>
      </div>
      <div class="rightContent">
        <NuxtLink to="/retards/add">
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
        class="w-full table-auto rounded-xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>

            <th scope="col" class="px-6 py-3">Prenom et Nom</th>
            <th scope="col" class="px-6 py-3">Motif</th>
            <!-- :            <th scope="col" class="px-6 py-3">Justification</th> -->
            <th scope="col" class="px-6 py-3">Heure d'Arrivée</th>
            <th scope="col" class="px-6 py-3">Heure de fin</th>
            <th scope="col" class="px-6 py-3">Durée</th>
            <th scope="col" class="px-6 py-3">Point perdue</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="(retard, index) in retards"
            :key="index"
          >
<td class="px-6 py-4">{{ retard && retard.id ? retard.id : "N/A" }}</td>

            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ retard.prenom }} {{ retard.name }}
            </th>
            <td class="px-6 py-4">{{ retard.motif }}</td>
            <!-- <td class="px-6 py-4">{{ retard.justifie }}</td> -->
            <!-- <td class="px-6 py-4">{{ retard.expected_arrival_time }}</td> -->
            <td class="px-6 py-4">
              {{ formatDate(retard.expected_arrival_time) }}
            </td>
            <td class="px-6 py-4">
              {{ formatDate(retard.actual_arrival_time) }}
            </td>
            <td class="px-6 py-4">{{ formatDate(retard.late_minutes) }}</td>

            <td class="px-6 py-4">{{ retard.points_perdues }}</td>
            <td class="px-6 py-4 relative">
              <img
                @click="toggleDropdown(retard.id)"
                :src="require(`@/assets/svg/menu.svg`)"
                alt=""
                class="cursor-pointer"
              />
              <div
                v-if="showDropdown[retard.id]"
                class="dropdown font-semibold"
              >
                <NuxtLink :to="`/retards/show/${retard.id}`">
                  <button @click="toggleDropdown(retard.id)">Voir</button>
                </NuxtLink>
                <NuxtLink :to="`/retards/edit/${retard.id}`">
                  <button @click="toggleDropdown(retard.id)">Modifier</button>
                </NuxtLink>
                <button @click="deleteretard(retard.id)">Supprimer</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        retards: [],
      employes: [],
      selectedEmploye: null,
      motif: "",
      points_perdues: 0.25,
      date_heure_attendue: "",
      date_heure_arrivee: "",
      late_minutes: "",
      error: null,
      retardDetails: {},
        showDropdown: {},
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

        const response = await this.$axios.get(
          "http://127.0.0.1:8000/api/v1/retards/list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Retards from API:", response.data.retards.data);

        this.retards = response.data.retards.data;
        console.log(retards);
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

    async deleteRetard(retardId) {
      try {
        const token = localStorage.getItem("token");

        if (!token || !retardId) {
          console.error("Invalid token or retard ID");
          return;
        }

        const response = await this.$axios.delete(
          `retards/delete/${retardId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (
          response.status === 200 &&
          response.data.message === "Retard deleted successfully"
        ) {
          console.log("Retard deleted successfully");
          this.fetchData();
        } else {
          console.error("API Error. Status:", response.status);
        }
      } catch (error) {
        console.error("Error deleting retard", error);
      }
    },

    async addRetard() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error(
            "No authToken available. Make sure the user is authenticated."
          );
          return;
        }

        const response = await this.$axios.post(
          "http://127.0.0.1:8000/api/v1/retards/store",
          this.retardDetails,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Retard ajouté avec succès:", response.data);
        this.retardDetails = {
          employes_id: null,
          expected_arrival_time: null,
          actual_arrival_time: null,
          late_minutes: null,
          points_perdues: null,
        };

        this.fetchData();
      } catch (error) {
        console.error("Erreur lors de l'ajout du retard", error);
      }
    },

    toggleDropdown(retardId) {
      this.$set(this.showDropdown, retardId, !this.showDropdown[retardId]);
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
