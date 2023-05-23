const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/'
    }
  },
  methods: {
    ouputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 'Learn vue!'
      } else {
        return 'Master Vue!'
      }
    },
  }
});

app.mount('#user-goal')