<template>
  <div class="fixed w-full">
    <aside
      :class="{'-translate-x-full': !isSidebarVisible, 'translate-x-0': isSidebarVisible}"

      id="separator-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen border-r border-white transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div
        class="h-full px-3 h-screen flex-col flex justify-between py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
      >
        <ul class="space-y-2 font-medium">
          <li>
            <NuxtLink to="/">
              <div>
                <img src="~/assets/logo intech.png" class="w-32" alt="logo" />
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="flex items-center p-2 text-gray-900 dark:text-white mb-5 border-sky-500 hover:bg-gray-100 dark:hover:border-l-sky-500 dark:border-l-2 dark:hover:bg-gray-700 group"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H8C8.26522 20 8.51957 19.8946 8.70711 19.7071C8.89464 19.5196 9 19.2652 9 19V12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11ZM7 18H2V13H7V18ZM19 0H12C11.7348 0 11.4804 0.105357 11.2929 0.292893C11.1054 0.48043 11 0.734784 11 1V8C11 8.26522 11.1054 8.51957 11.2929 8.70711C11.4804 8.89464 11.7348 9 12 9H19C19.2652 9 19.5196 8.89464 19.7071 8.70711C19.8946 8.51957 20 8.26522 20 8V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM18 7H13V2H18V7ZM19 11H12C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11ZM18 18H13V13H18V18ZM8 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H8C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0ZM7 7H2V2H7V7Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span v-if="showSpans" class="ms-3">Dashboard</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/Employes"
              class="flex items-center p-2 text-gray-900 rounded-lg mt-5 mb-5 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V15C9 15.2652 9.10536 15.5196 9.29289 15.7071C9.48043 15.8946 9.73478 16 10 16C10.2652 16 10.5196 15.8946 10.7071 15.7071C10.8946 15.5196 11 15.2652 11 15V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4ZM5 10C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11V15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16C5.26522 16 5.51957 15.8946 5.70711 15.7071C5.89464 15.5196 6 15.2652 6 15V11C6 10.7348 5.89464 10.4804 5.70711 10.2929C5.51957 10.1054 5.26522 10 5 10ZM15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V15C14 15.2652 14.1054 15.5196 14.2929 15.7071C14.4804 15.8946 14.7348 16 15 16C15.2652 16 15.5196 15.8946 15.7071 15.7071C15.8946 15.5196 16 15.2652 16 15V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8ZM17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V17Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span v-if="showSpans" class="ms-3">Employés</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/Absence"
              class="flex items-center p-2 text-gray-900 mt-5 mb-5 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 52 52"
                enable-background="new 0 0 52 52"
                xml:space="preserve"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M21.9,37c0-2.7,0.9-5.8,2.3-8.2c1.7-3,3.6-4.2,5.1-6.4c2.5-3.7,3-9,1.4-13c-1.6-4.1-5.4-6.5-9.8-6.4 s-8,2.8-9.4,6.9c-1.6,4.5-0.9,9.9,2.7,13.3c1.5,1.4,2.9,3.6,2.1,5.7c-0.7,2-3.1,2.9-4.8,3.7c-3.9,1.7-8.6,4.1-9.4,8.7 C1.3,45.1,3.9,49,8,49h17c0.8,0,1.3-1,0.8-1.6C23.3,44.5,21.9,40.8,21.9,37z"
                  ></path>
                  <path
                    d="M46.4,28.5c-4.7-4.7-12.3-4.7-17,0c-4.7,4.7-4.7,12.3,0,17c4.7,4.7,12.3,4.7,17,0 C51.1,40.8,51.1,33.2,46.4,28.5z M42.9,39.1c0.4,0.4,0.4,1.1-0.1,1.5l-1.4,1.4c-0.4,0.4-0.9,0.4-1.3-0.1L38,39.8l-2.2,2.2 c-0.4,0.4-0.9,0.4-1.3-0.1L33,40.5c-0.4-0.4-0.5-0.9-0.1-1.3l2.2-2.2L33,34.8c-0.4-0.4-0.5-0.9-0.1-1.3l1.4-1.4 c0.4-0.4,1.1-0.5,1.5-0.1l2.1,2.1l2.1-2.1c0.4-0.4,1.1-0.5,1.5-0.1l1.4,1.4c0.4,0.4,0.4,1.1-0.1,1.5l-2.1,2.1L42.9,39.1z"
                  ></path>
                </g>
              </svg>
              <span v-if="showSpans" class="flex-1 ms-3 whitespace-nowrap"
                >Absences</span
              >
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/retards"
              class="flex items-center p-2 text-gray-900 mt-5 mb-5 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            ><svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M295.391,0h-78.783c-5.443,0-8.706,4.322-8.706,9.76v39.391c0,5.438,3.263,9.935,8.706,9.935h78.783 c5.443,0,10.99-4.497,10.99-9.935V9.76C306.381,4.322,300.835,0,295.391,0z M286.686,39.391h-59.087V19.696h59.087V39.391z"></path> </g> </g> <g> <g> <path d="M256,78.695c-119.463,0-216.652,97.19-216.652,216.652C39.348,414.81,136.537,512,256,512 c119.463,0,216.652-97.19,216.652-216.652C472.652,175.885,375.463,78.695,256,78.695z M256,492.304 c-108.605,0-196.957-88.357-196.957-196.957c0-108.601,88.352-196.957,196.957-196.957c108.605,0,196.957,88.356,196.957,196.957 C452.957,403.948,364.605,492.304,256,492.304z"></path> </g> </g> <g> <g> <path d="M256,137.782c-86.88,0-157.565,70.685-157.565,157.565c0,86.88,70.685,157.565,157.565,157.565 c86.88,0,157.565-70.685,157.565-157.565C413.565,208.467,342.88,137.782,256,137.782z M256,433.217 c-76.023,0-137.87-61.847-137.87-137.87c0-76.023,61.847-137.87,137.87-137.87s137.87,61.847,137.87,137.87 C393.87,371.37,332.023,433.217,256,433.217z"></path> </g> </g> <g> <g> <path d="M317.472,243.223l-13.926-13.926l-30.561,30.564c-5.15-2.477-10.898-3.906-16.986-3.906 c-21.725,0-39.391,17.671-39.391,39.391c0,6.087,1.428,11.834,3.902,16.985l-30.561,30.566l13.926,13.926l29.373-29.377 c6.431,4.573,14.272,7.291,22.751,7.291c21.725,0,39.391-17.671,39.391-39.391c0-8.476-2.717-16.315-7.29-22.75L317.472,243.223z M256,315.043c-10.857,0-19.696-8.833-19.696-19.696c0-10.863,8.838-19.696,19.696-19.696c10.858,0,19.696,8.833,19.696,19.696 C275.696,306.21,266.858,315.043,256,315.043z"></path> </g> </g> </g></svg>
              <span v-if="showSpans" class="flex-1 ms-3 whitespace-nowrap"
                >Retards</span
              >
              <!-- <span
                class="inline-flex items-center justify-center w-2 h-2 p-2 text-sm font-medium text-white bg-blue-100 rounded-full dark:bg-sky-500 dark:text-white"
                >4</span
              > -->
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="flex items-center p-2 text-gray-900 mt-5 mb-5 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.81 10.28C13.443 9.60024 13.7996 8.70877 13.81 7.78C13.81 6.77748 13.4118 5.81602 12.7029 5.10714C11.994 4.39825 11.0325 4 10.03 4C9.02748 4 8.06602 4.39825 7.35714 5.10714C6.64825 5.81602 6.25 6.77748 6.25 7.78C6.26044 8.70877 6.61702 9.60024 7.25 10.28C6.36865 10.7189 5.61022 11.3699 5.04292 12.1746C4.47561 12.9793 4.11723 13.9124 4 14.89C3.97083 15.1552 4.0482 15.4212 4.21511 15.6293C4.38202 15.8375 4.62478 15.9708 4.89 16C5.15522 16.0292 5.42116 15.9518 5.62932 15.7849C5.83749 15.618 5.97083 15.3752 6 15.11C6.11933 14.1411 6.58885 13.2494 7.32009 12.6027C8.05133 11.956 8.99382 11.599 9.97 11.599C10.9462 11.599 11.8887 11.956 12.6199 12.6027C13.3512 13.2494 13.8207 14.1411 13.94 15.11C13.9678 15.3664 14.0936 15.6022 14.2911 15.768C14.4887 15.9339 14.7426 16.017 15 16H15.11C15.3721 15.9698 15.6117 15.8373 15.7766 15.6313C15.9414 15.4252 16.0181 15.1624 15.99 14.9C15.8815 13.9276 15.5344 12.997 14.9796 12.191C14.4248 11.3851 13.6796 10.7286 12.81 10.28ZM10 9.56C9.64795 9.56 9.3038 9.4556 9.01108 9.26002C8.71836 9.06443 8.49022 8.78643 8.35549 8.46118C8.22077 8.13592 8.18552 7.77803 8.2542 7.43274C8.32288 7.08745 8.49241 6.77029 8.74135 6.52135C8.99029 6.27241 9.30745 6.10288 9.65274 6.0342C9.99803 5.96552 10.3559 6.00077 10.6812 6.13549C11.0064 6.27022 11.2844 6.49837 11.48 6.79109C11.6756 7.0838 11.78 7.42795 11.78 7.78C11.78 8.25208 11.5925 8.70484 11.2586 9.03865C10.9248 9.37247 10.4721 9.56 10 9.56ZM17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V17Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span v-if="showSpans" class="flex-1 ms-3 whitespace-nowrap"
                >Customers</span
              >
            </NuxtLink>
          </li>
          <!-- <li>



          <NuxtLink
            to="/products"
            class="flex items-center p-2 text-gray-900 mt-5 mb-5 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <li>
              <svg
                width="31"
                height="32"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8999 11.66C18.7396 11.4775 18.6512 11.2429 18.6512 11C18.6512 10.7571 18.7396 10.5225 18.8999 10.34L20.1799 8.9C20.3209 8.74267 20.4085 8.54471 20.4301 8.33451C20.4516 8.12431 20.4061 7.91269 20.2999 7.73L18.2999 4.27C18.1948 4.08752 18.0348 3.94288 17.8426 3.85669C17.6505 3.7705 17.4361 3.74716 17.2299 3.79L15.3499 4.17C15.1107 4.21943 14.8616 4.17959 14.6498 4.058C14.4379 3.93641 14.2779 3.74149 14.1999 3.51L13.5899 1.68C13.5228 1.48138 13.395 1.30887 13.2245 1.18684C13.0541 1.06482 12.8495 0.999461 12.6399 1H8.6399C8.42183 0.98862 8.20603 1.04893 8.02546 1.17172C7.84489 1.2945 7.70948 1.47302 7.6399 1.68L7.0799 3.51C7.0019 3.74149 6.84187 3.93641 6.63001 4.058C6.41815 4.17959 6.16911 4.21943 5.9299 4.17L3.9999 3.79C3.80445 3.76238 3.6052 3.79322 3.42724 3.87864C3.24929 3.96406 3.1006 4.10023 2.9999 4.27L0.999896 7.73C0.891056 7.91065 0.842118 8.12109 0.860079 8.33123C0.878039 8.54136 0.961979 8.74044 1.0999 8.9L2.3699 10.34C2.53022 10.5225 2.61863 10.7571 2.61863 11C2.61863 11.2429 2.53022 11.4775 2.3699 11.66L1.0999 13.1C0.961979 13.2596 0.878039 13.4586 0.860079 13.6688C0.842118 13.8789 0.891056 14.0894 0.999896 14.27L2.9999 17.73C3.10499 17.9125 3.26502 18.0571 3.45715 18.1433C3.64928 18.2295 3.86372 18.2528 4.0699 18.21L5.9499 17.83C6.18911 17.7806 6.43815 17.8204 6.65001 17.942C6.86187 18.0636 7.0219 18.2585 7.0999 18.49L7.7099 20.32C7.77948 20.527 7.91489 20.7055 8.09546 20.8283C8.27603 20.9511 8.49183 21.0114 8.7099 21H12.7099C12.9195 21.0005 13.1241 20.9352 13.2945 20.8132C13.465 20.6911 13.5928 20.5186 13.6599 20.32L14.2699 18.49C14.3479 18.2585 14.5079 18.0636 14.7198 17.942C14.9316 17.8204 15.1807 17.7806 15.4199 17.83L17.2999 18.21C17.5061 18.2528 17.7205 18.2295 17.9126 18.1433C18.1048 18.0571 18.2648 17.9125 18.3699 17.73L20.3699 14.27C20.4761 14.0873 20.5216 13.8757 20.5001 13.6655C20.4785 13.4553 20.3909 13.2573 20.2499 13.1L18.8999 11.66ZM17.4099 13L18.2099 13.9L16.9299 16.12L15.7499 15.88C15.0297 15.7328 14.2805 15.8551 13.6445 16.2238C13.0085 16.5925 12.53 17.1818 12.2999 17.88L11.9199 19H9.3599L8.9999 17.86C8.76975 17.1618 8.29128 16.5725 7.6553 16.2038C7.01932 15.8351 6.27012 15.7128 5.5499 15.86L4.3699 16.1L3.0699 13.89L3.8699 12.99C4.36185 12.44 4.63383 11.7279 4.63383 10.99C4.63383 10.2521 4.36185 9.54002 3.8699 8.99L3.0699 8.09L4.3499 5.89L5.5299 6.13C6.25012 6.27722 6.99932 6.15488 7.6353 5.7862C8.27128 5.41752 8.74975 4.82816 8.9799 4.13L9.3599 3H11.9199L12.2999 4.14C12.53 4.83816 13.0085 5.42752 13.6445 5.7962C14.2805 6.16488 15.0297 6.28722 15.7499 6.14L16.9299 5.9L18.2099 8.12L17.4099 9.02C16.9235 9.56876 16.6549 10.2767 16.6549 11.01C16.6549 11.7433 16.9235 12.4512 17.4099 13ZM10.6399 7C9.84877 7 9.07541 7.2346 8.41761 7.67412C7.75982 8.11365 7.24713 8.73836 6.94438 9.46927C6.64163 10.2002 6.56241 11.0044 6.71675 11.7804C6.8711 12.5563 7.25206 13.269 7.81147 13.8284C8.37088 14.3878 9.08361 14.7688 9.85954 14.9231C10.6355 15.0775 11.4397 14.9983 12.1706 14.6955C12.9015 14.3928 13.5262 13.8801 13.9658 13.2223C14.4053 12.5645 14.6399 11.7911 14.6399 11C14.6399 9.93914 14.2185 8.92172 13.4683 8.17157C12.7182 7.42143 11.7008 7 10.6399 7ZM10.6399 13C10.2443 13 9.85765 12.8827 9.52876 12.6629C9.19986 12.4432 8.94351 12.1308 8.79214 11.7654C8.64076 11.3999 8.60116 10.9978 8.67833 10.6098C8.7555 10.2219 8.94598 9.86549 9.22568 9.58579C9.50539 9.30608 9.86175 9.1156 10.2497 9.03843C10.6377 8.96126 11.0398 9.00087 11.4053 9.15224C11.7707 9.30362 12.0831 9.55996 12.3028 9.88886C12.5226 10.2178 12.6399 10.6044 12.6399 11C12.6399 11.5304 12.4292 12.0391 12.0541 12.4142C11.679 12.7893 11.1703 13 10.6399 13Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span v-if="showSpans" class="flex-1 ms-3 whitespace-nowrap"
                >Settings</span
              >
            </li>
          </NuxtLink>
          </li> -->

          <li>
            <NuxtLink
              to="/"
              class="flex items-center p-2 text-gray-900 rounded-lg mt-5 mb-5 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                width="26"
                height="30"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-config-id="auto-svg-7-2"
              >
                <path
                  d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span v-if="showSpans" class="flex-1 ms-3 mt-5 whitespace-nowrap"
                >Notifications</span
              >
            </NuxtLink>
          </li>
        </ul>
        <ul class="pt-4 mt-4 space-y-2 font-medium dark:border-gray-700">
          <li>
            <NuxtLink
              to="/"
              class="flex items-center p-2 text-gray-900 W rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                width="30"
                height="32"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.71 11.71C14.6904 10.9387 15.406 9.88092 15.7572 8.68394C16.1085 7.48697 16.0779 6.21027 15.6698 5.03147C15.2617 3.85267 14.4963 2.83039 13.4801 2.10686C12.4639 1.38332 11.2474 0.994507 10 0.994507C8.75255 0.994507 7.53611 1.38332 6.51993 2.10686C5.50374 2.83039 4.73834 3.85267 4.33021 5.03147C3.92208 6.21027 3.89151 7.48697 4.24276 8.68394C4.59401 9.88092 5.3096 10.9387 6.29 11.71C4.61007 12.383 3.14428 13.4994 2.04889 14.9399C0.953495 16.3805 0.26956 18.0913 0.0699967 19.89C0.0555513 20.0213 0.0671132 20.1542 0.104022 20.2811C0.140931 20.4079 0.202464 20.5263 0.285108 20.6293C0.452016 20.8375 0.69478 20.9708 0.959997 21C1.22521 21.0292 1.49116 20.9518 1.69932 20.7849C1.90749 20.618 2.04082 20.3752 2.07 20.11C2.28958 18.1552 3.22168 16.3498 4.68822 15.0388C6.15475 13.7278 8.0529 13.003 10.02 13.003C11.9871 13.003 13.8852 13.7278 15.3518 15.0388C16.8183 16.3498 17.7504 18.1552 17.97 20.11C17.9972 20.3557 18.1144 20.5827 18.2991 20.747C18.4838 20.9114 18.7228 21.0015 18.97 21H19.08C19.3421 20.9698 19.5817 20.8373 19.7466 20.6313C19.9114 20.4252 19.9881 20.1624 19.96 19.9C19.7595 18.0962 19.0719 16.381 17.9708 14.9382C16.8698 13.4954 15.3969 12.3795 13.71 11.71ZM10 11C9.20887 11 8.43551 10.7654 7.77772 10.3259C7.11992 9.88636 6.60723 9.26164 6.30448 8.53074C6.00173 7.79983 5.92251 6.99557 6.07686 6.21964C6.2312 5.44372 6.61216 4.73099 7.17157 4.17158C7.73098 3.61217 8.44371 3.2312 9.21964 3.07686C9.99556 2.92252 10.7998 3.00173 11.5307 3.30448C12.2616 3.60724 12.8863 4.11993 13.3259 4.77772C13.7654 5.43552 14 6.20888 14 7C14 8.06087 13.5786 9.07828 12.8284 9.82843C12.0783 10.5786 11.0609 11 10 11Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span v-if="showSpans" class="flex-1 ms-3 whitespace-nowrap"
                >Account</span
              >
            </NuxtLink>
          </li>
          <li>
            <button
              @click="logout"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.59 11L8.29 13.29C8.19627 13.383 8.12188 13.4936 8.07111 13.6154C8.02034 13.7373 7.9942 13.868 7.9942 14C7.9942 14.132 8.02034 14.2627 8.07111 14.3846C8.12188 14.5064 8.19627 14.617 8.29 14.71C8.38296 14.8037 8.49356 14.8781 8.61542 14.9289C8.73728 14.9797 8.86799 15.0058 9 15.0058C9.13201 15.0058 9.26272 14.9797 9.38458 14.9289C9.50644 14.8781 9.61704 14.8037 9.71 14.71L13.71 10.71C13.801 10.6149 13.8724 10.5028 13.92 10.38C14.02 10.1365 14.02 9.86347 13.92 9.62001C13.8724 9.49726 13.801 9.38511 13.71 9.29001L9.71 5.29001C9.61676 5.19677 9.50607 5.12281 9.38425 5.07235C9.26243 5.02189 9.13186 4.99592 9 4.99592C8.86814 4.99592 8.73757 5.02189 8.61575 5.07235C8.49393 5.12281 8.38324 5.19677 8.29 5.29001C8.19676 5.38325 8.1228 5.49394 8.07234 5.61576C8.02188 5.73758 7.99591 5.86815 7.99591 6.00001C7.99591 6.13187 8.02188 6.26244 8.07234 6.38426C8.1228 6.50608 8.19676 6.61677 8.29 6.71001L10.59 9.00001H1C0.734784 9.00001 0.48043 9.10537 0.292893 9.2929C0.105357 9.48044 0 9.73479 0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8947 0.734784 11 1 11H10.59ZM10 8.14093e-06C8.13109 -0.00833565 6.29724 0.507221 4.70647 1.4882C3.11569 2.46918 1.83165 3.87632 1 5.55001C0.880653 5.7887 0.861015 6.06503 0.945406 6.31821C1.0298 6.57138 1.21131 6.78066 1.45 6.90001C1.68869 7.01936 1.96502 7.03899 2.2182 6.9546C2.47137 6.87021 2.68065 6.6887 2.8 6.45001C3.43219 5.17333 4.39383 4.08863 5.58555 3.308C6.77727 2.52736 8.15582 2.07913 9.57876 2.0096C11.0017 1.94007 12.4174 2.25178 13.6795 2.91252C14.9417 3.57325 16.0045 4.55904 16.7581 5.768C17.5118 6.97697 17.9289 8.36526 17.9664 9.78939C18.0039 11.2135 17.6605 12.6219 16.9715 13.8688C16.2826 15.1158 15.2731 16.1562 14.0475 16.8824C12.8219 17.6087 11.4246 17.9945 10 18C8.50888 18.0065 7.04615 17.5924 5.77969 16.8053C4.51323 16.0181 3.49435 14.8899 2.84 13.55C2.72065 13.3113 2.51137 13.1298 2.2582 13.0454C2.00502 12.961 1.72869 12.9807 1.49 13.1C1.25131 13.2194 1.0698 13.4286 0.985406 13.6818C0.901015 13.935 0.920653 14.2113 1.04 14.45C1.83283 16.0455 3.03752 17.4002 4.52947 18.3741C6.02142 19.3479 7.74645 19.9054 9.52612 19.989C11.3058 20.0726 13.0755 19.6792 14.6521 18.8495C16.2288 18.0198 17.5552 16.784 18.4941 15.2698C19.433 13.7557 19.9503 12.0181 19.9925 10.237C20.0347 8.45588 19.6003 6.6958 18.7342 5.13884C17.8682 3.58188 16.6018 2.28457 15.0663 1.38111C13.5307 0.477653 11.7816 0.000844593 10 8.14093e-06Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span v-if="showSpans" class="flex-1 ms-3 whitespace-nowrap"
                >Déconnexion</span
              >
            </button>
          </li>
        </ul>
      </div>
    </aside>

    <nav id="nav" class="sm:ml-64" :style="{ marginLeft: dynamicMargin }">
      <div
        class="p-3 border-white dark:bg-gray-800 dark:border-white flex justify-between items-center"
      >
        <div>
          <button
            @click="toggleSidebar"
            data-drawer-target="separator-sidebar"
            data-drawer-toggle="separator-sidebar"
            aria-controls="separator-sidebar"
            type="button"
            class="inline-flex items-center ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span v-if="showSpans" class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
            <span v-if="showSpans" class="sr-only">Open sidebar</span>
          </button>
        </div>
        <div class="flex justify-between">
          <div class="flex items-center">
            <div class="dark-mode">
              
              <svg
                class="dark-fill"
                fill="#000000"
                width="14px"
                height="14px"
                viewBox="0 0 35 35"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"
                ></path>
              </svg>
            </div>
              <div class="cadeaux" @click="showBirthdaysDetails">
              <svg
              class="ml-5"
                width="20px"
                height="20px"
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
                    d="M19.5 7.75H18.1C18.5 7.27 18.75 6.67 18.75 6C18.75 4.48 17.52 3.25 16 3.25C14.32 3.25 12.84 4.14 12 5.46C11.16 4.14 9.68 3.25 8 3.25C6.48 3.25 5.25 4.48 5.25 6C5.25 6.67 5.5 7.27 5.9 7.75H4.5C3.81 7.75 3.25 8.31 3.25 9V11.5C3.25 12.1 3.68 12.58 4.25 12.7V19.5C4.25 20.19 4.81 20.75 5.5 20.75H18.5C19.19 20.75 19.75 20.19 19.75 19.5V12.7C20.32 12.58 20.75 12.1 20.75 11.5V9C20.75 8.31 20.19 7.75 19.5 7.75ZM19.25 11.25H12.75V9.25H19.25V11.25ZM16 4.75C16.69 4.75 17.25 5.31 17.25 6C17.25 6.69 16.69 7.25 16 7.25H12.84C13.18 5.82 14.47 4.75 16 4.75ZM8 4.75C9.53 4.75 10.82 5.82 11.16 7.25H8C7.31 7.25 6.75 6.69 6.75 6C6.75 5.31 7.31 4.75 8 4.75ZM4.75 9.25H11.25V11.25H4.75V9.25ZM5.75 12.75H11.25V19.25H5.75V12.75ZM18.25 19.25H12.75V12.75H18.25V19.25Z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </div>
            
            <div>
              <svg
                class="dark-fill ml-5"
                width="14px"
                height="14px"
                viewBox="0 0 24 24"
                id="_24x24_On_Light_Notification-Alert"
                data-name="24x24/On Light/Notification-Alert"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <rect id="view-box" width="24" height="24" fill="none"></rect>
                <path
                  id="Shape"
                  d="M6,17v-.5H2.25A2.253,2.253,0,0,1,0,14.25v-.382a2.542,2.542,0,0,1,1.415-2.289A1.247,1.247,0,0,0,2.1,10.572l.446-4.91A6.227,6.227,0,0,1,10.618.286a5.477,5.477,0,0,0-.635,1.374A4.794,4.794,0,0,0,8.75,1.5,4.7,4.7,0,0,0,4.045,5.8L3.6,10.708A2.739,2.739,0,0,1,2.089,12.92a1.055,1.055,0,0,0-.589.949v.382A.751.751,0,0,0,2.25,15h13A.751.751,0,0,0,16,14.25v-.382a1.053,1.053,0,0,0-.586-.948A2.739,2.739,0,0,1,13.9,10.708l-.2-2.18a5.473,5.473,0,0,0,1.526.221l.166,1.822a1.26,1.26,0,0,0,.686,1.005,2.547,2.547,0,0,1,1.418,2.29v.382a2.252,2.252,0,0,1-2.25,2.25H11.5V17A2.75,2.75,0,0,1,6,17Zm1.5,0A1.25,1.25,0,0,0,10,17v-.5H7.5ZM15.047,6.744A3.486,3.486,0,0,1,13.5,6.28L13.456,5.8a4.7,4.7,0,0,0-1.648-3.185,3.5,3.5,0,0,1,.61-1.417A6.221,6.221,0,0,1,14.95,5.662l.1,1.081v0Z"
                  transform="translate(3.25 2.25)"
                  fill="#FFFFFF"
                ></path>
                <path
                  id="Shape-2"
                  data-name="Shape"
                  d="M3.5,7A3.5,3.5,0,1,1,7,3.5,3.5,3.5,0,0,1,3.5,7Z"
                  transform="translate(15 2)"
                  fill="#ff6359"
                ></path>
              </svg>
            </div>
          </div>

          <div class="flex justify-between items-center ml-5">
            <div>
              <svg
                width="44px"
                height="44px"
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
            <div>
              
            </div>
            <!-- <div>
              <button
                @click="logout"
                type="button"
                class="inline-flex items-center ms-3 text-sm mt-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Logout</span>
                <svg
                  width="34px"
                  height="34px"
                  viewBox="0 0 1000 1000"
                  data-name="Layer 2"
                  id="Layer_2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <defs>
                      <style>
                        .cls-1 {
                          fill: none;
                          stroke: #858585;
                          stroke-linecap: round;
                          stroke-miterlimit: 10;
                          stroke-width: 22px;
                        }
                        .cls-2 {
                          fill: #858585;
                        }
                      </style>
                    </defs>
                    <path
                      class="cls-1"
                      d="M591.61,280.48C693.9,317.86,766.91,416,766.91,531.26c0,147.41-119.5,266.91-266.91,266.91S233.09,678.67,233.09,531.26c0-115.22,73-213.4,175.3-250.78"
                    ></path>
                    <rect
                      class="cls-2"
                      height="160.61"
                      rx="35.92"
                      width="71.84"
                      x="464.08"
                      y="201.83"
                    ></rect>
                  </g>
                </svg>
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </nav>
    <!-- <CardDashbord :style="{ marginLeft: dynamicMargin }" /> -->
  </div>
</template>
<script>
import cardDashbord from "./cardDashbord.vue";

export default {
  components: {
    cardDashbord,
  },
  data() {
    return {
      showSpans: true,
      isSidebarMinimized: false,
      dynamicMargin: "true",
        isSidebarVisible: false,
    };
  },
  methods: {
async showBirthdaysDetails() {
  try {
    const userToken = localStorage.getItem("token");

    if (!userToken) {
      console.error("Le jeton d'utilisateur est introuvable dans le localStorage");
      return;
    }

    const response = await this.$axios.get("home/statistique", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (!response.data || !response.data.data) {
      console.error('La réponse de l\'API est invalide :', response);
      return;
    }

    const birthdays = response.data.data.birthdays;

    console.log('Tous les anniversaires :', birthdays);

    if (birthdays && birthdays.length > 0) {
      const sortedBirthdays = birthdays.sort((a, b) => {
        const dateA = new Date(a.date_de_naissance);
        const dateB = new Date(b.date_de_naissance);
        return dateA - dateB;
      });

      const upcomingBirthdays = sortedBirthdays.slice(0, 5);
let birthdayDetails = 'Prochains anniversaires :\n\n';

upcomingBirthdays.forEach((birthday) => {
  const formattedDate = new Date(birthday.date_de_naissance).toLocaleDateString('fr-FR');
  const firstName = birthday.prenom || 'Prénom inconnu';
  birthdayDetails += `${birthday.name} ${firstName} - Né(e) le ${formattedDate}\n`;
});



// birthdayDetails += '</tbody></table></div>';


      console.log('Tous les anniversaires :', birthdays);
      console.log('Anniversaires triés :', sortedBirthdays);
      console.log('Prochains anniversaires à venir :', upcomingBirthdays);

      // birthdayDetails += '</ul>';

      if (upcomingBirthdays.length > 0) {
        alert(birthdayDetails);
      } else {
        alert('Aucun anniversaire d\'aujourd\'hui et à venir.');
      }
    } else {
      alert('Aucun anniversaire à venir.');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des détails des anniversaires :', error.message);
  }
},







    async logout() {
      try {
        const userToken = localStorage.getItem("token");
        console.log("Valeur du jeton dans le localStorage :", userToken);

        if (!userToken) {
          console.error(
            "Le jeton d'utilisateur est introuvable dans le localStorage"
          );
          return;
        }

        const response = await this.$axios.post("/auth/logout", {
          token: userToken,
        });

        if (response.data.status === "success") {
          console.log("Déconnexion réussie");

          this.$router.push("/auth");
        } else {
          console.error("Échec de la déconnexion :", response.data.message);
        }
      } catch (error) {
        console.error("Erreur lors de la déconnexion :", error.message);
      }
    },

    toggleSidebar() {
      const separatorSidebar = document.getElementById("separator-sidebar");

      if (this.isSidebarMinimized) {
        separatorSidebar.style.width = "270px";
        this.dynamicMargin = "270px";
      } else {
        separatorSidebar.style.width = "70px";
        this.dynamicMargin = "70px";
      }
    this.isSidebarVisible = !this.isSidebarVisible;

      this.isSidebarMinimized = !this.isSidebarMinimized;
      this.showSpans = !this.showSpans;
    },
  },
};
</script>

<style scoped>
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

.birthday-container {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
}

.birthday-title {
  color: #333;
  text-align: center;
}

.birthday-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.birthday-table th, .birthday-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.birthday-table th {
  background-color: #f2f2f2;
}

</style>
