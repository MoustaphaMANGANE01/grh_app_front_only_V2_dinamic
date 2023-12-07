<template>
  <div @click="toggleSidebarProp" :style="{ marginLeft: dynamicMargin }" id="nav" class="ml-72 p-5 bg-gray-900">
    <div class="flex justify-start mb-10 mt-5">
      <p class="text-gray-900 dark:text-white text-2xl font-bold">Overview</p>
    </div>
    <div class="">
    <div class="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <div
          class="flex justify-between w-auto h-28 p-5 rounded-xl items-center bg-gray-800 text-white"
        >
          <div class="  ">
            <p class="text-gray-300 text-xl">Salaire Net des Employés</p>
            <div class="flex justify-between">
              <p class="text-white">F CFA{{ salaireNetEmployes }}</p>
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
            class="w-20 h-20 rounded bg-orange-400 bg-opacity-50 flex items-center justify-center"
          >
            <svg
              fill=" #ff8000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="64px"
              height="64px"
              viewBox="0 0 31.371 31.371"
              xml:space="preserve"
              stroke=" #ff8000"
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
        </div>
        <div
          class="flex justify-between w-auto h-28 p-5 rounded-xl items-center bg-gray-800 text-white"
        >
          <div class="  ">
            <p class="text-gray-300 text-xl">Nombre d'Employés</p>
            <div class="flex justify-between">
              <p class="text-white">{{ nombreEmployes }} Employés</p>
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
            class="w-20 h-20 rounded bg-orange-400 bg-opacity-50 flex items-center justify-center"
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 16.00 16.00"
              xmlns="http://www.w3.org/2000/svg"
              fill=" #ff8000"
              stroke=" #ff8000"
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
                  fill=" ff8000"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div
          class="flex justify-between w-auto h-28 p-5 rounded-xl items-center bg-gray-800 text-white"
        >
          <div class="  ">
            <p class="text-gray-300 text-xl">Total Clients</p>
            <div class="flex justify-between">
              <p class="text-white">2.500K</p>
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
            class="w-20 h-20 rounded bg-orange-400 bg-opacity-50 flex items-center justify-center"
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke=" #ff8000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <circle cx="12" cy="6" r="4" fill="#ff8000"></circle>
                <path
                  d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                  fill="#ff8000"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div
          class="flex justify-between w-auto h-28 p-5 rounded-xl items-center bg-gray-800 text-white"
        >
          <div class="  ">
            <p class="text-gray-300 text-xl">Custom stats</p>
            <div class="flex justify-between">
              <p class="text-white">£ 2.500</p>
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
            class="w-20 h-20 rounded bg-orange-400 bg-opacity-50 flex items-center justify-center"
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 16.00 16.00"
              xmlns="http://www.w3.org/2000/svg"
              fill=" #ff8000"
              stroke=" #ff8000"
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
                  fill=" ff8000"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
   <div class="flex justify-between gap-4 pr-5 pb-5 flex-col sm:flex-row md:flex-row">
      <div class="bg-gray-800 w-full sm:w-1/2 md:w-1/2 h-auto rounded-xl mt-10 p-5">
    <h1 class="text-white text-2xl pt-2 font-bold">Statistics</h1>
        <div class="h-auto ">
                  <img :src="require(`@/assets/imrew76bk.svg`)" class="w-full h-full object-cover" >

        </div>
    </div>
      <div class="bg-gray-800 w-full sm:w-1/2 md:w-1/2 h-auto rounded-xl mt-10 p-5">
    <h1 class="text-white text-2xl pt-2 font-bold">Statistics</h1>
        <div class="h-auto ">
                  <img :src="require(`@/assets/imrew76bk.svg`)" class="w-full h-full object-cover" >

        </div>
    </div>
</div>

  </div>
</template>

<script>
 import cardDashbord from '../components/cardDashbord.vue'
export default {
  components: { cardDashbord },
  name: 'IndexPage',
  data() {
    return {
      showSpans: true,
      isSidebarMinimized: false,
      dynamicMargin: "true",
    };
  },
  props: {
    salaireNetEmployes: {
      type: String, 
      default: "", 
    },
    nombreEmployes: {
      type: String, 
      default: "", 
    },
  },
  methods: {
   toggleSidebar() {
      const separatorSidebar = document.getElementById("separator-sidebar");

      if (this.isSidebarMinimized) {
        separatorSidebar.style.width = "270px";
        this.dynamicMargin = "270px";
      } else {
        separatorSidebar.style.width = "70px";
        this.dynamicMargin = "70px";
      }

      this.isSidebarMinimized = !this.isSidebarMinimized;
      this.showSpans = !this.showSpans;
    },
      toggleSidebarProp() {
      this.toggleSidebar();
    },
  },
}
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