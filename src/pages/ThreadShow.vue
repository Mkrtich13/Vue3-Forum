<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <div class="post-list">
      <div class="post" v-for="postId in thread.posts" :key="postId">
        <div class="user-info">
          <a href="#" class="user-name">{{
            getUserById(getPostById(postId).userId).name
          }}</a>

          <a href="">
            <img
              class="avatar-large"
              :src="getUserById(getPostById(postId).userId).avatar"
              alt="user avatar"
            />
          </a>

          <p class="desktop-only text-small">107 posts</p>
        </div>

        <div class="post-content">
          <div>
            <p>
              {{ getPostById(postId).text }}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{ getPostById(postId).publishedAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue'

  import data from '@/data.json'

  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const thread = computed(() => {
        return data.threads.find(thread => thread.id === props.id)
      })

      const getUserById = userId => {
        return data.users.find(user => user.id === userId)
      }

      const getPostById = postId => {
        return data.posts.find(post => post.id === postId)
      }

      return {
        thread,
        getUserById,
        getPostById
      }
    }
  }
</script>

<style scoped></style>
