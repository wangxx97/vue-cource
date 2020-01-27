<!-- localhost:8080/#/store页面-->
<!--@click 绑定点击事件-->
<template>
	<div>
		<a-input @input="handleInput"/>
		<!--		<a-input v-model="inputValue"/>-->
		<!--		<a-input :value="inputValue" @input="handleInput"/>-->
		<p>{{ inputValue }}->lastLetter is{{inputValueLastLetter}}</p>
		<!--		<a-show :content="inputValue"/>-->
		<p>appName:{{appName}}, appNameWithVersion : {{ appNameWithVersion }} </p>
		<p>userName:{{userName}},firstLetter is : {{firstLetter}}</p>
		<button @click="handleChangAppName">修改appName</button>
		<p>{{ appVersion }}</p>
		<button @click="changeUserName">修改用户名</button>

	</div>
</template>

<script>
    // import AInput from "_c/AInput.vue"
    import AInput from "../components/AInput"
    import AShow from "../components/AShow"
    // import {mapState} from 'vuex'
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    // import {createNamespacedHelpers} from 'vuex'
    // const {mapState} = createNamespacedHelpers('user')
    // const {mapGetters} = createNamespacedHelpers('user')
    // import vuex from 'vuex'
    // const mapState = vuex.mapState

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
            ...mapState({
                userName: state => state.user.userName,
                // userName: state => state.user.userName,
                appVersion: state => state.appVersion,
                // todoList: state => state.user.todo ? state.user.todo.todoList : []
            }),
            ...mapGetters([
                'appNameWithVersion',
                'firstLetter'
            ]),
            // firstLetter(){
            //   return this.userName.substr(0, 1)
            // },
            appName() {
                return this.$store.state.appName
                // set: function (newValue) {
                //     this.inputValue = newValue + 'sd'
                // },
                // get: function () {
                // 		return this.inputValue + 'sdasfs'
                // }
            },
            inputValueLastLetter() {
                return this.inputValue.substr(-1, 1)
            },
            // ...mapState({
            //   appName: state => state.appName,
            //   userName: state => state.user.userName
            // })
            // appNameWithVersion () {
            //     return this.$store.getters.appNameWithVersion
            // },
            // userName () {
            //     return this.$store.state.user.userName
            // }
        },
        methods: {
            ...mapMutations([
                'SET_USER_NAME',
                'SET_APP_NAME',
                // 'SET_STATE_VALUE'
            ]),
            ...mapActions([
                'updateAppName'
            ]),
            handleInput(val) {
                this.inputValue = val
            },
            handleChangAppName() {
                // this.$store.commit({
                //     type: 'SET_APP_NAME',
                //     appName: 'newAppNameWXX'
                // })
                // this.SET_APP_NAME({
                //     appName:  'newAppNameWxx'
                // })
                this.updateAppName()
                // this.$store.commit('SET_APP_VERSION')
            },
            changeUserName() {
                // this.$store.state.user.userName = 'haha' 错误的方法
                this.SET_USER_NAME('www-ggg')
                // this.$store.dispatch('updateAppName', '123')
            },
        }
    }
</script>

<style scoped>

</style>