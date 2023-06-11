<template>
  <section>
    <h2>My Friends</h2>
    <ul v-for="friend in friends" :key="friend.id">
      <friend-contact :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.favorite"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'e386dcac-343f-4bc4-9cf2-ba76dcc6739c',
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: "manuel@localhost.com",
          favorite: true
        },
        {
          id: '1efc6922-ec17-43ed-9d4a-6e4d602d67bd',
          name: 'Julie Jones',
          phone: '0987 654421 21',
          email: 'julie@localhost.com',
          favorite: false
        }
      ]
    }
  }
}

</script>