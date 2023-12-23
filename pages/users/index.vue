<template>
<div class="p-4  lg:p-28 sm:pt-20 sm:pl-20 md:pl-20 h-full dark:bg-gray-900">
    <div class="headTitle flex flex-col lg:flex-row mt-0 justify-between mb-4">
      <div class="leftTitle mb-2 lg:mb-0">
        <h4 class="text-2xl font-bold"
                    :class="{ 'text-gray-800': !isDarkMode, 'text-white': isDarkMode }"
>Liste des Utilisateurs</h4>
      </div>
      <div class="rightContent flex">
        <NuxtLink to="/users/add">
          <button
            type="button"
            class="inline-flex items-center ml-2 text-gray-500 bg-cyan-500 hover:bg-gray-100 font-medium rounded-xl text-sm px-3 py-2 dark:bg-cyan-500 dark:text-white dark:hover:bg-gray-700"
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
        class="w-full table-auto  rounded-xl text-sm text-left rtl:text-right "        :class="{ '': !isDarkMode, 'text-gray-400': isDarkMode }"

      >
        <thead
          class="text-xs text-gray-700 uppercase "
          :class="{
            'text-white bg-cyan-500': !isDarkMode,
            'bg-gray-700 text-gray-400 ': isDarkMode,
          }"
        >
          <tr>
                      <th scope="col" class="px-6 py-3">ID</th>

            <th scope="col" class="px-6 py-3">Prenom et Nom</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Role</th>
     
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="border-b "
              :class="{
              'bg-white hover:bg-cyan-200 text-cyan-500': !isDarkMode,
              'border-gray-700 bg-gray-800 hover:bg-gray-600': isDarkMode,
            }"
            v-for="(user, index) in users"
            :key="index"
          >
                      <td class="px-6 py-4">{{ user.id }}</td>

            <th
              scope="row"
              class="px-6 py-4 font-medium  whitespace-nowrap "
                :class="{
              'bg-white hover:bg-cyan-200 text-cyan-500': !isDarkMode,
              'border-gray-700 bg-gray-800 hover:bg-gray-600': isDarkMode,
            }"
            >
              {{ user.name}}
            </th>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">{{ user.role }}</td>
           <td class="px-6 py-4 relative">
    <img
      @click="toggleDropdown(user.id)"
      :src="require(`@/assets/svg/menu.svg`)"
      alt=""
      class="cursor-pointer"
    />
    <div v-if="showDropdown[user.id]" class="dropdown font-semibold">
      <NuxtLink :to="`/users/show/${user.id}`">
        <button @click="toggleDropdown(user.id)">Voir</button>
      </NuxtLink>
      <NuxtLink :to="`/users/edit/${user.id}`">
        <button @click="toggleDropdown(user.id)">Modifier</button>
      </NuxtLink>
      <button @click="deleteuser(user.id)">Supprimer</button>
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
      isDarkMode:false,
      users: [],
    showDropdown: {},
          userDetails: {
        employes_id: '',
        name: '',
        role: '',
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

        const response = await axios.get(`${apiUrl}/api/v1/users/list`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
console.log(response);
        this.users = response.data.users.data;
      } catch (error) {
        console.error("Error fetching data from the API", error);
      }
    },
  async deleteuser(userId) {
  try {
    let token = null;

    if (process.client) {
      token = localStorage.getItem("token");
    }

    if (!token || !userId) {
      console.error("Invalid token or user ID");
      return;
    }

    const response = await axios.delete(
      `http://127.0.0.1:8000/api/v1/users/delete/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      console.log("user deleted successfully");
      this.fetchData();
    } else {
      console.error("API Error. Status:", response.status);
    }
  } catch (error) {
    console.error("Error deleting user", error);
  }
}
,

  toggleDropdown(userId) {
    this.$set(this.showDropdown, userId, !this.showDropdown[userId]);
  },


   

    async adduser() {
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

        const employesId = this.userDetails.employes_id;
        const dateDebut = this.userDetails.date_debut;
        const dateFin = this.userDetails.date_fin;
        const pointsPerdus = this.userDetails.points_perdues;

        const response = await axios.post(
          `http://127.0.0.1:8000/api/v1/users/store`,
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

        console.log("user ajoutée avec succès:", response.data);

      } catch (error) {
        console.error("Erreur lors de l'ajout de l'user", error);
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
