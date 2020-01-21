<template>
	<div class="email">
		<!--		email: 192390475@qq.com-->
		<button @click="handleClick">按我</button>
	</div>
</template>

<script>
    // import Bus from "../bus"

    export default {
        methods: {
            handleClick() {
                this.$bus.$emit('on-click', 'hello_wxx')
            }
        },
        //生命周期钩子
        // mounted() {
        //  //   console.log(this.$bus)
            // this.$on('on-click', mes => {
            //     console.log(mes)
            // })
        // }
    }
</script>

<style scoped>
	.email {
		border: 1px solid green;
	}
</style>