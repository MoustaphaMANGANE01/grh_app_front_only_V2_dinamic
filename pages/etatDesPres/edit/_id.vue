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
          Enregistrer un Utilisateur
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
                  for="prenom"
                  class="block text-sm font-semibold"
                  :class="{ 'text-gray-100': isDarkMode, 'text-gray-900': !isDarkMode }"
                >
                  Prenom et Nom
                </label>
                <input
                  v-model="userDetails.name"
                  type="text"
                  name="prenom"
                  id="prenom"
                  class="mt-1 p-2 w-full border rounded-md"
                  :class="{ 'text-gray-100': isDarkMode, 'text-gray-900': !isDarkMode }"
                />
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="email"
                  class="block text-sm font-semibold"
                  :class="{ 'text-gray-100': isDarkMode, 'text-gray-900': !isDarkMode }"
                >
                  Email
                </label>
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  class="mt-1 p-2 w-full border rounded-md"
                  :class="{ 'text-gray-100': isDarkMode, 'text-gray-900': !isDarkMode }"
                />
              </div>
            </div>
          </div>

          <div class="flex-col">
            <div class="md:flex sm:flex-row sm:p-0 p-2">
              <div class="mb-4 flex-1 p-2">
                <label
                  for="role"
                  class="block text-sm font-semibold"
                  :class="{ 'text-gray-100': isDarkMode, 'text-gray-900': !isDarkMode }"
                >
                  Rôle
                </label>
                <select
                  v-model="role"
                  name="role"
                  id="role"
                  :class="{ 'bg-gray-500': isDarkMode, 'bg-white': !isDarkMode }"
                  class="mt-1 p-2 w-full border rounded-md"
                >
                  <option value="admin">Admin</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="employe">Employé</option>
                </select>
              </div>

              <div class="mb-4 flex-1 p-2">
                <label
                  for="password"
                  class="block text-sm font-semibold"
                  :class="{ 'text-gray-100': isDarkMode, 'text-gray-900': !isDarkMode }"
                >
                  Mot de Passe
                </label>
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  class="mt-1 p-2 w-full border rounded-md"
                  :class="{ 'text-gray-100': isDarkMode, 'text-gray-900': !isDarkMode }"
                  :minlength="minPasswordLength"
                />
              </div>
            </div>
          </div>

          <div class="p-2">
            <div class="flex items-center">
              <button
                type="submit"
                :class="{ 'bg-gray-900': isDarkMode, 'bg-blue-900': !isDarkMode }"
                class="flex justify-center w-full py-2 rounded-xl"
              >
                Enregistrer
              </button>
            </div>
          </div>

          <!-- <div v-if="error" class="text-red-500 mt-2">{{ error }}</div> -->
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
      userDetails:{
        name:"",
      },
      isDarkMode: false,
      employes: [],
      selectedEmploye: null,
      role: null,
      email: "",
      password: "",
      name: null,
       minPasswordLength: 8,
       userId: null,
    };
  },

  mounted() {
    this.fetchEmployes();
    this.fetchuserDetails();
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
   async fetchuserDetails() {
  try {
    const token = localStorage.getItem("token");
    const userId = this.$route.params.id;

    console.log("user ID:", userId);
    if (!token || !userId) {
      console.error("Invalid token or user ID");
      return;
    }

    const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

    const responseuser = await axios.get(
      `${apiUrl}/api/v1/users/show/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

console.log(responseuser);
    const userDetails = responseuser.data.user;
    this.selectedEmploye = userDetails.employes_id;
    this.role = userDetails.role;
    this.email = userDetails.email;
    this.password = userDetails.password;
    this.userDetails.name = userDetails.name;

  } catch (error) {
    console.error("Error fetching user details from the API", error);
  }
},

async submitForm() {
  try {
    await this.fetchEmployes();
    const userId = this.$route.params.id;

    const token = localStorage.getItem("token");
    const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

    const response = await axios.put(
      `${apiUrl}/api/v1/users/update/${userId}`,  
      {
        employes_id: this.selectedEmploye,
        role: this.role,
        email: this.email,
        password: this.password,
        name: this.name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200 && response.data.status === "success") {
      console.log("Utilisateur mis à jour avec succès");
      this.userId = null; 
      this.selectedEmploye = null; 
      this.role = "";
      this.email = "";
      this.password = "";
      this.name = "";
    } else {
      this.$router.push({ name: "users" });
      console.error("API Error. Status:", response.status);
    }
  } catch (error) {
    console.error("Error submitting form", error);
  }
}


  },
};
</script>

<style scoped>
/* Ajoutez vos styles CSS spécifiques au composant ici */
</style>
