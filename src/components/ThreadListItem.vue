<template>
  <div class="thread">
    <div>
      <p>
        <a href="#">{{ thread.title }}</a>
      </p>
      <p class="text-faded text-xsmall">
        By
        <a href="#"> {{ getUserById(thread.userId).name }} </a>,
        {{ thread.publishedAt }}
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
          {{ thread.publishedAt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '@/data.json'
  export default {
    props: {
      thread: {
        type: Object,
        required: true
      }
    },
    setup() {
      const getUserById = userId => {
        return data.users.find(user => user.id === userId)
      }

      const getPostById = postId => {
        return data.posts.find(post => post.id === postId)
      }

      return {
        getUserById,
        getPostById
      }
    }
  }
</script>
