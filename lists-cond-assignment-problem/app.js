const app = Vue.createApp({
  data() {
    return {
      inputTask: '',
      tasks: [],
      showList: false
    }
  },
  computed: {
    buttonCaption() {
      return this.showList ? 'Hide' : 'Show';
    }
  },
  methods: {
    addTask() {
      console.log('addTask')
      const task = { id: crypto.randomUUID(), description: this.inputTask };
      console.log(task)
      this.tasks.push(task);
      this.inputTask = '';
    },
    toggleShowList() {
      this.showList = !this.showList;
    }
  }
});

app.mount('#assignment')