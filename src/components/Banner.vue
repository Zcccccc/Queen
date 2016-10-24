<style scoped lang="stylus">
	.banner
		position relative
		height 350px
		text-align center
		a
			position absolute
			top 0
			left 0
			width 100%
			height 350px
			&.current
				z-index 1
		em
			position relative
			top 330px
			font-size 0
			padding 2.5px 30px
			background-color rgb(188,188,188)
			margin 0 10px
			vertical-align top
			z-index 2
			&.current
				background-color white
</style>
<template>
	<div class="banner">
		<a v-for="(item, index) of data" :title="item.name" :style="{'background-image':'url(' + item.src + ')'}" :class="{current:index === currentIndex}"></a>
		<em v-for="index of len" @click="handleClick(index - 1)" :class="{current:index - 1 === currentIndex}"></em>
	</div>
</template>
<script>
	let t;
	const timer = callback => {
		t = setInterval(() => {
			callback();
		}, 2000);
	};
	export default {
		props : ["data"],
		data(){
			return {
				currentIndex : 0
			};
		},
		methods : {
			handleClick(index){
				this.currentIndex = index;
			}
		},
		computed : {
			len(){
				return this.data.length;
			}
		},
		mounted(){
			timer(() => {
				let currentIndex = this.currentIndex;
				this.currentIndex = currentIndex > this.len - 2 ? 0 : currentIndex + 1;
			});
		}
	};
</script>