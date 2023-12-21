// store/darkMode.js
export const state = () => ({
    isDarkMode: false,
  });
  
  export const mutations = {
    initializeDarkMode(state, isDarkMode) {
      state.isDarkMode = isDarkMode;
    },
  };
  
  export const actions = {
    initializeDarkMode({ commit }) {
      // Ajoutez votre logique d'initialisation du mode sombre ici
      const isDarkMode = true; // Remplacez par votre logique réelle
      commit('initializeDarkMode', isDarkMode);
    },
  };
  