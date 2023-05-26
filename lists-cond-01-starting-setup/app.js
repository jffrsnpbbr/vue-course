

const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      const goal = {
        id: crypto.randomUUID(),
        description: this.enteredGoalValue
      }
      this.goals.push(goal)
      this.enteredGoalValue = '';
    },
    removeGoal(id) {
      
      const index = this.goals.findIndex(goal => goal.id === id);
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
