<template>
  <div class="flex justify-center py-20">
    <div class="rounded-xl  p-10 h-full  w-full mx-48"
                       :class="{'bg-gray-800 text-gray-500':isDarkMode, 'bg-cyan-100':!isDarkMode}"
>
      <div class="text-2xl font-bold">
        <h4>Profile de l'employé</h4>
      </div>

      <div>
        <div class="rounded-xl flex justify-center">
          <svg
            width="200px"
            height="200px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z"
                fill="#858585"
              ></path>
            </g>
          </svg>
        </div>
        <div class="flex justify-between w-full font-semibold">
          <div class="flex flex-col w-1/2 p-2">
            <label for="">Prenom & Nom</label>
              <div class="rounded-xl py-2 bg-gray-500 flex-col flex justify-center items-center text-gray-200 w-full mt-2">
              {{ employeeData.employer.prenom }}               {{ employeeData.employer.name }}

            </div>
          </div>
          <!-- <div class="flex flex-col w-1/2 p-2">
            <label for="">Nom</label>
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
            </div>
          </div> -->
        </div>

        <!-- <div class="font-semibold">
          <div class="flex flex-col p-2">
            <label for="">Email</label>
            <div class="rounded-xl py-5 bg-gray-500 text-gra w-full mt-2"></div>
          </div>
        </div> -->
        <div class="flex-col">
          <h5 class="font-bold text-xl text-gray-500 p-2">Contacts</h5>
          <div class="md:flex sm:flex-row sm:p-0 p-2">
            <div class="mb-4 flex-1 p-2">
              <label for="phone" class="block text-sm font-semibold"
                >Téléphone</label
              >
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
                {{ employeeData.employer.phone }}
              </div>
            </div>

            <div class="mb-4 flex-1 p-2">
              <label for="adresse" class="block text-sm font-semibold"
                >Adresse</label
              >
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
                {{ employeeData.employer.adresse }}
              </div>
            </div>

            <div class="mb-4 flex-1 p-2">
              <label for="email" class="block text-sm font-semibold"
                >Email</label
              >
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
                {{ employeeData.employer.email }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex-col">
          <h5 class="font-bold text-xl text-gray-500 p-2">Infos Personnels</h5>

          <div class="md:flex sm:flex-row sm:p-0 p-2">
            <div class="mb-4 flex-1 p-2">
              <label for="sexe" class="block text-sm font-semibold"
                >Genre</label
              >
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
                {{ employeeData.employer.sexe }}
              </div>
            </div>

            <div class="mb-4 flex-1 p-2">
              <label
                for="situation_matrimonial"
                class="block text-sm font-semibold"
                >S.Matrimoniale</label
              >

              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
                {{ employeeData.employer.situation_matrimonial }}
              </div>
            </div>

            <div class="mb-4 flex-1 p-2">
              <label for="nombre_enfants" class="block text-sm font-semibold"
                >Nombre d'Enfants</label
              >
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
                {{ employeeData.employer.nombre_enfants }}
              </div>
            </div>

            <div class="mb-4 flex-1 p-2">
              <label for="date_de_naissance" class="block text-sm font-semibold"
                >Date de Naissance</label
              >
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
                {{ formatDisplayDate(employeeData.employer.date_de_naissance) }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex-col">
          <h5 class="font-bold text-xl text-gray-500 p-2">Infos Entreprise</h5>
          <div class="md:flex sm:flex-row sm:p-0 p-2">
            <div class="mb-4 flex-1 p-2">
              <label for="type_de_contrat" class="block text-sm font-semibold"
                >Type de Contrat</label
              >
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
                {{ employeeData.employer.type_de_contrat }}
              </div>
            </div>

            <div class="mb-4 flex-1 p-2">
              <label for="salaire" class="block text-sm font-semibold"
                >Salaire</label
              >
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
                {{ employeeData.employer.salaire }}
              </div>
            </div>

            <div class="mb-4 flex-1 p-2">
              <label for="date_entree" class="block text-sm font-semibold"
                >Date d'Entrée</label
              >
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
                {{ formatDisplayDate(employeeData.employer.date_entree) }}
              </div>
            </div>

            <div class="mb-4 flex-1 p-2">
              <label for="role" class="block text-sm font-semibold">Rôle</label>
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
                {{ employeeData.employer.role }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex-col">
          <h5 class="font-bold text-xl text-gray-500 p-2">Soldes</h5>
          <div class="md:flex sm:flex-row sm:p-0 p-2">
            <div class="mb-4 flex-1 p-2">
              <label for="solde_points" class="block text-sm font-semibold"
                >Solde Points</label
              >
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
                {{ employeeData.employer.solde_points }}
              </div>
            </div>

            <div class="mb-4 flex-1 p-2">
              <label for="solde_conges" class="block text-sm font-semibold"
                >Solde Congés</label
              >
              <div class="rounded-xl py-2 bg-gray-500 flex justify-center items-center text-gray-200 w-full mt-2">
                {{ employeeData.employer.solde_conges }}
              </div>
            </div>
          </div>
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
      isDarkMode:false,
       employeeData: {
          employer: {
          id: null,
          name: "",
          prenom: "",
          photo: null,
          adresse: "",
          email: "",
          sexe: "",
          phone: "",
          situation_matrimonial: "",
          nombre_enfants: null,
          type_de_contrat: "",
          date_de_naissance: "",
          salaire: null,
          date_entree: "",
          solde_points: null,
          solde_conges: null,
          role: "",
          created_at: "",
          updated_at: "",
          document: null,
        },
       },
    };
  },
methods:{formatDisplayDate(date) {
      return new Date(date).toLocaleDateString("fr-FR");
    },},
  mounted() {
    try {
      const employeeId = this.$route.params.id;
      console.log(employeeId);
      const token = localStorage.getItem("token");
      console.log(token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      axios.get(`http://127.0.0.1:8000/api/v1/employes/show/${employeeId}`)
        .then((response) => {
          if (response.status === 200) {
            console.log("API Response:", response.data);
            this.employeeData= response.data;  
          } else {
            console.error("API Error. Status:", response.status);
          }
        })
        .catch((error) => {
          console.error("Error fetching data from the API", error);
        });
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  },
};
</script>



<style lang="scss" scoped>
</style>