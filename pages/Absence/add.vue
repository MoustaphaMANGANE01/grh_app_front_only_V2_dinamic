<template>
  <div class="p-20">
    <div class="dark:bg-gray-500 p-10 overflow-hidden shadow rounded-lg border">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-2xl leading-6 font-bold text-white">Enregistrer une absence</h3>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <form @submit.prevent="submitForm">
      <div class="mb-4">
            <label for="employes_id" class="block pt-10 text-sm font-bold text-white">
              Employé
            </label>
            <select v-model="employes_id" name="employes_id" id="employes_id" class="mt-1 p-2 w-full border rounded-md">
              <option v-for="employe in employes" :key="employe.id" :value="employe.id">
                {{ employe.prenom }} {{ employe.nom }}
              </option>
            </select>
          </div>

          <div class="mb-4">
            <label for="motif" class="block text-sm font-bold text-white">Motif de l'absence</label>
            <input v-model="motif" type="text" name="motif" id="motif" class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4">
            <label for="conge" class="block text-sm font-bold text-white">Congé</label>
            <input v-model="conge" type="text" name="conge" id="conge" class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4">
            <label for="date_debut" class="block text-sm font-bold text-white">Date de début</label>
            <input v-model="date_debut" type="date" name="date_debut" id="date_debut" class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4">
            <label for="date_fin" class="block text-sm font-bold text-white">Date de fin</label>
            <input v-model="date_fin" type="date" name="date_fin" id="date_fin" class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4">
            <label for="points_perdues" class="block text-sm font-bold text-white">Points perdus</label>
            <input v-model="points_perdues" type="text" name="points_perdues" id="points_perdues" class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4">
            <label for="justifie" class="block text-sm font-bold text-white">Justifié</label>
            <input v-model="justifie" type="text" name="justifie" id="justifie" class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="flex items-center">
            <button type="submit" class="bg-blue-500 text-white flex justify-center w-full py-2 rounded">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      employes: [],
      employes_id: '',
      motif: '',
      conge: '',
      date_debut: '',
      date_fin: '',
      points_perdues: '',
      justifie: '',
    };
  },
  mounted() {
    this.fetchEmployes();
    console.log(fetchEmployes);
  },
  methods: {
     async fetchEmployes() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/employes/list');
      this.employes = response.data.data;
    } catch (error) {
      console.error('Erreur lors de la récupération de la liste des employés', error);
    }
  },
    submitForm() {
      const token = localStorage.getItem('token');
console.log(token);
      if (!token) {
        console.error("Pas de jeton d'authentification disponible. Assurez-vous que l'utilisateur est authentifié.");
        return;
      }

      const formData = {
        employes_id: this.employes_id,
        motif: this.motif,
        conge: this.conge,
        date_debut: this.date_debut,
        date_fin: this.date_fin,
        points_perdues: this.points_perdues,
        justifie: this.justifie,
      };

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      axios.post('http://127.0.0.1:8000/api/v1/absences/store', formData, { headers })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de l\'envoi de la requête :', error);
          
        });
    },
  },
};
</script>


<style lang="scss" scoped>
</style>
