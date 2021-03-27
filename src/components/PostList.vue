<template>
  <div class="post-list">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name">
          {{ getUserById(post.userId).name }}
        </a>

        <a href="">
          <img
            class="avatar-large"
            :src="getUserById(post.userId).avatar"
            alt="user avatar"
          />
        </a>

        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>

      <div class="post-date text-faded">
        {{ post.publishedAt }}
      </div>
    </div>
  </div>
</template>

<script>
  import data from '@/data.json'

  export default {
    name: 'PostList',
    props: {
      posts: {
        type: Array,
        required: true
      }
    },
    setup(props) {
      console.log(props)
      const getUserById = userId => {
        return data.users.find(user => user.id === userId)
      }

      return {
        getUserById
      }
    }
  }
</script>
