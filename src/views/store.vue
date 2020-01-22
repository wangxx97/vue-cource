<template>
	<div>
		<a-input @input="handleInput"/>
		<!--		<a-input v-model="inputValue"/>-->
		<!--		<a-input :value="inputValue" @input="handleInput"/>-->
		<!--		<p>{{ inputValue }}</p>-->
		<a-show :content="inputValue"/>
		<p>appName:{{appName}}</p>
		<p>userName:{{userName}}</p>
	</div>
</template>

<script>
    // import AInput from "_c/AInput.vue"
    import AInput from "../components/AInput"
    import AShow from "../components/AShow"

    export default {
        name: "store",
        data() {
            return {
                inputValue: ''
            }
        },
        // 注册组件
        components: {
            AInput,
            AShow
        },
        // 计算属性
        computed: {
            appName() {
                return this.$store.state.appName
            },
            userName () {
                return this.$store.state.user.userName
            }
        },
        methods: {
            handleInput(val) {
                this.inputValue = val
            }
        }
    }
</script>

<style scoped>

</style>