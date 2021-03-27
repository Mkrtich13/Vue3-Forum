<template>
  <h1>Welcome to the forum</h1>
  <thread-list :threads="threads" />
</template>

<script>
  import { reactive } from 'vue'
  import ThreadList from '@/components/ThreadList'
  import data from '@/data.json'

  export default {
    components: {
      ThreadList
    },
    setup() {
      const threads = reactive(data.threads)

      return {
        threads
      }
    }
  }
</script>
