// darkMode.js
export default ({ app }) => {
    if (app.$nuxt) {
      // Utilisez le hook 'client:mounted' pour exécuter du code côté client après le montage
      app.$nuxt.hook('client:mounted', () => {
        // Votre code ici
        console.log('Plugin darkMode initialisé côté client');
      });
    }
  };
  