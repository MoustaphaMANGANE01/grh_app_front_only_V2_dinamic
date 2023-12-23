<template>
  <div class="p-4 lg:p-28 sm:pt-20 sm:pl-20 md:pl-20 h-full dark:bg-gray-900">
    <div class="headTitle flex flex-col lg:flex-row mt-20 justify-between mb-4">
      <div class="leftTitle mb-2 lg:mb-0">
        <h4
          class="text-2xl font-bold"
          :class="{ 'text-gray-800': !isDarkMode, 'text-white': isDarkMode }"
        >
          Liste des Demandes
        </h4>
      </div>
       <div v-if="user.role == 'employe'" class="rightContent">
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
        </div>
    </div>

    <div class="shadow-md overflow-x-auto sm:rounded-lg">
      <table
        class="w-full table-auto rounded-xl text-sm text-left rtl:text-right"
        :class="{ '': !isDarkMode, 'text-gray-400': isDarkMode }"
      >
        <thead
          class="text-xs text-gray-700 uppercase"
          :class="{
            'text-white bg-cyan-500': !isDarkMode,
            'bg-gray-700 text-gray-400 ': isDarkMode,
          }"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>

            <th scope="col" class="px-6 py-3">Prenom et Nom</th>
            <th scope="col" class="px-6 py-3">Intitulé de la demande</th>

            <th scope="col" class="px-6 py-3">Date Debut de la Demande</th>
            <th scope="col" class="px-6 py-3">Date de Fin de la Demande</th>
            <th scope="col" class="px-6 py-3">Justification</th>
            <th scope="col" class="px-6 py-3">Commentaire</th>

            <th scope="col" v-if="user.role == 'admin'" class="px-6 py-3">Status</th>
            <th scope="col" v-if="user.role == 'admin'" class="px-6 py-3">Téléchargement</th>

            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="border-b"
            :class="{
              'bg-white hover:bg-cyan-200 text-cyan-500': !isDarkMode,
              'border-gray-700 bg-gray-800 hover:bg-gray-600': isDarkMode,
            }"
            v-for="(demande, index) in demandes"
            :key="index"
          >
            <td class="px-6 py-4">{{ demande.id }}</td>

            
            <td class="px-6 py-4">
              {{ demande.employe.name }}
              {{ demande.employe.prenom }}
            </td>
            <td class="px-6 py-4">{{ demande.intitule }}</td>

            <td class="px-6 py-4">{{ demande.date_debut }}</td>

            <td class="px-6 py-4">{{ demande.date_fin }}</td>
            <td class="px-6 py-4">{{ demande.justifie }}</td>
            <td class="px-6 py-4">
              {{ demande.commentaire ?? "Pas de commentaire" }}
            </td>
            <td v-if="user.role == 'admin'" :class="getStatusClass(demande.status)" class="px-6  py-4">{{ demande.status }}</td>
            <td v-if="user.role == 'admin'" class="px-6 py-4">
              <button @click="downloadFile(demande.id)">
                Télécharger
              </button>
            </td>

            <td class="px-6 py-4 relative">
              <img
                @click="toggleDropdown(demande.id)"
                :src="require(`@/assets/svg/menu.svg`)"
                alt=""
                class="cursor-pointer"
              />
              <div
                v-if="showDropdown[demande.id]"
                class="dropdown font-semibold"
              >
                <!-- <NuxtLink :to="`/demande/show/${demande.id}`">
                  <button @click="toggleDropdown(demande.id)">
                    Voir
                  </button>
                </NuxtLink> -->
                <!-- <NuxtLink :to="`/bs/edit/${demande.id}`">
                  <button @click="toggleDropdown(demande.id)">
                    Modifier
                  </button>
                </NuxtLink> -->
                <button @click="deletedemande(demande.id)">
                  Supprimer
                </button>
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
        user:{},
      isDarkMode: false,
      demandes: [],
      showDropdown: {},
      demandeDetails: {
        employe_id: "",
        mois: "",
        annee: "",
        commentaire: "",
        prenom: "",
        name: "",
        file: null,
        employe: {},
      },
      employes: [],
    };
  },
  mounted() {
    console.log("Component is mounted");
    this.fetchData();
    this.me ()
  },
  methods: {
    async downloadFile(demandeId) {
      try {
        const token = localStorage.getItem("token");

        if (!token || !demandeId) {
          console.error("Invalid token or demande ID");
          return;
        }
        console.log("Token:", token);
        const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

        const response = await axios.get(
          `${apiUrl}/api/v1/demandes/download/${demandeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            responseType: "blob",
          }
        );

        const blob = new Blob([response.data]);

        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `demande_${demandeId}.pdf`
        );
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error downloading demande file", error);
      }
    },
 getStatusClass(status) {
      return {
        'text-green-500': status === 'Approuvé',
        'text-red-500': status === 'Rejeté',
        'text-gray-500': status === 'En attente',
      };
    },
    async me() {
      try {
        const userToken = localStorage.getItem("token");

        if (!userToken) {
          console.error(
            "Le jeton d'utilisateur est introuvable dans le localStorage"
          );
          return;
        }

        const response = await this.$axios.get(
          "http://127.0.0.1:8000/api/v1/auth/me",
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        console.log("Response Status:", response.status);
        console.log("Response Data:", response.data.status);

        if (response.data.status == "success") {
          const rp = response.data.data;
          this.user = rp;
          console.log("Récupération réussie");
          // this.$router.push("/index");
        } else {
          console.error("Échec de la récupération :", response.data.message);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération :", error.message);
      }
    },
    async fetchEmployeeDetails(employeId) {
      try {
        const token = localStorage.getItem("token");

        if (!token || !employeId) {
          console.error("Invalid token or employeId", token, employeId);
          return {};
        }

        const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

        console.log("Fetching employe details for employeId:", employeId);

        const response = await axios.get(
          `${apiUrl}/api/v1/employes/show/${employeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        if (response.status === 200) {
          const employeDetails = response.data.data;
          console.log("Employe details:", employeDetails);
          return employeDetails;
        } else {
          console.error("API Error. Status:", response.status);
          return {};
        }
      } catch (error) {
        console.error("Error fetching employe details", error);
        return {};
      }
    },

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

        const response = await axios.get(
          `${apiUrl}/api/v1/demandes/list`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const demandes = response.data.data;

          for (const demande of demandes) {
            console.log(demande);
            const employeDetails = await this.fetchEmployeeDetails(
              demande.employes_id
            );
            demande.prenom = employeDetails.prenom;
            demande.nom = employeDetails.name;
          }

          this.demandes = demandes;
          console.log(this.demandes);
        } else {
          console.error("API Error. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data from the API", error);
      }
    },

    async deletedemande(demandeId) {
      try {
        let token = null;

        if (process.client) {
          token = localStorage.getItem("token");
        }

        if (!token || !demandeId) {
          console.error("Invalid token or demande ID");
          return;
        }

        const response = await axios.delete(
          `http://127.0.0.1:8000/api/v1/demandes/delete/${demandeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          console.log("demande deleted successfully");
          this.fetchData();
        } else {
          console.error("API Error. Status:", response.status);
        }
      } catch (error) {
        console.error("Error deleting demande", error);
      }
    },
    toggleDropdown(demandeId) {
      this.$set(
        this.showDropdown,
        demandeId,
        !this.showDropdown[demandeId]
      );
    },

    async adddemande() {
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

        const employesId = this.demandeDetails.employes_id;
        const dateDebut = this.demandeDetails.date_debut;
        const dateFin = this.demandeDetails.date_fin;
        const pointsPerdus = this.demandeDetails.points_perdues;

        const response = await axios.post(
          `http://127.0.0.1:8000/api/v1/demandes/store`,
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

        console.log("demande ajoutée avec succès:", response.data);
      } catch (error) {
        console.error("Erreur lors de l'ajout de l'demande", error);
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
