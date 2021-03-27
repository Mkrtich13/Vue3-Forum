<template>
  <span :title="humanFriendlyDate">
    {{ diffForHumans }}
  </span>
</template>

<script>
  import { computed } from 'vue'
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import localizedFormat from 'dayjs/plugin/localizedFormat'

  dayjs.extend(relativeTime)
  dayjs.extend(localizedFormat)

  export default {
    props: {
      timestamp: {
        type: Number,
        required: true
      }
    },
    setup(props) {
      const diffForHumans = computed(() => {
        return dayjs.unix(props.timestamp).fromNow()
      })

      const humanFriendlyDate = computed(() => {
        return dayjs.unix(props.timestamp).format('llll')
      })

      return {
        diffForHumans,
        humanFriendlyDate
      }
    }
  }
</script>
