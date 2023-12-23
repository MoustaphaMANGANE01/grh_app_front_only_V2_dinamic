<template>
  <div class="flex justify-center py-20">
    <div
      class="rounded-xl p-10 h-full w-full mx-48"
      :class="{
        'bg-gray-800 text-gray-500': isDarkMode,
        'bg-white': !isDarkMode,
      }"
    >
      <div class="text-2xl font-bold">
        <h4>Détails</h4>
      </div>

      <div class="flex-col">
        <div class="mb-4 flex-1 p-2">
          <label for="date_fin" class="block text-sm font-semibold"
            >Prenom et Nom</label
          >
          <div
            class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2"
            :class="{ 'bg-gray-500': isDarkMode, 'bg-blue-900': !isDarkMode }"
          >
            {{ details.name || "N/A" }} {{ details.prenom || "N/A" }}
          </div>
        </div>

        <div class="mb-4 flex-1 p-2">
          <label for="motif" class="block text-sm font-semibold"
            >Montant demandé</label
          >
          <div
            class="rounded-xl py-2 flex justify-center items-center text-gray-200 w-full mt-2"
            :class="{ 'bg-gray-500': isDarkMode, 'bg-blue-900': !isDarkMode }"
          >
            {{ details.montant_demande || "N/A" }}
          </div>
        </div>
        <div class="mb-4 flex-1 p-2">
          <label for="date_debut" class="block text-sm font-semibold"
            >Date de la demande</label
          >
          <div
            class="rounded-xl py-2 flex justify-center items-center text-gray-200 w-full mt-2"
            :class="{ 'bg-gray-500': isDarkMode, 'bg-blue-900': !isDarkMode }"
          >
    {{ formatDate(details.date_de_la_demande) || "N/A" }}
          </div>
        </div>
        <div class="mb-4 flex-1 p-2">
          <label for="date_debut" class="block text-sm font-semibold"
            >Date de Remboursement</label
          >
          <div
            class="rounded-xl py-2 flex justify-center items-center text-gray-200 w-full mt-2"
            :class="{ 'bg-gray-500': isDarkMode, 'bg-blue-900': !isDarkMode }"
          >
    {{ formatDate(details.date_de_remboursement) || "N/A" }}
          </div>
        </div>
      </div>

      <div class="mb-4 flex-1 p-2">
        <label for="date_debut" class="block text-sm font-semibold"
          >Montant Remboursé</label
        >
        <div
          class="rounded-xl py-2 flex justify-center items-center text-gray-200 w-full mt-2"
          :class="{ 'bg-gray-500': isDarkMode, 'bg-blue-900': !isDarkMode }"
        >
          {{ details.montant_rembourse || "N/A" }}
        </div>
      </div>
      <div class="mb-4 flex-1 p-2">
        <label for="date_debut" class="block text-sm font-semibold"
          >Montant Restant</label
        >
        <div
          class="rounded-xl py-2 flex justify-center items-center text-gray-200 w-full mt-2"
          :class="{ 'bg-gray-500': isDarkMode, 'bg-blue-900': !isDarkMode }"
        >
          {{ details.montant_restant || "N/A" }}
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
    isDarkMode: false,
    details: {
      name: "",
      prenom: "",
      montant_demande: "",
      date_de_la_demande: "",
      date_de_remboursement: "",
      montant_rembourse: "",
      montant_restant: "",
    },
  };
},


async mounted() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No authToken available. Make sure the user is authenticated.");
      return;
    }

    const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";
    const etatDesPresId = this.$route.params.id;

    const response = await axios.get(`${apiUrl}/api/v1/etats/show/${etatDesPresId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);
    this.details = response.data;

    const employeId = this.details.employe_id; 
    const responseEmploye = await axios.get(`${apiUrl}/api/v1/employes/show/${employeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
console.log(responseEmploye);
    this.details.prenom = responseEmploye.data.data ? responseEmploye.data.data.prenom : "";
    this.details.nom = responseEmploye.data.data ? responseEmploye.data.data.name : "";

  } catch (error) {
    console.error("Error fetching data from the API", error);
  }
},

methods: {
  formatDate(dateString) {
    if (!dateString) return "N/A";

    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  },
},

  
  // methods: {
  //   async fetchuserDetails() {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const userId = this.$route.params.id;

  //       console.log("user ID:", userId);
  //       if (!token || !userId) {
  //         console.error("Invalid token or user ID");
  //         return;
  //       }

  //       const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

  //       const responseuser = await axios.get(
  //         `${apiUrl}/api/v1/users/show/${userId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       console.log(responseuser.data.user);
  //       const userDetails = responseuser.data.user;
  //       this.selectedEmploye = userDetails.employes_id;
  //       this.role = userDetails.role;
  //       this.email = userDetails.email;
  //       this.password = userDetails.password;
  //       this.name = userDetails.name;
  //     } catch (error) {
  //       console.error("Error fetching user details from the API", error);
  //     }
  //   },
  //   // async fetchData() {
  //   //   try {
  //   //     const token = localStorage.getItem("token");
  //   //     const userId = this.$route.params.id;

  //   //     if (!token || !userId) {
  //   //       console.error("Invalid token or user ID");
  //   //       return;
  //   //     }

  //   //     const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

  //   //     // 1. Récupérer les détails de l'user
  //   //     const responseuser = await axios.get(`${apiUrl}/api/v1/users/show/${userId}`, {
  //   //       headers: {
  //   //         Authorization: `Bearer ${token}`,
  //   //       },
  //   //     });

  //   //     // 2. Récupérer les détails de l'employé
  //   //     const employeId = responseuser.data.data.employes_id;
  //   //     console.log(employeId);
  //   //     const responseEmploye = await axios.get(`${apiUrl}/api/v1/users/show/${employeId}`, {
  //   //       headers: {
  //   //         Authorization: `Bearer ${token}`,
  //   //       },
  //   //     });

  //   //     // 3. Mettre à jour les détails dans le composant avec des vérifications de nullité
  //   //     this.userDetails = {
  //   //       ...responseuser.data.data,
  //   //       prenom: responseEmploye.data.data ? responseEmploye.data.data.prenom : '',
  //   //       nom: responseEmploye.data.data ? responseEmploye.data.data.name : '',
  //   //     };

  //   //     // Mettre à jour la variable employe
  //   //     this.employe = responseEmploye.data.data || {};
  //   //     console.log(responseEmploye.data.data);

  //   //   } catch (error) {
  //   //     console.error("Error fetching data from the API", error);
  //   //   }
  //   // },

  //   formatDate(dateString) {
  //     if (!dateString) return "N/A";

  //     const options = { year: "numeric", month: "long", day: "numeric" };
  //     return new Date(dateString).toLocaleDateString("fr-FR", options);
  //   },
  // },
};
</script>

<style scoped>
</style>
