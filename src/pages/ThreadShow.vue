<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts" />
    <post-editor @save-post="onAddPost" />
  </div>
</template>

<script>
  import { computed, reactive } from 'vue'
  import PostList from '@/components/PostList'
  import PostEditor from '@/components/PostEditor'

  import data from '@/data.json'

  export default {
    name: 'ThreadShow',
    components: {
      PostList,
      PostEditor
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const posts = reactive(data.posts)
      const threads = reactive(data.threads)

      const thread = computed(() => {
        return threads.find(thread => thread.id === props.id)
      })

      const threadPosts = computed(() => {
        return posts.filter(post => post.threadId === props.id)
      })

      const onAddPost = eventData => {
        const post = {
          ...eventData.post,
          threadId: props.id
        }

        posts.push(post)
        thread.value.posts.push(post.id)
      }

      return {
        thread,
        threadPosts,
        posts,
        onAddPost
      }
    }
  }
</script>

<style scoped></style>
