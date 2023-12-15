<template>
  <div class="p-20 flex justify-center ">
    <div class="dark:bg-white p-5 overflow-hidden shadow rounded-lg border w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
      <div class="px-2 py-5 sm:px-6 bg-gray-900 flex justify-center rounded-xl  ">
        <h2 class="md:text-2xl sm:text-sm leading-6 font-bold  text-white ">Enregistrer un employé</h2>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <form @submit.prevent="submitForm">

<div class="flex-col">
<h5 class="font-bold text-xl text-gray-500 p-2">Identité</h5>
<div class="md:flex sm:flex-row sm:p-0 p-2">
    <div class="mb-4 flex-1 p-2">
        <label for="prenom" class="block text-sm font-semibold text-gray-900">Prénom</label>
        <input v-model="prenom" type="text" name="prenom" id="prenom" class="mt-1 p-2 w-full border rounded-md" />
    </div>

    <div class="mb-4 flex-1 p-2">
        <label for="nom" class="block text-sm font-semibold text-gray-900">Nom</label>
        <input v-model="name" type="text" name="nom" id="nom" class="mt-1 p-2 w-full border rounded-md" />
    </div>
</div>
</div>

<div class="flex-col">
<h5 class="font-bold text-xl text-gray-500 p-2">Contacts</h5>
<div class="md:flex sm:flex-row sm:p-0 p-2">
  <div class="mb-4 flex-1 p-2">
            <label for="phone" class="block text-sm font-semibold text-gray-900">Téléphone</label>
            <input v-model="phone" type="tel" name="telephone" id="phone" class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4 flex-1 p-2">
            <label for="adresse" class="block text-sm font-semibold text-gray-900">Adresse</label>
            <input v-model="adresse" type="text" name="adresse" id="adresse" class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4 flex-1 p-2">
            <label for="email" class="block text-sm font-semibold text-gray-900">Email</label>
            <input v-model="email" type="email" name="email" id="email" class="mt-1 p-2 w-full border rounded-md" />
          </div>
</div>
</div>

<div class="flex-col">
<h5 class="font-bold text-xl text-gray-500 p-2">Infos Personnels</h5>

<div class="md:flex sm:flex-row sm:p-0 p-2">



          <div class="mb-4 flex-1 p-2">
            <label for="sexe" class="block text-sm font-semibold text-gray-900">Genre</label>
            <input v-model="sexe" type="text" name="sexe" id="sexe" class="mt-1 p-2 w-full border rounded-md" />
          </div>

        

          <div class="mb-4 flex-1 p-2">
            <label for="situation_matrimonial" class="block text-sm font-semibold text-gray-900">S.Matrimoniale</label>
        
                       <select v-model="situation_matrimonial" aria-placeholder="Situation Matrimoniale" type="text" name="situation_matrimonial" id="situation_matrimonial" class="mt-1 p-2 w-full border rounded-md" >
    <option value="celibataire">Célibataire</option>
    <option value="marier">Marié</option>
    <option value="veuf">Veuve</option>
  </select>
          </div>

     <div class="mb-4 flex-1 p-2">
  <label for="nombre_enfants" class="block text-sm font-semibold text-gray-900">Nombre d'Enfants</label>
  <input v-model="nombre_enfants" type="number" name="nombre_enfants" id="nombre_enfants" class="mt-1 p-2 w-full border rounded-md" />
</div>

          <div class="mb-4 flex-1 p-2">
            <label for="date_de_naissance" class="block text-sm font-semibold text-gray-900">Date de Naissance</label>
            <input v-model="date_de_naissance" type="date" name="date_de_naissance" id="date_de_naissance" class="mt-1 p-2 w-full border rounded-md" />
          </div>
</div>
</div>

<div class="flex-col">
<h5 class="font-bold text-xl text-gray-500 p-2">Infos Entreprise</h5>
<div class="md:flex sm:flex-row sm:p-0 p-2">


          <div class="mb-4 flex-1 p-2">
            <label for="type_de_contrat" class="block text-sm font-semibold text-gray-900">Type de Contrat</label>
              <select v-model="type_de_contrat" type="text" name="type_de_contrat" id="type_de_contrat" class="mt-1 p-2 w-full border rounded-md">
    <option value="cdi">CDI</option>
    <option value="cdd">CDD</option>
    <option value="stage">Stage</option>
    <option value="prestation">Prestataire</option>
  </select>
          </div>

          <div class="mb-4 flex-1 p-2">
            <label for="salaire" class="block text-sm font-semibold text-gray-900">Salaire</label>
            <input v-model="salaire" type="number" name="salaire" id="salaire" class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4 flex-1 p-2">
            <label for="date_entree" class="block text-sm font-semibold text-gray-900">Date d'Entrée</label>
            <input v-model="date_entree" type="date" name="date_entree" id="date_entree" class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4 flex-1 p-2">
  <label for="role" class="block text-sm font-semibold text-gray-900">Rôle</label>
  <select v-model="role" name="role" id="role" class="mt-1 p-2 w-full border rounded-md">
    <option value="admin">Admin</option>
    <option value="supervisor">Supervisor</option>
    <option value="employe">Employé</option>
  </select>
</div>
</div>
</div>
<div class="flex-col">
<h5 class="font-bold text-xl text-gray-500 p-2">Soldes</h5>
<div class="md:flex sm:flex-row sm:p-0 p-2">


          <div class="mb-4 flex-1 p-2 ">
            <label for="solde_points" class="block text-sm font-semibold text-gray-900">Solde Points</label>
            <input v-model="solde_points" type="number" name="solde_points" id="solde_points" class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4 flex-1 p-2">
            <label for="solde_conges" class="block text-sm font-semibold text-gray-900">Solde Congés</label>
            <input v-model="solde_conges" type="number" name="solde_conges" id="solde_conges" class="mt-1 p-2 w-full border rounded-md" />
          </div>
</div>
</div>
<div class="p-2 ">

    <div class="flex items-center ">
      <button type="submit" class="bg-gray-900 text-white flex justify-center w-full  py-2 rounded-xl">
        Enregistrer
      </button>
    </div>
</div>
         
    <div v-if="error" class="text-red-500 mt-2">{{ error }}</div>

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
      prenom: '',
      name: '',
      adresse: '',
      email: '',
      sexe: '',
      phone: '',
      situation_matrimonial: '',
      nombre_enfants: '',
      type_de_contrat: '',
      date_de_naissance: '',
      salaire: '',
      date_entree: '',
      solde_points: '',
      solde_conges: '',
      role:'',
      error: null,
    };
  },
  methods: {
    async submitForm() {
      try {
        if (process.client) {
          const token = localStorage.getItem('token');

          if (!token) {
            console.error("Pas de jeton d'authentification disponible. Assurez-vous que l'utilisateur est authentifié.");
            return;
          }

          const response = await axios.post('http://127.0.0.1:8000/api/v1/employes/store', {
            prenom: this.prenom,
            name: this.name,
            adresse: this.adresse,
            email: this.email,
            sexe: this.sexe,
            phone: this.phone,
            situation_matrimonial: this.situation_matrimonial,
            nombre_enfants: this.nombre_enfants,
            type_de_contrat: this.type_de_contrat,
            date_de_naissance: this.date_de_naissance,
            salaire: this.salaire,
            date_entree: this.date_entree,
            solde_points: this.solde_points,
            solde_conges: this.solde_conges,
            role:this.role
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          console.log(response.data);
          this.$router.push("/Employes");
        }
      } catch (error) {
        console.error('Erreur lors de l\'enregistrement de l\'employé', error);

        if (error.response) {
          console.log('Statut de la réponse du serveur :', error.response.status);
          console.log('Données de réponse du serveur :', error.response.data);
        }

        this.error = 'Une erreur s\'est produite lors de l\'enregistrement de l\'employé.';
      }
    },
  },
};
</script>

