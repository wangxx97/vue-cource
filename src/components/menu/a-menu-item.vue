<template>
	<li class="a-menu-item">
		<slot></slot>
	</li>
</template>

<script>
    export default {
        nmae: 'AMenuItem'
    }
</script>

<style lang="less">
	.a-menu-item {
		background: rgb(97, 96, 104);
		color: #fff;
	}
</style>
