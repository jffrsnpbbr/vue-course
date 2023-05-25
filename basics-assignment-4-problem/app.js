const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      inputBackgroundColor: '',
      isVisible: false
    }
  },
  computed: {
    pClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.isVisible,
        hidden: !this.isVisible
      }
    },
    pStyle() {
      return { backgroundColor: this.inputBackgroundColor }
    }
  },
  methods: {
    buttonToggle() { this.isVisible = !this.isVisible; }
  }

});

app.mount('#assignment');