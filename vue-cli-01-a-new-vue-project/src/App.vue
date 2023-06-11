<template>
  <section>
    <h2>My Friends</h2>
    <ul v-for="friend in friends" :key="friend.id">
      <li>{{ friend.name }}</li>
    </ul>
    <ul>
      <friend-contact
        name="Manuel Lorenz"
        phone-number="0123 45678 90"
        email-address="manuel@localhost.com"
        is-favorite="1"
      ></friend-contact>
      <friend-contact
        name="Julie Jones"
        phone-number="0987 654421 21"
        email-address="julie@localhost.com"
        is-favorite="0"
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
          email: "manuel@localhost.com"
        },
        {
          id: '1efc6922-ec17-43ed-9d4a-6e4d602d67bd',
          name: 'Julie Jones',
          phone: '0987 654421 21',
          email: 'julie@localhost.com'
        }
      ]
    }
  }
}

</script>