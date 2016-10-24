<style scoped lang="stylus">
.header
	white-space nowrap
	font-size 14px
	font-weight 400
	color #333
.top
	width 100%
	height 30px
	background-color rgb(242,242,242)
	.w1200
		height 30px
		line-height @height
		ul
			float right
			li
				float left
				padding 0 10px
				text-align center
				border-left 1px solid
				margin 8px 0
				&:first-child
					border-left none
.searchBox
	height 110px
	position relative
	>span
		float left
		margin-top 38px
	.logo
		font-size 32px
		font-weight 700
		margin-top 37px
		margin-right 12px
	.city
		margin-top 47px
		margin-right 5px
	.jiantou
		margin-right 185px
		margin-top 47px
		cursor pointer
.search
	float left
	margin-top 38px
	width 506px
	height 38px
	border 1px solid rgb(231,229,226)
	line-height @height
	input
		border none
		width 250px
		height 34px
		margin-left 16px
		margin-top 2px
		outline none
	a
		padding 1px
		margin 0 5px
		color #666
		background-color rgb(244,243,242)
.searchImg
	float left
	margin-top 38px
	width 38px
	height @width
	border 1px solid rgb(231,229,226)
	border-left none
	background url(../assets/start/u172.png)
	cursor pointer
.box
	margin-left 20px
	float left
	margin-top 38px
	position relative
	span
		position absolute
		left 20px
		top 12px
	.jiantou
		width 12px
		height @width
		position absolute
		left 94px
		top -34px
.guanzhu
	width 70px
	height 90px
	position absolute
	top 12px
	right 12px
	img
		float left
		width 70px
		height 70px
	span
		float left
		margin-left 6px
		line-height 24px
.nav
	height 40px
	background-color rgb(188,188,188)
	.all
		position relative
		z-index 100
		float left
		width 180px
		height @height
		overflow hidden
		color black
		line-height @height
		text-align center
		background-color rgb(177,173,167)
		&:before
			content "〓"
			position absolute
			left 17px
		&:after
			content "∨"
			position absolute
			top 0
			right 23px
		&:hover
			overflow visible
		.allnav
			width 178px
			height 419px
			border 1px solid rgb(177,173,167)
			border-top none
			background-color white
			padding-top 17px
			.con
				width 150px
				height 44px
				margin-left 19px
				margin-top 27px
				text-align left
				&:first-child
					margin-top 0
				h1
					font-size 15px
					font-weight 700
					margin-bottom 16px
				a
					font-size 13px
					font-weight 400
					margin-right 15px
					&:hover
						color #ff4a00
				.import
					font-weight 700
					color #ff4a00
	ul
		display inline-block
		li
			float left
			padding 13px 30px
			&:first-child
				margin-left 20px
</style>
<template>
	<div class="header">
		<div class="top">
			<div class="w1200">
				<span class="tel">{{tel}}</span>
				<ul>
					<li v-for="anchor of topnav"><a :href="anchor.href">{{anchor.name}}</a></li>
				</ul>
			</div>
		</div>
		<div class="searchBox w1200">
			<span class="logo">LOGO</span>
			<span class="city">广东</span>
			<span class="jiantou">▼</span>
			<div class="search">
				<input placeholder="搜索您需要的关键字"/>
				<a v-for="anchor of search" :href="anchor.href">{{anchor.name}}</a>
			</div>
			<div class="searchImg"></div>
			<div class="box">
				<img src="../image/home/u176.png">
				<span>我的首饰盒</span><img src="../image/home/jiantou.png" class="jiantou">
			</div>
			<div class="guanzhu"><img src="../assets/start/u15.jpg"><span>关注微信</span></div>
		</div>
		<div class="nav">
			<div class="w1200">
				<div class="all"><a href="">全部商品</a>
					<div class="allnav">
						<div v-for="con of cons" class="con">
							<h1>{{con.h1}}</h1>
							<a v-for="anchor of con.content" :href="anchor.href">{{anchor.name}}</a>
						</div>
					</div>
				</div>
				<ul>
					<li v-for="anchor of nav"><router-link :to="anchor.href">{{anchor.name}}</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				tel : "热线电话：12345678912",
				topnav : [
				{
					name : "登录",
					href : "/login"
				},
				{
					name : "注册",
					href : "/register"
				},
				{
					name : "品牌商",
					href : "/brands"
				},
				{
					name : "女王帮助",
					href : "/queenHelp"
				}],
				search : [
				{
					name : "QueenJewelry",
					href : "/QueenJewelry"
				},
				{
					name : "钻戒",
					href : "/zuanjie"
				},
				{
					name : "铂金对戒",
					href : "/duijie"
				}],
				nav : [
				{
					name : "首页",
					href : "/"
				},
				{
					name : "品牌首发",
					href : "/brandNew"
				},
				{
					name : "品牌街",
					href : "/brand"
				},
				{
					name : "为我代言",
					href : "/me"
				},
				{
					name : "创意申请",
					href : "/apply"
				},
				{
					name : "活动",
					href : "/activity"
				}],
				cons : [
				{
					h1 : "钻石",
					content : [
					{
						name : "30分",
						href : "/",
						imp : 0
					},
					{
						name : "50分",
						href : "/",
						imp : 0
					},
					{
						name : "克拉钻",
						href : "/",
						imp : 1
					}]
				},
				{
					h1 : "钻戒",
					content : [
					{
						name : "30分",
						href : "/",
						imp : 0
					},
					{
						name : "50分",
						href : "/",
						imp : 0
					},
					{
						name : "铂金",
						href : "/",
						imp : 1
					}]
				},
				{
					h1 : "对戒",
					content : [
					{
						name : "铂金对戒",
						href : "/",
						imp : 0
					},
					{
						name : "k金对戒",
						href : "/",
						imp : 0
					}]
				},
				{
					h1 : "配饰",
					content : [
					{
						name : "吊坠",
						href : "/",
						imp : 1
					},
					{
						name : "项链",
						href : "/",
						imp : 0
					},
					{
						name : "套链",
						href : "/",
						imp : 0
					}]
				},
				{
					h1 : "系列产品",
					content : [
					{
						name : "宠爱婚戒",
						href : "/",
						imp : 0
					}]
				},
				{
					h1 : "热门产品",
					content : [
					{
						name : "50分裸钻",
						href : "/",
						imp : 0
					},
					{
						name : "70分裸钻",
						href : "/",
						imp : 1
					}]
				}]
			}
		}
	}
</script>