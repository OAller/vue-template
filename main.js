const app = Vue.createApp({
    data() {
      return {
        intro: 'Welcome to my Vue template'
      };
    },
    methods: {
      myMethod() {
        console.log("This is a method in the Vue template.");
      }
    },
    computed: {
      myComputed() {
        return this.intro.toUpperCase(); // Computed property eksempel
      }
    }
  });
  
  const mountedApp = app.mount('#app');
  