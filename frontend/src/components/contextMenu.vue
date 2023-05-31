<template>
	<section class="box">
		<div>
			<span>{{ user.login }}</span>
			<span>{{ user.marks }}</span>

		</div>
		<button @click="exit($event)">выйти</button>
	</section>
</template>


<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
	export default {
		name: 'contextMenu',
		setup() {
			const store = useStore()

			function exit(event) {
			if (typeof(event) !== "undefined"){
				store.commit("exit")		
				}
			}
			return {
			exit,
			user: computed(() => store.getters.user)
			}
		} 

	}

</script>

<style scoped>
.box {
	min-height: 100px;
	min-width: 100px;
	background-color: rgb(210, 209, 209);
	border: 1px solid black;
}



</style>