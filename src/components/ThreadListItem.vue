<template>
  <div class="thread">
    <div>
      <p>
        <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">
          {{ thread.title }}
        </router-link>
      </p>
      <p class="text-faded text-xsmall">
        By
        <a href="#">
          {{ getUserById(thread.userId).name }}
        </a>
        &nbsp;
        <app-date :timestamp="thread.publishedAt" />
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">{{ thread.posts.length }} replies</p>

      <img
        :src="getUserById(thread.userId).avatar"
        alt="user avatar"
        class="avatar-medium"
      />

      <div>
        <p class="text-xsmall">
          <a href="#"> {{ getUserById(thread.userId).name }} </a>
        </p>
        <p class="text-xsmall text-faded">
          <app-date :timestamp="thread.publishedAt" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { useStore } from 'vuex'

  export default {
    props: {
      thread: {
        type: Object,
        required: true
      }
    },
    setup() {
      const store = useStore()

      const getUserById = userId => {
        return store.state.users.find(user => user.id === userId)
      }

      const getPostById = postId => {
        return store.state.posts.find(post => post.id === postId)
      }

      return {
        getUserById,
        getPostById
      }
    }
  }
</script>
