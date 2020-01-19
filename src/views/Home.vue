<template>
	<div class="home">

		<button @click="handleClick">返回上一页面</button>
		<button @click="handleClick('push')">返回上一页面</button>

	</div>
</template>

<script>
    import HelloWorld from "../components/HelloWorld"

    export default {
        name: 'Home',
        components: {
            HelloWorld
        },
        methods: {
            handleClick() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>

</style>
