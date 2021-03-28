<template>
  <h1>Welcome to forums</h1>
  <category-list :categories="categories" />
</template>

<script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import CategoryList from '@/components/CategoryList'

  export default {
    components: {
      CategoryList
    },
    setup() {
      const store = useStore()

      const categories = computed(() => store.state.categories)

      return {
        categories
      }
    }
  }
</script>
