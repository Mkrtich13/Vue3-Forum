<template>
  <forum-list
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script>
  import { useStore } from 'vuex'
  import ForumList from '@/components/ForumList'
  export default {
    components: {
      ForumList
    },
    props: {
      categories: {
        type: Array,
        required: true
      }
    },
    setup() {
      const store = useStore()

      const getForumsForCategory = category => {
        return store.state.forums.filter(
          forum => forum.categoryId === category.id
        )
      }

      return {
        getForumsForCategory
      }
    }
  }
</script>
