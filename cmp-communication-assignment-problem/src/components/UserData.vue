<template>
  <section>
    <form @submit.prevent="$emit('submit-data', nameInput, ageInput)">
        <input type="text" placeholder="Your name" v-model="nameInput">
        <input type="number" placeholder="Your age" v-model="ageInput">
        <button type="submit">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nameInput: '',
      ageInput: 0
    }
  },

}
</script>