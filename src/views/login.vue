<template>
	<div class="login">
		<input v-model="userName"/> <br>
		<input type="password" v-model="password"/><br>
		<button @click="handleSubmit">登 录</button>
	</div>
</template>
<script>
    import {mapActions} from 'vuex'

    export default {
        name: 'login_page',
        data() {
            return {
                userName: '',
                password: ''
            }
        },
        methods: {
            ...mapActions([
                'login'
            ]),
            handleSubmit() {
                this.login({
                    userName: this.userName,
                    password: this.password
                }).then(() => {
                    console.log('success!!')
                    this.$router.push({
                        name: 'home'
                    })
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style lang="less">
	body {
		background-color: #e8fcff;
		margin: 0 auto;
		padding: 0 auto;
	}

	.login {
		background-color: #d9f7ff;

		width: 400px;
		height: 300px;
		border: 1px solid gainsboro;
		padding: 0 auto;
		margin: 20px auto 0;
	}

	input {
		/*border: 1px solid;*/
		width: 330px;
		height: 40px;
		margin: 30px 10px 10px 9%;
		font-size: 20px;
		color:grey;
		/*border-bottom: 3px;*/
		border-top: none;
		border-left: none;
		box-shadow: #42b983;
		background-color: gainsboro;
		padding-left: 20px;
	}

	button {
		width: 330px;
		height: 40px;
		margin: 30px 10px 10px 9%;
		font-size: 15px;
		/*border-top: none;*/
		/*border-left: none;*/
		border: none;
	}
</style>