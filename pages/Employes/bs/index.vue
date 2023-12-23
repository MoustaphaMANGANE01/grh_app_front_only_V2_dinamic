<template>
  <div class="p-4 lg:p-28 sm:pt-20 sm:pl-20 md:pl-20 h-full dark:bg-gray-900">
    <div class="headTitle flex flex-col lg:flex-row mt-20 justify-between mb-4">
      <div class="leftTitle mb-2 lg:mb-0">
        <h4
          class="text-2xl font-bold"
          :class="{ 'text-gray-800': !isDarkMode, 'text-white': isDarkMode }"
        >
          Liste des Bulletins de Salaires
        </h4>
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
            <th scope="col" class="px-6 py-3">Bulletin de Salaire</th>

            <th scope="col" class="px-6 py-3">Mois</th>
            <!-- :            <th scope="col" class="px-6 py-3">Justification</th> -->
            <th scope="col" class="px-6 py-3">Année</th>
            <th scope="col" class="px-6 py-3">Commentaire</th>
            <th scope="col" class="px-6 py-3">Téléchargement</th>

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
            v-for="(bulletinSalaire, index) in bulletinSalaires"
            :key="index"
          >
            <td class="px-6 py-4">{{ bulletinSalaire.id }}</td>

            <!-- <td
              class="px-6 py-4 font-medium whitespace-nowrap"
              :class="{
                'bg-white hover:bg-cyan-200 text-cyan-500': !isDarkMode,
                'border-gray-700 bg-gray-800 hover:bg-gray-600': isDarkMode,
              }"
            >
              <span v-for="bulletinSalaire in bulletinSalaires" :key="bulletinSalaire.id">
                {{ bulletinSalaire.employe.name }} {{ bulletinSalaire.employe.name }}
                <br v-if="bulletinSalaire.employe.name.length > 1" />
              </span>
            </td> -->
            <td class="px-6 py-4">{{ bulletinSalaire.employe.name }} {{ bulletinSalaire.employe.prenom }}</td>
            <td class="px-6 py-4">{{ bulletinSalaire.file }}</td>

            <td class="px-6 py-4">{{ bulletinSalaire.mois }}</td>
            <!-- <td class="px-6 py-4">{{ bulletinSalaire.justifie }}</td> -->
            <td class="px-6 py-4">{{ bulletinSalaire.annee }}</td>
            <td class="px-6 py-4">{{ bulletinSalaire.commentaire ?? 'Pas de commentaire' }}</td>
            <td class="px-6 py-4">
              <button @click="downloadFile(bulletinSalaire.id)">
                Télécharger
              </button>
            </td>

            <td class="px-6 py-4 relative">
              <img
                @click="toggleDropdown(bulletinSalaire.id)"
                :src="require(`@/assets/svg/menu.svg`)"
                alt=""
                class="cursor-pointer"
              />
              <div
                v-if="showDropdown[bulletinSalaire.id]"
                class="dropdown font-semibold"
              >
                <!-- <NuxtLink :to="`/bulletinSalaire/show/${bulletinSalaire.id}`">
                  <button @click="toggleDropdown(bulletinSalaire.id)">
                    Voir
                  </button>
                </NuxtLink> -->
                <!-- <NuxtLink :to="`/bs/edit/${bulletinSalaire.id}`">
                  <button @click="toggleDropdown(bulletinSalaire.id)">
                    Modifier
                  </button>
                </NuxtLink> -->
                <button @click="deletebulletinSalaire(bulletinSalaire.id)">
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
      isDarkMode: false,
      bulletinSalaires: [],
      showDropdown: {},
      bulletinSalaireDetails: {
        employe_id: "",
        mois: "",
        annee: "",
        commentaire: "",
        prenom: "",
        name: "",
        file: null,
        employe:{},
      },
      employes: [],
    };
  },
  mounted() {
    console.log("Component is mounted");
    this.fetchData();
  },
  methods: {
    async downloadFile(bulletinSalaireId) {
      try {
        const token = localStorage.getItem("token");

        if (!token || !bulletinSalaireId) {
          console.error("Invalid token or bulletinSalaire ID");
          return;
        }
        console.log("Token:", token);
        const apiUrl = process.env.VUE_APP_API_URL || "http://127.0.0.1:8000";

        const response = await axios.get(
          `${apiUrl}/api/v1/bulletinSalaires/download/${bulletinSalaireId}`,
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
          `bulletinSalaire_${bulletinSalaireId}.pdf`
        );
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error downloading bulletinSalaire file", error);
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
          `${apiUrl}/api/v1/bulletinSalaires/list`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const bulletinSalaires = response.data.data;

          for (const bulletinSalaire of bulletinSalaires) {
              console.log(bulletinSalaire);
            const employeDetails = await this.fetchEmployeeDetails(
              bulletinSalaire.employes_id
            );
            bulletinSalaire.prenom = employeDetails.prenom;
            bulletinSalaire.nom = employeDetails.name;
          }

          this.bulletinSalaires = bulletinSalaires;
          console.log(this.bulletinSalaires);
        } else {
          console.error("API Error. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data from the API", error);
      }
    },

    async deletebulletinSalaire(bulletinSalaireId) {
      try {
        let token = null;

        if (process.client) {
          token = localStorage.getItem("token");
        }

        if (!token || !bulletinSalaireId) {
          console.error("Invalid token or bulletinSalaire ID");
          return;
        }

        const response = await axios.delete(
          `http://127.0.0.1:8000/api/v1/bulletinSalaires/delete/${bulletinSalaireId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          console.log("bulletinSalaire deleted successfully");
          this.fetchData();
        } else {
          console.error("API Error. Status:", response.status);
        }
      } catch (error) {
        console.error("Error deleting bulletinSalaire", error);
      }
    },
    toggleDropdown(bulletinSalaireId) {
      this.$set(
        this.showDropdown,
        bulletinSalaireId,
        !this.showDropdown[bulletinSalaireId]
      );
    },

    async addbulletinSalaire() {
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

        const employesId = this.bulletinSalaireDetails.employes_id;
        const dateDebut = this.bulletinSalaireDetails.date_debut;
        const dateFin = this.bulletinSalaireDetails.date_fin;
        const pointsPerdus = this.bulletinSalaireDetails.points_perdues;

        const response = await axios.post(
          `http://127.0.0.1:8000/api/v1/bulletinSalaires/store`,
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

        console.log("bulletinSalaire ajoutée avec succès:", response.data);
      } catch (error) {
        console.error("Erreur lors de l'ajout de l'bulletinSalaire", error);
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
