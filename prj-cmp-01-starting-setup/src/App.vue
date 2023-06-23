<template>
  <ul>
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>
<script>
import LearningResource from './components/LearningResource.vue';

export default {
  components: { LearningResource },
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