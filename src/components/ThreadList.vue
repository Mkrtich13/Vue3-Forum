<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <thread-list-item
        v-for="thread in threads"
        :key="thread.id"
        :thread="thread"
      />
    </div>
  </div>
</template>

<script>
  import ThreadListItem from '@/components/ThreadListItem'
  export default {
    components: {
      ThreadListItem
    },
    props: {
      threads: {
        type: Array,
        required: true
      }
    }
  }
</script>
