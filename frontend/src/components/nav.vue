<template>
	<header>
		<nav class="head-navigation">
			<a href="/home"><img class="icon-house" src="../icon/house.png"> </a>
			<a href="notDone"><span>Мои цели</span></a>
			<a @click="$router.replace('/table')"><span>Финансовые системы</span></a>
			<a href="notDone"><span>Статистика</span></a>
			<a href="notDone"><span>Помощь</span></a>
			<div class="authorization-management" v-if="!isAuthorized">
				<button @click="signIn" class="manag-auth">войти</button>
				<button @click="signUp" class="manag-auth">зарегистрироваться</button>
			</div>
			<div style="display: flex; align-items: center;" @mouseleave="menu_is_open = false" v-else>
				<a @click="[contextmenu($event)]">
					<img class="icon-user" src="../icon/user.png" alt="я">
					<div v-show="menu_is_open" class="contextmenu">
						<context-menu />
					</div>
				</a>
			</div>
		</nav>
	</header>
	<authorization-field v-if="$store.state.auth.sign_in || $store.state.auth.sign_up"></authorization-field>
</template>

<script>
import { useStore } from 'vuex'
import authorizationField from './authorizationField.vue'
import contextMenu from './contextMenu.vue'
import { computed } from 'vue'
import { ref } from 'vue'
export default {
	name: "headerComp",
	components: {
		authorizationField,
		contextMenu
	},
	setup() {

		const store = useStore()
		// let profileX = ref(0)
		let menu_is_open = ref(false)
		function signIn() {
			store.commit("changeSignIn", true)
			store.commit("changeSignUp", false)
			const html = document.querySelector("html")
			html.style.background = "black"
		}

		function signUp() {
			store.commit("changeSignIn", false)
			store.commit("changeSignUp", true)
			const html = document.querySelector("html")
			html.style.background = "black"
		}





		function contextmenu(event) {
			const offsetY = 40
			const offsetX = -60
			const coordX = event.target.getBoundingClientRect().x
			const coordY = event.target.getBoundingClientRect().y
			const contextMenu = event.currentTarget.lastChild
			contextMenu.style.left = coordX + offsetX + 'px'
			contextMenu.style.top = (coordY + offsetY) + 'px'
			contextMenu.style.display = 'block'


			menu_is_open.value = !menu_is_open.value
		}
		function setProfilecordX() {
			menu_is_open.value = false;

			// console.log(event.target.getBoundingClientRect().x)
		}



		return {
			signIn,
			signUp,
			isAuthorized: computed(() => store.getters.isAuthorized),
			contextmenu,
			setProfilecordX,
			menu_is_open,
			// profileX: thi
		}
	}

}
</script>

<style>
.authorization-management {
	display: flex;
	align-self: center;
	justify-content: space-around;
}

.contextmenu {
	position: absolute;
	z-index: 10;

}

* {
	font-family: 'Roboto', sans-serif;
}


body {
	margin: 0;
	background-color: #e9e9e9ba;



}



header {
	background-color: #d9d9d9;
}

.flex-conteiner {
	display: flex;
	flex-direction: column;

}

article {
	flex-wrap: wrap;
}


main {
	display: flex;
	flex: 1
}

aside {
	background: white url(../img/aside.jpg);
	color: #fff;
	/*Цвет текста на странице*/
	background-attachment: fixed;
	/* Фон страницы фиксируется */
	background-repeat: repeat-y;
	/* Изображение повторяется по горизонтали */
	flex: 1;
}

footer {
	background-color: #2a1b1bd6;
	width: 100%;
	display: flex;
	justify-content: center;
}

footer nav {
	display: flex;
	flex-direction: column;
	padding-left: 100px;
}

footer a {
	color: #f5c4c4;
	align-self: stretch;
	padding-bottom: 20px;
}

footer a:hover {
	color: white
}


.footer-section {
	width: 960px;
}

.footer-block {
	display: flex;
	justify-content: space-between;
	margin: 50px 30px 30px 20px;

}

.footer-block span {
	font-size: 16pt;
	color: white
}

a {
	align-self: center;
	text-decoration: none;
	color: black;
	transition: 0.05s linear;
}

a:hover {
	font-size: 18px;
	color: #0000005b;
}




h1 {
	padding-left: 50px;

}

.struct {
	margin: auto;
	max-width: 960px;
	background-color: #f5e0e08f;
	display: flex;
	justify-content: space-around;
	flex: 1;


}

.PageTable {
	height: 100vh;
}



.sectoin-head {

	margin-bottom: 20px;
	background-color: #BABABA;

}

.head-navigation {
	min-height: 52px;
	max-width: 755px;
	margin: auto;
	display: flex;
	align-self: center;
	justify-content: space-around;
	flex-wrap: wrap;

}

.head-navigation a {
	font-size: 14pt;
	transition: 0.35s linear;
	color: #000;

}

.head-navigation a:hover {
	color: #64154ab4;
	text-decoration: underline;
}

.icon-user {
	align-self: center;
	width: 32px;
	height: 32px;
}


.section-table {
	flex-direction: column;
	padding: 20px 50px 100px 50px;
	border-bottom: 1px solid #000;
	border-top: 1px solid #000;
}

.table-heading {
	margin: 50px;
}

.main-table {
	margin-bottom: 5px;
}

.table-foot {
	display: flex;
	justify-content: space-between;
	align-items: center;

}

table {
	border: 2px solid grey;
	border-collapse: collapse;
	width: 100%;
	table-layout: auto;

}

caption {
	border: 2px solid grey;
	font-size: 20pt;
	font-style: italic;
}

th {
	font-size: 12pt;
}

td {
	font-size: 14pt;
	padding: 5px 0 5px 10px;
}

tr {
	font-size: 10pt;
}

tr,
th,
td {
	border: 1px solid grey;
	flex-wrap: wrap;
	max-width: 300px;


}


.content {
	flex-grow: 5;
	display: flex;
	flex-direction: column;

	flex: 3;

}

.content h2 {
	max-width: 700px;
	padding: 45px;
	align-self: center;
	margin: 30px 20px 15px 20px;
	border: 1px solid #00000057;
	border-radius: 20px;
	background-color: #cd6f6f17;
	font-size: 25pt;
	flex-wrap: wrap;


}

.content-img {
	display: flex;
	justify-content: center;
	border-radius: 12px;
	margin: 50px;

}

.content-img img {
	display: flex;
	max-width: 100%;
	height: auto;
}



.text-content {
	padding: 0px 30px;
	font-size: 15pt;
}



.text-end-of-main {
	border-top: 2px solid red;
	border-bottom: 2px solid red;
	padding-top: 0px;
	padding-bottom: 20px;
	margin-top: 50px;
	margin-bottom: 60px;
}



.icon-house {
	align-self: center;
	width: 32px;
	height: 32px;
}

.manag-auth {
	display: flex;
	align-items: center;
	font-size: 14px;
	border-radius: 10px;
	background-color: wheat;
	transition-duration: 0.5s;
	min-height: 20px;
	margin-right: 10px;



}

.manag-auth:hover {
	background-color: white;
	cursor: pointer;
}

.text-bottom {
	width: 100%;
}

.bottom-add-new-system:hover {
	background-color: white;
	cursor: pointer;
}

.icon-plus {

	width: 20px;
	height: 20px;
	padding-left: 10px;
}

.delete-system {
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	padding: 5px 0 0 0;
}


.bottom-delete-system:hover {
	cursor: pointer;

}

.icon-delete {
	height: 20px;
	width: 20px;

}
</style>