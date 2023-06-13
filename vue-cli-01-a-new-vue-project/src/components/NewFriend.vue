<template>
  <form @submit.prevent="formSubmit">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName">
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone">
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmail">
    </div>
    <div>
      <button type="submit">Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: ''
    }
  },
  methods: {
    formSubmit() {
      // const data = { name: this.enteredName, phone: this.enteredPhone, email: this.enteredEmail};
      // console.log(data);
      this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
    }
  }
}
</script>

<style>
</style>