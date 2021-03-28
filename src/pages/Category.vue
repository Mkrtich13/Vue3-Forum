<template>
  <h1>{{ category.name }}</h1>
  <forum-list :forums="forums" />
</template>

<script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import ForumList from '@/components/ForumList'

  export default {
    components: {
      ForumList
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const store = useStore()

      const category = computed(() => {
        return store.state.categories.find(category => category.id === props.id)
      })

      const forums = computed(() => {
        return store.state.forums.filter(
          forum => forum.categoryId === category.value.id
        )
      })

      return {
        category,
        forums
      }
    }
  }
</script>
