<template>
	<authorizationField v-if="true"></authorizationField>
</template>

<script>
	import authorizationField from '../components/authorizationField.vue'
	// import registrationIsSuccessful from '../components/registrationIsSuccessful.vue'
	import { useStore } from 'vuex';
	import { computed } from '@vue/reactivity';


	export default {
		name: "authorizationFieldPage",
		setup() {
			const store = useStore()
			let isAuthorized = computed(() => store.state.auth.isAuthorized)
			return {
				isAuthorized
			}
			
			
		},

		components: {
			authorizationField,
		}

	}

</script>