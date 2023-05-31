<template>
	<section class="field">
		<div class="field-block">
			<div class="field-header">
				<button @click="inField"><span :class="{activeState: fieldState.sign_in}">вход</span></button>
				<button @click="upField"><span :class="{activeState: fieldState.sign_up}">регистрация</span></button>
				<button @click="returnToPage"><span>закрыть</span></button>
			</div>

			<form class="form" action="">
				<div class="property-of-field">
					<label>логин:&nbsp;&nbsp;&nbsp;</label>
					<input type="text" v-model="fieldValue.login">
				</div>
				<div class="property-of-field">
					<label>пароль: </label>
					<input type="text" v-model="fieldValue.password">
				</div>
			</form>
			<div class="field-footer">
				<button @click="accept" @keypress="accept">принять</button>
			</div>
			<div v-if="error" class="error-message">
				<h5>Не удалось зарегистрироваться. попробуйте еще раз</h5>
			</div>
		</div>
	</section>

</template>

<script>
	import { useStore } from 'vuex';
	import { ref } from 'vue';
	export default {
		name: "authorizationField",
		setup() {
			const store = useStore()
			let error = ref(false)
			const fieldState = ref({
				sign_up: (store.state.auth.sign_up),
				sign_in: (store.state.auth.sign_in),
			})
			const fieldValue = ref({
				login: '',
				password: '',
				
			})

			function returnToPage() {
				store.commit("changeSignUp", false)
				store.commit("changeSignIn", false)
				let hml = document.querySelector('html')
				hml.style = "background: white"
			}
			async function accept() {
				if (fieldState.value.sign_up){
					await store.dispatch("register", {login: fieldValue.value.login, password: fieldValue.value.password})
				} else {
					await store.dispatch("auth", {login: fieldValue.value.login, password: fieldValue.value.password})
				}
				if (store.state.status >= 200 && store.state.status < 300){
					error.value = false
					returnToPage()
				} else {
					fieldValue.value.login = ''
					fieldValue.value.password = ''
					error.value = true
				}


			}

			function inField() {
				const html = document.querySelector("html")
				html.style.background = "black"
				fieldState.value.sign_in = true
				fieldState.value.sign_up = false
			}

			function upField() {
				const html = document.querySelector("html")
				html.style.background = "black"
				fieldState.value.sign_in = false
				fieldState.value.sign_up = true
			}

			return {
				fieldState,
				fieldValue,
				upField,
				inField,
				accept,
				returnToPage,
				error
			}
		},
	}
</script>

<style scoped> 

.field {
  width: 50%;
  height: 50%;
  overflow: auto;
  margin: auto;
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: 999;
}

.field-block {
	display: flex;
	flex-direction: column;
	border: 2px solid #000;
	background: white;
}

.form {
	display: flex;
	flex-direction: column;
	padding: 20px;
}
.property-of-field {
	padding-top: 20px;
}
.field-header {
	display: flex;
}
.activeState {
	color: #3434;
}
</style>