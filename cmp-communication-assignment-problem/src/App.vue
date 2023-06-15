<template>
  <div>
    
    <active-user :username="user.name" :userage="user.age" :key="user.id"/>
    <user-data @submit-data="setUserData" />
  </div>
</template>

<script>
export default {
  data() { return {
    user: { name: 'Jefferson', age: 25}
    
  }},
  methods: {
    setUserData(name, age) {
      this.user = { name, age }
    }
  }
}
</script>

<style>

html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}

</style>