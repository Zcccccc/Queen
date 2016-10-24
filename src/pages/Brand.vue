<style scoped lang="stylus">
	.top
		position relative
		min-width 1200px
		height 350px
		img
			width 100%
			height 100%
		.tit
			z-index 1
			position absolute
			left 248px
			top 118px
			p
				font-size 36px
				font-weight 700
				color #fff
				line-height 48px
	.left
		float left
		.box
			position relative
			width 220px
			height 330px
			background-color #5e5e5e
			margin-top 20px
			&:nth-of-type(1)
				margin-top 50px
			&:nth-of-type(10)
				margin-bottom 54px
			span
				position absolute
				&:nth-of-type(1)
					font-size 48px
					font-weight 700
					color #fff
					top 104px
					left 40px
				&:nth-of-type(2)
					font-size 24px
					font-weight 700
					color #d7d7d7
					top 180px
					left 60px
	.right
		float right
		.box
			position relative
			width 940px
			height 330px
			margin-top 20px
			&:nth-of-type(1)
				margin-top 50px
			&:nth-of-type(10)
				margin-bottom 54px
			.more
				position relative
				height 38px
				width 100%
				text-align center
				img
					position absolute
					&:nth-of-type(1)
						right 24px
					&:nth-of-type(2)
						right 0
				span
					color #fff
					font-size 13px
					font-weight 400
					position absolute
					&:nth-of-type(1)
						bottom 20px
						right 36px
					&:nth-of-type(2)
						bottom 20px
						right 4px
			.line
				position absolute
				top 38px
				z-index 1
			ul
				margin-left -20px
				.brands
					margin-left 20px
					position relative
					width 220px
					height 290px
					float left
					.img
						position absolute
						width 200px
						height @width
						top 10px
						left @top
					span
						position absolute
						&:nth-of-type(1)
							left 10px
							bottom 54px
						&:nth-of-type(2)
							color #868686
							left 76px
							bottom 20px
						&:nth-of-type(3)
							left 126px
							bottom 20px
							color #868686
						&:nth-of-type(4)
							bottom 20px
							left 176px
							color #868686
					.icon
						position absolute
						bottom 20px
						&:nth-of-type(2)
							left 56px
						&:nth-of-type(3)
							left 106px
						&:nth-of-type(4)
							left 156px
</style>
<template>
	<div class="brand">
		<div class="top">
			<img src="../image/brand/banner2.jpg">
			<span class="tit">
				<p>我是女王，我做主！</p>
				<p>我的品牌我代言！</p>
			</span>
		</div>
		<div class="main w1200">
			<div class="left">
				<ul>
					<li class="box" v-for="item of arrData">
						<span>LOGO</span>
						<span>女王珠宝</span>
					</li>
				</ul>
			</div>
			<div class="right">
				<ul>
					<li class="box" v-for="item of arrData">
						<div class="more">
							<img src="../image/brand/u45.png">
							<img src="../image/brand/u47.png">
							<span>了解更多</span>
							<span>>></span>
						</div>
						<img src="../image/brand/u44_line.png" class="line">
						<ul>
							<li v-for="item of item.arrimg" class="brands">
								<img src="../image/brand/u12.png" class="kuan">
								<a href=""><img :src="item.src" class="img"></a>
								<span>QueenJewelry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥99</span>
								<span>999</span>
								<span>99</span>
								<span>99</span>
								<img src="../image/home/m-heart.png" class="icon">
								<img src="../image/home/good.png" class="icon">
								<img src="../image/home/talk.png" class="icon">
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrData : [
					{
						arrimg : [
							{
								href : "/",
								src : require("../image/brand/product_u22.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u24.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u30.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u38.jpg")
							}
						]
					},
					{
						arrimg : [
							{
								href : "/",
								src : require("../image/brand/product_u22.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u24.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u30.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u38.jpg")
							}
						]
					},
					{
						arrimg : [
							{
								href : "/",
								src : require("../image/brand/product_u22.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u24.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u30.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u38.jpg")
							}
						]
					},
					{
						arrimg : [
							{
								href : "/",
								src : require("../image/brand/product_u22.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u24.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u30.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u38.jpg")
							}
						]
					},
					{
						arrimg : [
							{
								href : "/",
								src : require("../image/brand/product_u22.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u24.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u30.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u38.jpg")
							}
						]
					},
					{
						arrimg : [
							{
								href : "/",
								src : require("../image/brand/product_u22.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u24.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u30.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u38.jpg")
							}
						]
					},
					{
						arrimg : [
							{
								href : "/",
								src : require("../image/brand/product_u22.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u24.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u30.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u38.jpg")
							}
						]
					},
					{
						arrimg : [
							{
								href : "/",
								src : require("../image/brand/product_u22.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u24.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u30.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u38.jpg")
							}
						]
					},
					{
						arrimg : [
							{
								href : "/",
								src : require("../image/brand/product_u22.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u24.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u30.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u38.jpg")
							}
						]
					},
					{
						arrimg : [
							{
								href : "/",
								src : require("../image/brand/product_u22.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u24.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u30.jpg")
							},
							{
								href : "/",
								src : require("../image/brand/product_u38.jpg")
							}
						]
					}
				]
			}
		}
	};
</script>