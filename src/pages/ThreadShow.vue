<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts" />
  </div>
</template>

<script>
  import { computed } from 'vue'
  import PostList from '@/components/PostList'

  import data from '@/data.json'

  export default {
    name: 'ThreadShow',
    components: {
      PostList
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const thread = computed(() => {
        return data.threads.find(thread => thread.id === props.id)
      })

      const threadPosts = computed(() => {
        return data.posts.filter(post => post.threadId === props.id)
      })

      return {
        thread,
        threadPosts
      }
    }
  }
</script>

<style scoped></style>
