<template>
        <div class="flex-conteiner">
                <main>
                    <aside></aside>
                    <section class="content">
                        <h2>Финансовый учет как путь к богатству</h2>
                        <article>
                        <p class="text-content">
                            Как часто вы посещаете магазин с целью купить какую-нибудь пустяковую вещь: хлеб, молоко, сметану, а возвращаетесь домой с кучей трещащих по швам пакетов абсолютно не нужных вам вещей. И только по возвращении домой вы выходите из транса и вспоминаете, что на самом деле то, зачем вы шли в магазин не было куплено. Это происходить, потому что вы не понимаете, как расходуется ваш личный бюджет.<br><br> <b>Эту проблему может решить ведение финансового учета.</b> 
                        </p>
                        <div class="content-img">
                            <img src="../img/content.jpg" alt="Картинка">
                        </div>
                    </article>

                    <h2>Системы ведения финансового учета, доступные на этом сайте</h2>

                    <article>
                        <p class="text-content">
                            Существуют разные способы управлять своими финансами. На сайте реализована самый щадящая система. В ней вам не требуется ограничивать себя строгими рамками: тратить на продукты 10% от заработка. Нет, сайт предлагает вам всего лишь вести учет всех доходов и расходов. Это позволит вам увидеть на какие вещи вы тратите больше всего своих денег, и поверьте, как только в столбце одежда вы увидите значительный перевес в затратах относительно других пассивов, вы сами захотите тратить меньше денег на это.
                        </p>

                        <p class="text-content text-end-of-main"><br>Итак, просто перейдите на станицу «Финансовые системы» и начинайте ваш путь к богатству.</p>
                    </article>
                    </section>
                <aside></aside>
                </main>

        </div>


</template>

<script>
	export default {
		name: 'bodyComp'

	}
</script>

<style scoped>
.flex-conteiner {
    display: flex;
    flex-direction: column;
}

aside {
    background: white  url(../img/aside.jpg);
    color: white; /*Цвет текста на странице*/
    background-attachment: fixed; /* Фон страницы фиксируется */
    background-repeat: repeat-y; /* Изображение повторяется по горизонтали */
    flex: 1;
}
</style>

