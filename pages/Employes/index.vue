<template   >
  <div class="p-28 h-full dark:bg-gray-900">
    <NuxtLink to="/employes/add">
      <div class="headTitle flex justify-between mb-4">
        <div class="leftTitle">
          <h4 class="text-2xl text-black dark:text-white">
            Liste des Employés
          </h4>
        </div>
        <div class="rightContent">
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
        </div>
      </div>
    </NuxtLink>
    <div class="shadow-md sm:rounded-lg overflow-x-auto">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>

            <th scope="col" class="px-6 py-3">photo</th>

            <th scope="col" class="px-6 py-3">Prenom & Nom</th>
            <!-- <th scope="col" class="px-6 py-3"></th> -->
            <!-- <th scope="col" class="px-6 py-3">Adresse</th>
            <th scope="col" class="px-6 py-3">Email</th>
                        <th scope="col" class="px-6 py-3">Téléphone</th> -->
            <th scope="col" class="px-6 py-3">Contacts</th>

            <th scope="col" class="px-6 py-3">Genre</th>
            <th scope="col" class="px-6 py-3">S.Matrimonial</th>
            <th scope="col" class="px-6 py-3">N.Enfants</th>
            <th scope="col" class="px-6 py-3">Contrat</th>
            <th scope="col" class="px-6 py-3">Date de Naissance</th>
            <th scope="col" class="px-6 py-3">Salaire</th>
            <th scope="col" class="px-6 py-3">Date d'Entée</th>
            <th scope="col" class="px-6 py-3">S.Points</th>
            <th scope="col" class="px-6 py-3">S.Congés</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="(employe, index) in employes"
            :key="index"
          >
            <td class="px-6 py-4">{{ employe.id }}</td>

            <td class="px-6 py-4">{{ employe.photo }}</td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ employe.prenom }} {{ employe.name }}
            </th>
            <!-- <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
               {{ employe.name }}
            </th> -->
            <!-- <td class="px-6 py-4">{{ employe.adresse }}</td>
            <td class="px-6 py-4">{{ employe.email }}</td>
            <td class="px-6 py-4">{{ employe.phone }}</td> -->
            <td class="px-6 py-4 flex-col">
              {{ employe.phone }} {{ employe.email }} {{ employe.adresse }}
            </td>

            <td class="px-6 py-4">{{ employe.sexe }}</td>
            <td class="px-6 py-4">{{ employe.situation_matrimonial }}</td>
            <td class="px-6 py-4">{{ employe.nombre_enfants }}</td>
            <td class="px-6 py-4">{{ employe.type_de_contrat }}</td>
            <td class="px-6 py-4">
              {{ formatDisplayDate(employe.date_de_naissance) }}
            </td>
            <td class="px-6 py-4">{{ employe.salaire }}</td>
            <td class="px-6 py-4">
              {{ formatDisplayDate(employe.date_entree) }}
            </td>
            <td class="px-6 py-4">{{ employe.solde_points }}</td>
            <td class="px-6 py-4">{{ employe.solde_conges }}</td>
            <td class="px-6 py-4 relative">
              <img
                :src="require(`@/assets/svg/menu.svg`)"
                @click="toggleDropdown(employe.id)"
                alt=""
              />
              <div
                v-if="showDropdown[employe.id]"
                class="dropdown font-bold bg-white p-5 border rounded -ml-10 z-index-10 shadow-xl"
                @click.stop
              >
                <NuxtLink :to="`/Employes/show/${employe.id}`">
                  <button>Voir</button>
                </NuxtLink>
                <NuxtLink :to="`/employes/edit/${employe.id}`">
                  <button>Modifier</button>
                </NuxtLink>
                <button @click="deleteEmploye(employe.id)">Supprimer</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <nav
        class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span
          class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
          >Showing
          <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
          of
          <span class="font-semibold text-gray-900 dark:text-white"
            >1000</span
          ></span
        >
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Previous</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >4</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >5</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Next</a
            >
          </li>
        </ul>
      </nav> -->
    </div>
  </div>
</template>




<script>
import axios from "axios";

export default {
  data() {
    return {
      employes: [],
      showDropdown: {},
    };
  },
  methods: {
    formatDisplayDate(date) {
      return new Date(date).toLocaleDateString("fr-FR");
    },
    async fetchEmployes() {
      try {
        if (process.client) {
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
            console.log("API Response:", response.data);
            this.employes = response.data.data;
          } else {
            console.error("API Error. Status:", response.status);
          }
        } else {
          console.error(
            "This code is running on the server. Make sure it runs in a client-side context."
          );
        }
      } catch (error) {
        console.error("Error fetching data from the API", error);
      }
    },

    toggleDropdown(employeId) {
      this.$set(this.showDropdown, employeId, !this.showDropdown[employeId]);
    },

    async deleteEmploye(employeId) {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error(
            "No authToken available. Make sure the user is authenticated."
          );
          return;
        }

        const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

        const response = await axios.delete(
          `${apiUrl}/api/v1/employes/delete/${employeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          console.log("Employer deleted successfully");
          this.fetchEmployes();
        } else {
          console.error("API Error. Status:", response.status);
        }
      } catch (error) {
        console.error("Error deleting employer", error);
      }
    },
  },
  fetch() {
    this.fetchEmployes();
  },
};
</script>

<style scoped>
/* .dropdown.bg-white {
  background-color: white; 
  padding: 10px;
  border-radius: 5px;
  margin-left: -30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
} */
</style>