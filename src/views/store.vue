<template>
	<div>
		<a-input @input="handleInput"/>
		<!--		<a-input v-model="inputValue"/>-->
		<!--		<a-input :value="inputValue" @input="handleInput"/>-->
		<p>{{ inputValue }}->lastLetter is{{inputValueLastLetter}}</p>
		<!--		<a-show :content="inputValue"/>-->
		<p>appName:{{appName}}, appNameWithVersion : {{ appNameWithVersion }} </p>
		<p>userName:{{userName}},firstLetter is : {{firstLetter}}</p>

	</div>
</template>

<script>
    // import AInput from "_c/AInput.vue"
    import AInput from "../components/AInput"
    import AShow from "../components/AShow"
    // import {mapState} from 'vuex'
    import {mapState, mapGetters} from 'vuex'
    //mapMutations, mapActions
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
                userName: state => state.user.userName
                // userName: state => state.user.userName,
                // appVersion: state => state.appVersion,
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
            handleInput(val) {
                this.inputValue = val
            }
        }
    }
</script>

<style scoped>

</style>