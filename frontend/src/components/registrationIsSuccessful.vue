<template>
	<section class="field">

		<div class="field-header">
			<button @click="returnToPage"><span>вернутся на страницу</span></button>
		</div>

		<div class="field-body">
			<span>Вы авторизированы</span>
		</div>
		<div class="field-footer">
			<button @click="exit">пошол нахуй</button>
		</div>
	</section>

</template>


<script>
	import { useStore } from "vuex"
	import { useRouter } from 'vue-router'
export default {
	setup() {
	const router = useRouter()
	const store = useStore()
	function returnToPage() {
			router.replace(store.state.path)
	}

	function exit() {
		store.commit("exit")

	}

	return {
		returnToPage,
		exit,
	}
	}
}
</script>

<style scoped>

.field {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  margin:25% 25% 25% 25%;
  width:50%;
	height: 50%;
	max-width: 500px;
	border: 1px solid #000;
	border-radius: 5px;
	min-width: 200px;
	min-height: 200px;
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