<template>
	<div class="home">
		<b>{{ food }}</b>
		<button @click="handleClick('back')">返回上一页面</button>
		<button @click="handleClick('push')">跳转到parent</button>
		<button @click="handleClick('replace')">替换到parent</button>
		<button @click="getInfo">请求数据</button>  <!--// :style="{ background: bgColor }"-->

	</div>
</template>

<script>
    import HelloWorld from "../components/HelloWorld"
    // import axios from 'axios'
    import {getUserInfo} from '@/api/user'
    // import {mapState, mapActions} from 'vuex'

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
            //this
            next(vm => {
                console.log(vm)
            })
        },
        beforeRouteLeave(to, from, next) {
            const leave = confirm('您确定要离开吗？')
            if (leave) next()
            else next(false)
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
            },
            getInfo() {
                // axios.post('/getUserInfo', {userId: 21}).then(res => {
                //     console.log(res)

                    getUserInfo({ userId: 21 }).then(res => {
                        console.log('res: ', res)
                    //     this.url = res.img
                    //     this.bgColor = res.color
                })
            },
        }
    }
</script>

<style scoped>

</style>
