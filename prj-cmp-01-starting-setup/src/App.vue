<template>
  <ul>
    <li></li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: crypto.randomUUID(),
          title: 'Official Guide',
          description: 'The official Vuejs Documentation',
          link: 'https://vuejs.org'
        },
        {
          id: crypto.randomUUID(),
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com'
        },
      ]
    }
  }
}
</script>