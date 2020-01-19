<template>
	<div id="app">
		<div class="nav">
			<router-link :to="{name:'home'}">Home</router-link>
			|
			<router-link :to="{name:'about'}">About</router-link>
		</div>

		<router-view></router-view>
		<router-view name="email"></router-view>
		<router-view name="tel"></router-view>


		<img alt="Vue logo" src="assets/img/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        }
    }
</script>

<style xml:lang="less">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}


	#nav {
		padding: 30px;
	}

	a {
		font-weight: bold;
		color: #2c3e50;
	}

	/*&.router-link-exact-active {*/
	/*	color: #42b983;*/
	/*}*/

</style>
