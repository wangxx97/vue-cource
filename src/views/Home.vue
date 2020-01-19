<template>
	<div class="home">
		<b>{{ food }}</b>
		<button @click="handleClick('back')">返回上一页面</button>
		<button @click="handleClick('push')">跳转到parent</button>
		<button @click="handleClick('replace')">替换到parent</button>
	</div>
</template>

<script>
    import HelloWorld from "../components/HelloWorld"

    export default {
        name: 'Home',
        components: {
            HelloWorld
        },
        props: {
            food: {
                type: String,
                default: 'apple'
            }
        },
        beforeRouteEnter(to, from, next) {
						next()
        },
        methods: {
            handleClick(type) {
                if (type === 'back') this.$router.back()
                // else if (type === 'push')this.$router.push('/parent')
                else if (type === 'push') {
                    this.$router.push({
                        name: 'argu',
                        params: {
                            name: 'lison'
                        }
                        // query:{
                        //     name:'lison'
                        // }
                    })
                } else if (type === 'replace') {
                    this.$router.replace({
                        name: 'parent'
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
