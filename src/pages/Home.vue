<template>
  <h1>Welcome to forums</h1>
  <forum-list :forums="forums" />
</template>

<script>
  import { reactive } from 'vue'
  import ForumList from '@/components/ForumList'
  import data from '@/data.json'

  export default {
    components: {
      ForumList
    },
    setup() {
      const forums = reactive(data.forums)

      return {
        forums
      }
    }
  }
</script>
