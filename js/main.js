console.log("Vue er indlæst:", Vue); // Skal udskrives, hvis Vue.js er korrekt indlæst.

const app = Vue.createApp({
  data() {
    return {
      intro: 'Welcome to my Vue template',
    };
  },
  methods: {
    myMethod() {
      console.log("This is a method in the Vue template.");
    },
  },
  computed: {
    myComputed() {
      return this.intro.toUpperCase(); // Eksempel på en computed property
    },
  }
});

const mountedApp = app.mount('#app');
console.log("App mounted:", mountedApp); // Skal udskrives med dataen, hvis appen er korrekt monteret
