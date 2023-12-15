<template>
  <div>
    <div class="flex justify-center p-20">
    <div class="dark:bg-gray-500 overflow-hidden  shadow rounded-lg border">
      <div v-if="absenceDetails">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-2xl leading-6 font-bold text-white">
            Les informations sur l'Absence 
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
          </p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-white">
                Motif de l'absence
              </dt>
              <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                {{ absenceDetails.motif }}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-white">
                Date de début
              </dt>
              <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                {{ absenceDetails.date_debut }}
              </dd>
            </div>
              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-white">
                Date de Fin
              </dt>
              <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                {{ absenceDetails.date_fin }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      absenceDetails: null, 
    };
  },
  async asyncData({ params }) {
    try {
      let token = null;

      if (process.client) {
        token = localStorage.getItem('token');
      }

      if (!token) {
        console.error('No authToken available. Make sure the user is authenticated.');
        return {};
      }

      const apiUrl = process.env.VUE_APP_API_URL || 'http://127.0.0.1:8000';
      const response = await axios.get(`${apiUrl}/api/v1/absences/show/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const absenceDetails = response.data.data;

      return { absenceDetails };
    } catch (error) {
      console.error('Error fetching data from the API', error);
      return { absenceDetails: null };
    }
  },
};
</script>

<style scoped>
</style>
