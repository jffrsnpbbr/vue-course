const app = Vue.createApp({
  data() {
    return {
      friends: [
        { id: 'manuel', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com' },
        { id: 'julie', name: 'Julie Jones', phone: '01234 5678 991', email: 'julie@localhost.com' }
      ]
    }
  }
})

app.component('friend-contact', {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">Show Details</button>
      <ul v-if="detailsArevisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      friend:  { id: 'manuel', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com' },
      detailsArevisible: false
    }
  },
  methods: {
    toggleDetails() {
      this.detailsArevisible = !this.detailsArevisible;
    }
  }
});

app.mount('#app')