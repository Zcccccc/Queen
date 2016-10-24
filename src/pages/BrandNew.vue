<style scoped lang="stylus">
.brandNew
	position relative
	overflow hidden
	margin-top 30px
	padding-bottom 36px
	.btn
		z-index 1
		position absolute
		top 0
		left 0
		width 100px
		height 30px
		line-height 30px
		text-align center
		color #fff
		font-size 13px
		background-color #797979
	.left
		.list
			position relative
			width 880px
			height 250px
			box-shadow 2px 2px 1px 1px #ddd
			margin-bottom 20px
			.left-right
				position absolute
				top 0
				right 0
				float right
				width 280px
				height 250px
				.logo
					position absolute
					top 40px
					right 110px
					font-size 48px
					font-weight 700
					white-space nowrap
				p
					font-size 16px
					font-weight 400
					position absolute
					top 102px
					right 80px
				.line
					position absolute
					top 118px
					right 40px
				.brand
					position absolute
					right 0
					top 156px
					span
						position absolute
						left 89px
						top 10px
						font-size 18px
						font-weight 400
						color #fff
				.time
					position absolute
					top 212px
					right 32px
					font-size 14px
					font-weight 400
	.right
		position absolute
		right 0
		top 0
		float right
		width 280px
		.right-top
			img
				position absolute
				top 0
				&:nth-of-type(1)
					z-index 1
				&:nth-of-type(3)
					z-index 1
					left 16px
					top 154px
				&:nth-of-type(4)
					top 290px
			span
				z-index 1
				font-weight 400
				position absolute
				left 16px
				&:nth-of-type(1)
					font-size 14px
					top 16px
				&:nth-of-type(2)
					font-size 18px
					top 70px
				&:nth-of-type(3)
					font-size 14px
					line-height 20px
					top 88px
				&:nth-of-type(4)
					font-size 18px
					top 180px
				&:nth-of-type(5)
					font-size 14px
					line-height 20px
					top 198px
				&:nth-of-type(6)
					font-size 14px
					top 310px
		ul
			position absolute
			top 360px
			.box
				width 280px
				height 470px
				float left
				position relative
				a
					img
						width 280px
						height @width
				span
					width 270px
					font-weight 400
					position absolute
					&:nth-of-type(1)
						font-weight 700
						font-family Arial
						top 16px
						left 20px
						font-size 24px
						color #333
					&:nth-of-type(2)
						top 290px
						font-size 14px
						line-height 18px
						cursor pointer
					&:nth-of-type(3)
						top 340px
						font-size 16px
						font-weight 700
					&:nth-of-type(4)
						top 340px
						font-size 16px
						color #868686
						left 140px
					&:nth-of-type(5)
						top 340px
						font-size 16px
						color #868686
						left 195px
					&:nth-of-type(6)
						top 340px
						font-size 16px
						color #868686
						left 240px
				.icon
					position absolute
					top 340px
					&:nth-of-type(1)
						left 120px
					&:nth-of-type(2)
						left 175px
					&:nth-of-type(3)
						left 220px
				.btn
					width 260px
					height 40px
					color #fff
					line-height 40px
					text-align center
					background-color #868686
					font-size 13px
					position absolute
					top 370px
					left 10px
				.img
					position absolute
					left 6px
					top 440px
</style>
<template>
	<div class="brandNew w1200">
		<div class="btn">
			今日首发
		</div>
		<div class="left w1200">
			<ul>
				<li v-for="item of imgs" class="list">
					<div class="box">
						<a href=""><img :src="item.src"></a>
					</div>
					<div class="left-right">
						<span class="logo">logo</span>
						<p>Queen Jewlery 新宠</p>
						<div class="line">
							<img src="../image/brandNew/line.png">
						</div>
						<div class="brand">
							<img src="../image/brandNew/u12.png">
							<span>我要代言</span>
						</div>
						<span class="time">距首发结束：12天12时12分12秒</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="right">
			<div class="right-top">
				<span>女王宣言</span>
				<span>我是女王我做主！</span>
				<span>我是女王我做主，我是女王我做主，我是女王我做主，我是女王我做主</span>
				<span>我的品牌我代言！</span>
				<span>我是女王我做主，我是女王我做主，我是女王我做主，我是女王我做主</span>
				<span>爆款推荐</span>
				<img src="../image/brandNew/u24_line.png">
				<img src="../image/brandNew/u20.png">
				<img src="../image/brandNew/u29_line.png">
				<img src="../image/brandNew/u24_line.png">
			</div>
			<ul>
				<li v-for="item of lists" class="box">
					<span>Logo</span>
					<a href=""><img :src="item.src"></a>
					<span>某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚
					</span>
					<span>￥999.00</span>
					<img src="../image/home/m-heart.png" class="icon">
					<img src="../image/home/good.png" class="icon">
					<img src="../image/home/talk.png" class="icon">
					<span>999</span>
					<span>99</span>
					<span>99</span>
					<a href="" class="btn">马上购买</a>
					<img src="../image/brandNew/u45_line.png" class="img">
				</li>
			</ul>
		</div>
	</div>
	
</template>
<script>
	export default {
		data(){
			return {
				imgs : [
					{
						href : "/",
						src : require("../image/brandNew/5lpk6BEG-0.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/5lpk6BEG-1.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/5lpk6BEG-5.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/5lpk6BEG-3.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/5lpk6BEG-4.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/5lpk6BEG-5.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/5lpk6BEG-0.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/5lpk6BEG-1.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/5lpk6BEG-5.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/5lpk6BEG-3.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/5lpk6BEG-4.jpg")
					}
				],
				lists : [
					{
						href : "/",
						src : require("../image/brandNew/6TKm6BEG-0.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/6TKm6BEG-1.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/6TKm6BEG-2.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/6TKm6BEG-3.jpg")
					},
					{
						href : "/",
						src : require("../image/brandNew/6TKm6BEG-4.jpg")
					},
				]
			}
		}
	}
</script>