<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts" />
    <post-editor @save-post="onAddPost" />
  </div>
</template>

<script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import PostList from '@/components/PostList'
  import PostEditor from '@/components/PostEditor'

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
      const store = useStore()

      const posts = computed(() => store.state.posts)
      const threads = computed(() => store.state.threads)

      const thread = computed(() => {
        return threads.value.find(thread => thread.id === props.id)
      })

      const threadPosts = computed(() => {
        return posts.value.filter(post => post.threadId === props.id)
      })

      const onAddPost = eventData => {
        const post = {
          ...eventData.post,
          threadId: props.id,
          publishedAt: Math.floor(Date.now() / 1000)
        }

        store.dispatch('createPost', post)
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
