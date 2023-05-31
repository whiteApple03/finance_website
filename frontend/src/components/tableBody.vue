<template >
	<main>
		<aside></aside>
		<section class="content PageTable">
				<h1 class="block-heading">Список систем:</h1>
				
				<section class="section-table">
						<div class="main-table">
								<table>
										<caption>Ваши финансовые Системы</caption>
										<thead>
												<tr>
														<th>№</th>
														<th>название системы</th>
														<th>Цель</th>
														<th>Последние Вхождение</th>
														<th>Дата создания</th>
												</tr>
										</thead>
										<tbody v-for = "(value, index) in rows" :key="index">
											<tr>
												<th>{{ index + 1}}</th>
												<th>{{ value.systemName }}</th>
												<th>{{ value.aim }}</th>
												<th>{{ value.lastOccurrence.substr(0, 10)}}</th>
												<th>{{ value.createdAt.substr(0, 10) }}</th>
												<th>
													<bottom  @click="delete_row(index)" class="bottom-delete-system"  >
														<img class="icon-delete" src="../icon/deleteElement.png" alt="Удалть Систему">
													</bottom>
												</th>
											</tr>
										</tbody>
								</table>
						</div>
						<div class="table-foot">
								<div v-if="isAuthorized">
									<span v-if="!moreThenOne" id="noActiveSystem">У вас пока нет активных систем</span>
								</div>
								<div v-else>
									<span>авторизируйтесь, чтобы управлять таблицей</span>
								</div>
								<button v-if="isAuthorized" class="bottom-add-new-system" @click="add_new_row">
										<span class="text-bottom">Создать новую систему</span>
										<img class="icon-plus" src="../icon/plus.png" alt="plus">
								</button>
						</div>
				</section>
		</section>
		<aside></aside>

	</main>
</template>

<script>
	import { watch, computed } from 'vue'
	import { useStore } from 'vuex'
	// import { computed } from 'vue'
	//import authModule from '../api/index'
	export default {
		name: "tablePage",
		setup() {
			const store = useStore()
			watch(store.getters.rows, (oldValue, newValue) => {
				if (newValue.length > 0) {
					store.commit("moreThenOne", true)
				} else {
					store.commit("moreThenOne", false)
				}
			}, {deep: true})


			function add_new_row() {
				const systemName = prompt('hi');
				const aim = prompt('hi')
				const row = {
					systemName,
					aim,
				}
				store.dispatch("add_new_row", row)
			}

			function delete_row(index) {
				store.dispatch("delete_row", index)
			}

			return {
				rows: computed(() => store.getters.rows),
				add_new_row,
				delete_row,
				moreThenOne: computed(() =>  store.state.description.moreThenOne),
				isAuthorized: computed(() => store.getters.isAuthorized)

			}
		},
}


</script>