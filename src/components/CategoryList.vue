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
  import data from '@/data.json'
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
      const getForumsForCategory = category => {
        return data.forums.filter(forum => forum.categoryId === category.id)
      }

      return {
        getForumsForCategory
      }
    }
  }
</script>
