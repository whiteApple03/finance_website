import { createStore } from 'vuex'
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'


const dataState = createPersistedState({
	paths: ['auth', 'rows', 'description', 'user']
})

const store = createStore({
	state: {
			user: {
				login: '',
				marks: 0
			},
			auth: {
				sign_in: false,
				sign_up: false,
				isAuthorized: false,
				token: ''
			},
			rows : [],
			description: { 
				moreThenOne: Boolean,
			},
			status: 250,
			path: '/home'
			
		},
	getters: {
		user: state => {
			return state.user
		},
		rows: state => {
			return state.rows
		},
		isAuthorized: state => {
      return state.auth.isAuthorized;
    },
		getStatus: state => state.status
	},
	mutations: {
		userInfo(state, user) {
			state.user = user
		},

		status(state, newStatus) {
			state.status = newStatus
		},
		moreThenOne(state, newVal) {
			state.description.moreThenOne = newVal
		},

	
		exit(state) {
			state.auth = {
				sign_in: false,
				sign_up: false,
				isAuthorized: false,
				token: ''
			}
			state.rows = []

			
		},
		changeAuth(state, newState) {
			state.auth.isAuthorized = newState
		},

		changeSignUp(state, newValue) {
			state.auth.sign_up = newValue
		},

		changeSignIn(state, newValue) {
			state.auth.sign_in = newValue
		},

		pushToken(state, token){
			state.auth.token = token
		},

		changePath(state, newPath){
			state.path = newPath
		},
		addRows(state, newRows) {
			newRows.forEach(element => {
				element.lastOccurrence.substr(0, 10)
				element.createdAt.substr(0, 10)
			});

			Object.assign(state.rows, newRows)
		},

	},
	actions: {
		register: async (context, authData) => {
			await axios.post('http://localhost:3000/auth/register', 
			{
				login: authData.login,
				password: authData.password,
			}
		)
		.then((res) => {
			context.commit("pushToken", res.data.token)
			store.commit("changeAuth", true)
			context.commit("status", res.status)
		})
		.catch((err) => context.commit("status", err.response.status))
		
		},
		auth: async (context, authData) => {
			await axios.post("http://localhost:3000/auth/login",{	
				login: authData.login,
				password: authData.password,			
			})
			.then((res) => {
				context.commit("status", res.status)
				store.commit("pushToken", res.data.token)
				store.commit("changeAuth", true)
				store.commit("addRows", res.data.TableRows)
				store.commit("userInfo", 
				{
					login: authData.login
				})

			})
			.catch((err) => {
				context.state.status = err.response.status
			})
		},
		add_new_row: async (context, rowData) => {

			await axios.post('http://localhost:3000/Table', 
			{
				aim: rowData.aim,
				systemName: rowData.systemName,

			},
			{ 
				headers: {authorization: `Bearer ${context.state.auth.token}`}
			})
			.then((res) => {
				context.state.rows.push(res.data.TableRows[res.data.TableRows.length-1])
				context.commit("status", res.status)

			})

			.catch((err) => context.state.status = err.response.status)
		},
		delete_row: async (context, indexTable) => {
			await axios.delete(`http://localhost:3000/Table:${indexTable}`, {
				headers: {authorization: `Bearer ${context.state.auth.token}`}
			})
			.then((res) => {
				context.state.rows.splice(indexTable, 1)
				context.commit("status", res.status)

			})
			
				.catch((err) => context.state.status = err.response.status)
		}
},


plugins: [dataState]

})

export default store
