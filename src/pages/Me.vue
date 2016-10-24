<style scoped lang="stylus">
.top
	.title
		padding-top 40px
		padding-bottom 20px
		line-height 50px
		height 50px
		span
			font-size 24px
			font-weight 700
			color #333
.applys
	overflow hidden
	.list
		float left
		padding-bottom 20px
		&:nth-of-type(2n)
			margin-left 20px
		.apply-right
			float right
			width 200px
			height @width
			position relative
			.tit
				font-size 24px
				color #333
				font-weight 400
				position absolute
				top 24px
				left 20px
			.box
				position absolute
				left 100px
				display inline-block
				width 98px
				height 28px
				line-height @height
				text-align center
				border 1px solid #797979
				color #fff
				font-size 13px
				&.me
					top 74px
					background-color #515151
				&.now
					top 114px
					background-color #797979
			.like
				position absolute
				top 102px
				left 18px
				p
					line-height 24px
					font-size 13px
					color #333
.bottom
	margin-top 20px
	height 86px
	position relative
	.txt
		font-size 14px
		line-height 35px
		position absolute
		right 426px
	.all
		position absolute
		right 10px
		.box
			margin-left 20px
			position relative
			float left
			span
				position absolute
				font-size 14px
				left 12px
				top 8px
			&.big
				span
					left 16px
			&.m
				span
					left 12px
				
</style>
<template>
	<div class="me">
		<div class="top w1200 weiwo">
			<div class="title">
				<span>为我代言！</span>
			</div>
		</div>
		<div class="applys w1200">
			<ul>
				<li class="list" v-for="item of applys">
					<a href=""><img :src="item.src"></a>
					<div class="apply-right">
						<span class="tit">QueenJewlery</span>
						<div class="box me">我要代言</div>
						<div class="box now">立即购买</div>
						<div class="like">
							<img src="../image/home/zan.png">
							<p>9999人喜欢</p>
							<p>10000人已经购买</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="applys w1200">
			<ul>
				<li class="list" v-for="item of applys">
					<a href=""><img :src="item.src"></a>
					<div class="apply-right">
						<span class="tit">QueenJewlery</span>
						<div class="box me">我要代言</div>
						<div class="box now">立即购买</div>
						<div class="like">
							<img src="../image/home/zan.png">
							<p>9999人喜欢</p>
							<p>10000人已经购买</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="applys w1200">
			<ul>
				<li class="list" v-for="item of applys">
					<a href=""><img :src="item.src"></a>
					<div class="apply-right">
						<span class="tit">QueenJewlery</span>
						<div class="box me">我要代言</div>
						<div class="box now">立即购买</div>
						<div class="like">
							<img src="../image/home/zan.png">
							<p>9999人喜欢</p>
							<p>10000人已经购买</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="bottom w1200">
			<span class="txt">99条记录  1/9页</span>
			<div class="all">
				<div class="box">
					<img src="../image/me/u190.png">
					<span>1</span>
				</div>
				<div class="box">
					<img src="../image/me/u182.png">
					<span>2</span>
				</div>
				<div class="box">
					<img src="../image/me/u182.png">
					<span>3</span>
				</div>
				<div class="box">
					<img src="../image/me/u182.png">
					<span>4</span>
				</div>
				<div class="box">
					<img src="../image/me/u182.png">
					<span>5</span>
				</div>
				<div class="box big">
					<img src="../image/me/u180.png">
					<span>下一页▶</span>
				</div>
				<div class="box m">
					<img src="../image/me/u178.png">
					<span>尾页</span>
				</div>
			</div>
			
		</div>
	</div>

</template>
<script>
	export default {
		data(){
			return {
				applys : [
					{
						href : "/",
						src : require("../image/home/5sOW5mHk-0.jpg")
					},
					{
						href : "/",
						src : require("../image/home/5sOW5mHk-1.jpg")
					},
					{
						href : "/",
						src : require("../image/home/5sOW5mHk-2.jpg")
					},
					{
						href : "/",
						src : require("../image/home/5sOW5mHk-3.jpg")
					}
				]
			}
		}
	}
</script>