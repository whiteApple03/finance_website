<template>
	<head-comp></head-comp>
	<navComp></navComp>
	<table-body-comp></table-body-comp>
	<footer-comp></footer-comp>
</template>

<script>
	import headComp from '../components/head.vue'
	import footerComp from '../components/footer.vue'
	import navComp from '../components/nav.vue' 
	import tableBodyComp from '../components/tableBody.vue'

	export default {
		name: "tablePage",
		components: {
			headComp,
			footerComp,
			navComp,
			tableBodyComp
		}
	}
</script>