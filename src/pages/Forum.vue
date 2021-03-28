<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <thread-list :threads="threads" />
  </div>
</template>

<script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import ThreadList from '@/components/ThreadList'

  export default {
    components: {
      ThreadList
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const store = useStore()
      const forum = computed(() => {
        return store.state.forums.find(forum => forum.id === props.id)
      })

      const threads = computed(() => {
        return store.state.threads.filter(thread => thread.forumId === props.id)
      })

      return {
        forum,
        threads
      }
    }
  }
</script>
