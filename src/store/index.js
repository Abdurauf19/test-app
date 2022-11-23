import { createStore } from 'vuex';
import axios from '~/plugins/axios';

const axiosPlugin = store => {
	store.$axios = axios;
};

export default createStore({
	state: {
		posts: [],
	},
	mutations: {
		SET_POSTS(state, posts) {
			state.posts = posts;
		},
	},
	actions: {
		fetchPosts({ commit }) {
			return new Promise((resolve, reject) => {
				this.$axios
					.get('posts/')
					.then(response => {
						commit('SET_POSTS', response.data);
						resolve(response);
					})
					.catch(error => {
						reject(error);
					});
			});
		},
	},
	getters: {},
	modules: {},
	plugins: [axiosPlugin],
});
