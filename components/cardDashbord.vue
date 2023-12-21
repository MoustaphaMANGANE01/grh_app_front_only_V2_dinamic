<template>
  <div
    :style="{ marginLeft: dynamicMargin }"
    id="nav"
    class="py-20 px-2"
    :class="{ 'bg-gray-900': isDarkMode, 'bg-gray-100': !isDarkMode }"
  >
    <div class="flex justify-start mb-10 mt-5">
      <p
        class="text-2xl font-bold"
        :class="{ 'text-gray-100': isDarkMode, 'text-gray-900': !isDarkMode }"
      >
        Tableau de Board
      </p>
    </div>
    <div class="grid grid-cols-1  md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6">
                <div class="md:col-span-2 xl:col-span-3 shadow-xl bg-white p-6 rounded-2xl border border-gray-50">
                    <div class="flex flex-col space-y-6 md:h-full md:justify-between">
                        <div class="flex justify-between">
                            <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                             Finance
                            </span>
                            <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                Total Salaires
                            </span>
                        </div>
                        <div class="flex gap-2 md:gap-4 justify-between items-center">
                            <div class="flex flex-col space-y-4">
                                <h2 class="text-gray-800 font-bold tracking-widest leading-tight">Salaire net des Employés</h2>
                                <div class="flex items-center gap-4">
                                    <p class="text-lg text-gray-600 tracking-wider">F CFA {{ salaireNetEmployes }}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                            <h2 class="text-lg md:text-xl xl:text-3xl text-gray-700 font-black tracking-wider">
                                <span class="md:text-xl"> F CFA</span>
                         {{ salaireNetEmployes }}
                            </h2>
                        </div>
                        <div class="flex gap-2 md:gap-4">
                            <a href="#"
                                class="bg-sky-500 px-5 py-3 w-full text-center md:w-auto rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-600">
                                Bulletin de Salaire
                            </a>
                            <a href="#"
                                class="bg-blue-50 px-5 py-3 w-full text-center md:w-auto rounded-lg text-blue-600 text-xs tracking-wider font-semibold hover:bg-blue-600 hover:text-white">
                                Historique de Réception
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="col-span-2 p-6 rounded-2xl bg-gradient-to-r shadow-xl from-sky-600 to-cyan-400 flex flex-col justify-between">
                    <div class="flex flex-col">
                        <p class="text-white font-bold">Calendrier</p>
                        <p class="mt-1 text-xs md:text-sm text-gray-50 font-light leading-tight max-w-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta saepe consequuntur
                            facilis ab a. Molestiae ad saepe assumenda praesentium rem dolore? Exercitationem, neque
                            obcaecati?
                        </p>
                    </div>
                    <div class="flex justify-between items-end">
                        <a href="#"
                            class="bg-cyan-500 px-4 py-3 rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-600 hover:text-white">
                            Voir plus
                        </a>
                        <img src="https://img.icons8.com/?size=48&id=WpQIVxfhhzqt&format=png" alt="calendar" class="w-auto h-24 object-cover">
                    </div>
                </div>

            </div>
<div class="p-20 mt-10 shadow-xl bg-gradient-to-b from-sky-400 to-cyan-300 rounded-2xl">
      <div
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
      >
         <!-- <div
    class="flex justify-between w-auto h-28 p-5 rounded-xl items-center"
    :class="{ 'bg-white': !isDarkMode, 'dark:bg-gray-800 text-white': isDarkMode }"
  >
          <div class="  ">
            <p class="text-gray-300 text-xl">Salaire Net des Employés</p>
            <div class="flex justify-between">
              <p class="text-white font-bold">F CFA {{ salaireNetEmployes }}</p>
              <div class="flex justify-between">
                <div class="w-5 h-5 items-center">
                  <svg
                    width="15px"
                    class="mt-1"
                    height="15px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#00FF00"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 4V20M12 4L8 8M12 4L16 8"
                        stroke="#00FF00 "
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p class="text-green-500">50.8%</p>
              </div>
            </div>
          </div>
          <div
            class="w-20 h-20 rounded bg-pink-200 bg-opacity-50 flex items-center justify-center"
          >
            <svg
              fill=" #ffc4c4"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="64px"
              height="64px"
              viewBox="0 0 31.371 31.371"
              xml:space="preserve"
              stroke=" #ffc4c4"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    d="M24.26,20.34c0,3.42-2.423,6.342-6.845,7.111v3.92h-3.768v-3.648c-2.578-0.117-5.076-0.811-6.537-1.654l1.154-4.5 c1.615,0.886,3.883,1.693,6.383,1.693c2.191,0,3.691-0.848,3.691-2.385c0-1.461-1.23-2.389-4.077-3.348 c-4.112-1.385-6.921-3.306-6.921-7.033c0-3.386,2.385-6.035,6.499-6.845V0h3.767v3.383c2.576,0.115,4.309,0.652,5.576,1.268 l-1.115,4.348C21.07,8.575,19.3,7.688,16.531,7.688c-2.5,0-3.307,1.076-3.307,2.154c0,1.268,1.346,2.074,4.613,3.307 C22.416,14.762,24.26,16.877,24.26,20.34z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div> -->
          <div
    class="flex justify-between w-auto h-28 p-5 rounded-xl items-center"
    :class="{ 'bg-white text-cyan-500': !isDarkMode,  'dark:bg-gray-800 text-white': isDarkMode }"
  >
          <div class="  ">
            <p class="text-gray-500 text-xl">Nombre d'Employés</p>
            <div class="flex justify-between">
              <p class="font-bold" :class="{'text-white':isDarkMode,'text-gray-900':!isDarkMode}">{{ nombreEmployes }} Employés</p>
              <div class="flex justify-between">
                <div class="w-5 h-5 items-center">
                  <svg
                    width="15px"
                    height="15px"
                    class="mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ff0000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 4V20M12 20L8 16M12 20L16 16"
                        stroke="#ff0000 "
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p class="text-red-500">10.8%</p>
              </div>
            </div>
          </div>
          <div
            class="w-20 h-20 rounded bg-pink-100 bg-opacity-50 flex items-center justify-center"
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 16.00 16.00"
              xmlns="http://www.w3.org/2000/svg"
              fill=" #ffc4c4"
              stroke=" #ffc4c4"
              stroke-width="0.00016"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="m 13 1 c -0.554688 0 -1 0.445312 -1 1 v 12 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -12 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4 3 c -0.554688 0 -1 0.445312 -1 1 v 9 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -9 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4 3 c -0.554688 0 -1 0.445312 -1 1 v 6 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -6 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4 3 c -0.554688 0 -1 0.445312 -1 1 v 3 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 0"
                  fill=" ffc4c4"
                ></path>
              </g>
            </svg>
          </div>
        </div>
             <div
    class="flex justify-between w-auto h-28 shadow-xl p-5 rounded-xl items-center"
    :class="{ 'bg-white text-cyan-500': !isDarkMode,  'dark:bg-gray-800 text-white': isDarkMode }"
  >
          <div class="  ">
            <p class="text-gray-500 text-xl">Employés Présents Aujourd'hui</p>
            <div class="flex justify-between">
              <p class="font-bold" :class="{'text-white':isDarkMode,'text-gray-900':!isDarkMode}">{{employésPresents}} Employés</p>
              <div class="flex justify-between">
                <div class="w-5 h-5 items-center">
                  <svg
                    width="15px"
                    class="mt-1"
                    height="15px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#00FF00"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 4V20M12 4L8 8M12 4L16 8"
                        stroke="#00FF00 "
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p class="text-green-500">28.9%</p>
              </div>
            </div>
          </div>
          <div
            class="w-20 h-20 rounded bg-pink-100 bg-opacity-50 flex items-center justify-center"
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke=" #ffc4c4"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <circle cx="12" cy="6" r="4" fill="#ffc4c4"></circle>
                <path
                  d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                  fill="#ffc4c4"
                ></path>
              </g>
            </svg>
          </div>
        </div>
               <div
    class="flex justify-between w-auto h-28 p-5 rounded-xl items-center"
    :class="{ 'bg-white text-cyan-500': !isDarkMode,  'dark:bg-gray-800 text-white': isDarkMode }"
  >
          <div class="  ">
            <p class="text-gray-500 text-xl">Employés Absences Aujourd'hui</p>
            <div class="flex justify-between">
              <p class="font-bold" :class="{'text-white':isDarkMode,'text-gray-900':!isDarkMode}"> {{  nombreEmployesAbscent}} Employés </p>
              <div class="flex justify-between">
                <div class="w-5 h-5 items-center">
                  <svg
                    width="15px"
                    height="15px"
                    class="mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ff0000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 4V20M12 20L8 16M12 20L16 16"
                        stroke="#ff0000 "
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p class="text-red-500">50.2%</p>
              </div>
            </div>
          </div>
          <div
            class="w-20 h-20 rounded bg-pink-100 bg-opacity-50 flex items-center justify-center"
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 16.00 16.00"
              xmlns="http://www.w3.org/2000/svg"
              fill=" #ffc4c4"
              stroke=" #ffc4c4"
              stroke-width="0.00016"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="m 13 1 c -0.554688 0 -1 0.445312 -1 1 v 12 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -12 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4 3 c -0.554688 0 -1 0.445312 -1 1 v 9 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -9 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4 3 c -0.554688 0 -1 0.445312 -1 1 v 6 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -6 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4 3 c -0.554688 0 -1 0.445312 -1 1 v 3 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 0"
                  fill=" ffc4c4"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    

    <div
      class="flex justify-between gap-4   pb-5 flex-col sm:flex-row md:flex-row"
    >
     <div
  :class="{ 'bg-gray-800': isDarkMode, 'bg-gray-100': !isDarkMode }"
  class="w-full sm:w-1/2 md:w-1/2 h-auto shadow-xl rounded-xl mt-10 p-5"
>
  <h1 :class="{'text-white':isDarkMode,'text-gray-900':!isDarkMode}" class=" text-2xl pt-2 font-bold">Nombre de Retards Annuelle</h1>
  <div class="h-auto">
    <Chart />
  </div>
</div>

           <div
  :class="{ 'bg-gray-800': isDarkMode, 'bg-gray-100': !isDarkMode }"
  class="w-full sm:w-1/2 md:w-1/2 h-auto shadow-xl rounded-xl mt-10 p-5"
>
        <h1 :class="{'text-white':isDarkMode,'text-gray-900':!isDarkMode}" class=" text-2xl pt-2 font-bold">Nombre d'Absences Annuelle</h1>
        <div class="h-auto">
          <ChartAbsence />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardDashbord from "../components/cardDashbord.vue";
export default {
  components: { cardDashbord },
  name: "IndexPage",
  data() {
    return {
      isDarkMode: false,
      showSpans: true,
      isSidebarMinimized: false,
      dynamicMargin: "true",
    };
  },

  props: {
    salaireNetEmployes: {
      type: Number,
     default:"0"
    },
    nombreEmployes: {
      type: Number,
     
    },
     nombreEmployesAbscent: {
      type: Number,
     
    },
    employésPresents: {
      type: Number,
      
    },
    
  methods: {
    initializeDarkMode() {
      this.$store.dispatch('darkMode/initializeDarkMode');
    },
  },
  },
  
  
  methods: {
    toggleDarkMode() {
      document.body.classList.toggle('dark-mode');

      const isDarkMode = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkMode);
    },

     checkDarkModePreference() {
  if (typeof localStorage !== 'undefined') {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }
},
  },
  created() {
    this.checkDarkModePreference();
  },
};
</script>
<style  scoped>
#separator-sidebar {
  transition: width 0.9s ease;
}
#nav {
  transition: margin-left 0.9s ease;
}
#nav .rounded-xl {
  transition: margin-left 0.9s ease;
}

.dark-fill {
  fill: #ffffff;
}
</style>