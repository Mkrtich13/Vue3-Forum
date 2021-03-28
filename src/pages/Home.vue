<template>
  <h1>Welcome to forums</h1>
  <category-list :categories="categories" />
</template>

<script>
  import { reactive } from 'vue'
  import CategoryList from '@/components/CategoryList'
  import data from '@/data.json'

  export default {
    components: {
      CategoryList
    },
    setup() {
      const categories = reactive(data.categories)

      return {
        categories
      }
    }
  }
</script>
