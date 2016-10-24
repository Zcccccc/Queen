<style scoped lang="stylus">
.pop
	.title
		padding-top 40px
		padding-bottom 20px
		line-height 50px
		height 50px
		span
			font-size 24px
			font-weight 700
			color #333
		.img
			float right
			.quan
				width 50px
				height 50px
				border-radius 50%
				background-color rgb(242 242 242)
				text-align center
				span
					color #bcbcbc
					font-size 28px
					line-height @height
.list
	ul
		overflow hidden
		margin-left -20px
		.item
			height 255px
			float left
			margin-left 20px
			img
				width @width
				height @width
			.tit
				margin-left 30px
				width @width
				height 35px
				line-height @height
				img
					margin-left 20px
					margin-bottom -4px
					width 18px
					height @width
				.small
					font-size 13px
.brand_list
	.item
		position relative
		overflow hidden
		padding-bottom 30px
		.logo
			position absolute
			top 38px
			left 36px
			font-family Arial
			font-weight 700
			font-size 24px
			color #fff
			text-align center
		.rep
			z-index 1
			width 400px
			height 300px
			position absolute
			top 22px
			right 22px
			background-color #fff
			.top
				width 100%
				height 30px
				background-color rgb(107 107 107)
				text-align center
				span
					line-height @height
					color #fff
					font-size 13px
					font-weight 400
					font-style normal
					font-family "Arial Normal" "Arial"
			a
				position absolute
				top 72px
				left 26px
				img
					width 180px
					height @width
			.left-top
				position absolute
				right 32px
				top 76px
				span
					font-family "Arial Normal"
					color #333
					font-weight 700
					text-align left
					&.txt1
						font-size 14px
						
					&.txt2
						font-size 24px
						font-family Arial
			.left-mid
				position absolute
				right 32px
				top 126px
				span
					display block
					font-weight 400
					font-size 14px
					line-height 1.2
			.left-bottom
				position absolute
				right 0px
				top 186px
				img
					position absolute
					top 0px
					left -62px
				.buy
					font-size 13px
					display inline-block
					width 98px
					height 28px
					line-height @height
					text-align center
					border 1px solid #797979
					background-color #515151
					color #fff
			.bottom-txt1
				position absolute
				right 100px
				top 240px
				font-size 13px
				color #333
			.bottom-txt2
				position absolute
				right 68px
				top 263px
				font-size 13px
				color #333
.weiwo
	.title
		padding-top 10px
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
.fashion
	.title
		padding-top 20px
.fas
	overflow hidden
	ul
		margin-left -20px
		.list
			margin-left 20px		
			float left
			width 380px
			height 280px
			position relative
			a
				img
					width 180px
					height 162px
			.tit
				font-size 20px
				font-weight 400
				padding-bottom 24px
			span
				position absolute
				font-size 14px
				&.txt
					width 172px
					right 10px
					line-height 24px
					font-weight 400
					word-wrap break-word
				&.bottom	
					left 0
					bottom 30px
				&.date
					left 50px
					bottom 30px
				&.xin
					color #868686
					font-size 16px
					bottom 30px
					left 160px
				&.zan
					color #868686
					font-size 16px
					bottom 30px
					left 220px
				&.liuyan
					color #868686
					font-size 16px
					bottom 30px
					left 270px
			.icon
				position absolute
				bottom 30px
				&:nth-of-type(1)
					left 140px
				&:nth-of-type(2)
					left 200px
				&:nth-of-type(3)
					left 250px
</style>
<template>
	<div class="all">
		<banner :data="arrBanner"></banner>
		<div class="pop w1180">
			<div class="title">
				<span>女王人气Top10</span>
				<div class="img">
					<a href=""><div class="quan"><span>＋</span></div></a>
				</div>
			</div>
		</div>
		<div class="list w1180">
			<ul>
				<li v-for="item of imgs" class="item">
					<a href=""><img :src="item.src">
						<div class="tit">
							<span>QueenJewelry</span>
							<img src="../image/home/xin.png">
							<span class="small">999</span>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<div class="pop w1180">
			<div class="title">
				<span>首发品牌</span>
				<div class="img">
					<a href=""><div class="quan"><span>＋</span></div></a>
				</div>
			</div>
		</div>
		<div class="brand_list w1180">
			<ul>
				<li v-for="item of logos" class="item">
					<a  href=""><img :src="item.src"></a>
					<span class="logo">LOGO</span>
					<div class="rep">
						<div class="top">
							<span>距首发结束:20天18时18分18秒</span>
						</div>
						<a><img :src="item.rep"></a>
						<div class="left-top">
							<span class="txt1">代言人:</span>
							<span class="txt2">Queen</span>
						</div>
						<div class="left-mid">
							<span>拒绝平庸，追求卓越</span>
							<span>凸显个性，绝不将就</span>
						</div>
						<div class="left-bottom">
							<img src="../image/home/zan.png">
							<div class="buy">立即购买</div>
						</div>
						<div class="bottom-txt1">999人喜欢</div>
						<div class="bottom-txt2">1000人已经购买</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="pop w1180 weiwo">
			<div class="title">
				<span>为我代言</span>
				<div class="img">
					<a href=""><div class="quan"><span>＋</span></div></a>
				</div>
			</div>
		</div>
		<div class="applys w1180">
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
		<div class="pop w1180 fashion">
			<div class="title">
				<span>我的时尚</span>
				<div class="img">
					<a href=""><div class="quan"><span>＋</span></div></a>
				</div>
			</div>
		</div>
		<div class="fas w1180">
			<ul>
				<li v-for="item of fashions" class="list">
					<p class="tit">2015春夏流行色：魅惑黑色</p>
					<a href=""><img :src="item.src"></a>
					<span class="txt">黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。</span>
					<span class="bottom">Queen</span>
					<span class="date">2016-06-16</span>
					<img src="../image/home/m-heart.png" class="icon">
					<img src="../image/home/good.png" class="icon">
					<img src="../image/home/talk.png" class="icon">
					<span class="xin">999</span>
					<span class="zan">99</span>
					<span class="liuyan">99</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import Banner from "../components/Banner";
	export default {
		data(){
			return {
				imgs : [
					{
						href : "/",
						src : require("../image/home/pop0.png")
					},
					{
						href : "/",
						src : require("../image/home/pop1.png")
					},
					{
						href : "/",
						src : require("../image/home/pop2.png")
					},
					{
						href : "/",
						src : require("../image/home/pop3.png")
					},
					{
						href : "/",
						src : require("../image/home/pop4.png")
					},
					{
						href : "/",
						src : require("../image/home/pop5.png")
					},
					{
						href : "/",
						src : require("../image/home/pop6.png")
					},
					{
						href : "/",
						src : require("../image/home/pop7.png")
					},
					{
						href : "/",
						src : require("../image/home/pop8.png")
					},
					{
						href : "/",
						src : require("../image/home/pop9.png")
					}
				],
				logos : [
					{
						href : "/",
						src : require("../image/home/5zcX5mHk-0.jpg"),
						rep : require("../image/home/5zcX5mHk-1.png")
					},
					{
						href : "/",
						src : require("../image/home/5zcX5mHk-2.jpg"),
						rep : require("../image/home/5zcX5mHk-3.png")
					},
					{
						href : "/",
						src : require("../image/home/5zcX5mHk-4.jpg"),
						rep : require("../image/home/5zcX5mHk-5.png")
					}
				],
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
				],
				fashions : [
					{
						href : "/",
						src : require("../image/home/6Ezw5mHk-0.jpg")
					},
					{
						href : "/",
						src : require("../image/home/6Ezw5mHk-1.jpg")
					},
					{
						href : "/",
						src : require("../image/home/6Ezw5mHk-2.jpg")
					}
				],
				arrBanner : [
					{
						name : "图片1",
						src : require("../image/home/banner1.jpg")
					},
					{
						name : "图片2",
						src : require("../image/home/banner2.jpg")
					},
					{
						name : "图片3",
						src : require("../image/home/banner3.jpg")
					},
					{
						name : "图片4",
						src : require("../image/home/banner4.jpg")
					}
				]
			}
		},
		components : {
			Banner
		}
	};
</script>