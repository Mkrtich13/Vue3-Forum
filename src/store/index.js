import { createStore } from 'vuex'
import data from '@/data.json'

export default createStore({
  state: data,
  actions: {
    createPost(context, post) {
      post.id = 'qqqq' + Math.random()
      context.commit('setPost', { post })
      context.commit('appendToPostToThread', {
        postId: post.id,
        threadId: post.threadId
      })
    }
  },
  mutations: {
    setPost(state, { post }) {
      state.posts.push(post)
    },
    appendToPostToThread(state, { postId, threadId }) {
      const thread = state.threads.find(thread => thread.id === threadId)
      thread.posts.push(postId)
    }
  }
})
