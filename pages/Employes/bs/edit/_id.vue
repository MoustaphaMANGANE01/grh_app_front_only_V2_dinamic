<template>
  <div>
    <div class="pt-20 flex justify-center">
      <div class="flex justify-center p-10 w-full max-w-md max-h-full">
        <div
          class="relative rounded-lg shadow"
          :class="{ 'bg-gray-700': isDarkMode, 'bg-white': !isDarkMode }"
        >
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t"
          >
            <h3
              class="text-lg font-semibold"
              :class="{
                'text-white': isDarkMode,
                'text-gray-900': !isDarkMode,
              }"
            >
              Enregistrer un bulletin de Salaire
            </h3>
          </div>
          <form
            class="p-4 md:p-5"
            @submit.prevent="onSubmit"
            enctype="multipart/form-data"
          >
            <div class="grid gap-4 mb-4 grid-cols-2">
              <div class="col-span-2 sm:col-span-1">
                <label
                  class="block mb-2 text-sm font-medium"
                  :class="{
                    'text-white': isDarkMode,
                    'text-gray-900': !isDarkMode,
                  }"
                >
                  Bulletin de salaire
                </label>
                <input
                  type="file"
                  class="text-sm rounded-lg block w-full p-2.5"
                  :class="{
                    'bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-500 focus:ring-primary-500 ':
                      !isDarkMode,
                    'bg-gray-600 focus:border-primary-500 focus:ring-primary-500 text-white placeholder-gray-400 border-gray-500 ':
                      isDarkMode,
                  }"
                  placeholder=""
                  required=""
                  @change="fileSelected"
                />
              </div>
              
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="annee"
                  class="block mb-2 text-sm font-medium"
                  :class="{
                    'text-white': isDarkMode,
                    'text-gray-900': !isDarkMode,
                  }"
                >
                  Année
                </label>
                <select
                  id="annee"
                  v-model="selectedannee"
                  :class="{
                    'bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-500 focus:ring-primary-500 ':
                      !isDarkMode,
                    'bg-gray-600 focus:border-primary-500 focus:ring-primary-500 text-white placeholder-gray-400 border-gray-500 ':
                      isDarkMode,
                  }"
                  class="border text-sm rounded-lg block w-full p-2.5"
                >
                  <option v-for="annee in annees" :key="annee" :value="annee">
                    {{ annee }}
                  </option>
                </select>
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="month"
                  class="block mb-2 text-sm font-medium"
                  :class="{
                    'text-white': isDarkMode,
                    'text-gray-900': !isDarkMode,
                  }"
                >
                  Mois
                </label>
                <select
                  id="month"
                  v-model="mois"
                  :class="{
                    'bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-500 focus:ring-primary-500 ':
                      !isDarkMode,
                    'bg-gray-600 focus:border-primary-500 focus:ring-primary-500 text-white placeholder-gray-400 border-gray-500 ':
                      isDarkMode,
                  }"
                  class="border text-sm rounded-lg block w-full p-2.5"
                >
                  <option selected disabled>Selectionner le Mois</option>
                  <option
                    v-for="month in filteredMonths"
                    :key="month"
                    :value="month"
                  >
                    {{ month }}
                  </option>
                </select>
              </div>
              <div class="col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium"
                  :class="{
                    'text-white': isDarkMode,
                    'text-gray-900': !isDarkMode,
                  }"
                >
                  Commentaire
                </label>
                <textarea
                  id="description"
                  rows="4"
                  class="block p-2.5 w-full text-sm rounded-lg border"
                  v-model="commentaire"
                  placeholder=""
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Ajouter le bulletin
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>