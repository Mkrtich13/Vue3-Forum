<template>
  <h1>{{ category.name }}</h1>
  <forum-list :forums="forums" />
</template>

<script>
  import { computed } from 'vue'
  import ForumList from '@/components/ForumList'
  import data from '@/data.json'

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
      const category = computed(() => {
        return data.categories.find(category => category.id === props.id)
      })

      const forums = computed(() => {
        return data.forums.filter(
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
