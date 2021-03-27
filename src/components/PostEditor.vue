<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea
          v-model="text"
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-input"
        >
        </textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">
          Submit post
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup(_, context) {
      const text = ref('')

      const save = () => {
        const postId = 'qqqq' + Math.random()
        const post = {
          id: postId,
          text: text.value,
          pusblishedAd: Math.floor(Date.now() / 1000),
          userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
        }

        context.emit('save-post', { post })
        text.value = ''
      }

      return {
        save,
        text
      }
    }
  }
</script>
