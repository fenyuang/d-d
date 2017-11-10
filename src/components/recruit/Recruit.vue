<template>
  <div class="RecruitPage">
  	<HeaderTag page="recruit"></HeaderTag>
	<Focus></Focus>
	<div class="join_us same_top">
		<div class="mini_width">
			<div class="top">
				<h1>加入我们</h1>
				<p>O2O模式颠覆维修行业传统接单模式</p>
				<p>最新技术研发与海量订单支撑师傅收益</p>
			</div>
			<ul class="cf">
				<li>
					<img src="./img/pig.png" height="120" width="120">
					<h2>零成本高收入</h2>
					<p>科学合理的奖励体制让能者多得</p>
					<p>完善的福利待遇解决生活后顾无忧</p>
				</li>
				<li>
					<img src="./img/arrow.png" height="120" width="120">
					<h2>专业技术支持</h2>
					<p>智能定位，分区域离家近</p>
					<p>客户位置清晰明确</p>
				</li>
				<li>
					<img src="./img/hand.png" height="120" width="120">
					<h2>全方位团队协作</h2>
					<p>互联网+运营模式，客服系统支撑</p>
					<p>线上线下辅助配合家庭维修工作</p>
				</li>
				<li class="last">
					<img src="./img/puzzle.png" height="120" width="120">
					<h2>便捷信息管理</h2>
					<p>师傅个人信息、用户订单管理</p>
					<p>编辑操作易上手</p>
				</li>
			</ul>
		</div>
	</div> 
	<div class="flow same_top">
		<div class="mini_width">
			<div class="top">
				<h1>接单很简单</h1>
				<p>O2O模式颠覆维修行业传统接单模式</p>
			</div>
			<div class="qr">
				<div class="step"></div>
				<h1>扫一扫，下载师傅APP</h1>
				<p>（接单更简单）</p>
				<div class="qrpic"></div>
				<p>叮叮快修，期待与您一起服务更广大的客户群体！</p>
				<p>咨询热线：400-800-8820</p>
			</div>
		</div>
	</div> 
<!-- 	<Floating></Floating> -->
	<FooterTag></FooterTag>
  </div>
</template>

<script>
import HeaderTag from '../common/Header.vue'
import Focus from '../common/Focus.vue'
import FooterTag from '../common/Footer.vue'
import Floating from '../common/Floating.vue'
export default {
	name: 'RecruitPage',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	mounted: function() {
		document.title="师傅招募 | 叮叮快修 整合线下零散维修资源"
	},
  	components: {
    	Focus,HeaderTag,FooterTag,Floating
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.join_us{
		height: 440px;
		background-color: #f6f6f6;
	}
	.same_top .mini_width{
		width: 1200px;
		margin:0 auto;
	}
	.same_top .top h1{
		font-family: 'Microsoft YaHei';
		font-size: 24px;
		line-height: 24px;
		padding-top: 20px;
		padding-bottom: 10px;
		color: #333;
		text-align: center;
	}
	.same_top .top p{
		font-family: 'Microsoft YaHei';
		font-size: 16px;
		line-height: 35px;
		color: #666;
		text-align: center;
	}
	.join_us ul{
		margin-top: 30px;
		margin-left:10px;
	}
	.join_us ul li{
		float: left;
		width: 278px;
		height: 239px;
		margin-right: 20px;
		border: 1px solid #ddd;
		background-color: #fff;
	}
	.join_us ul li.last{
		margin-right: 0;
	}
	.join_us ul li img{
		display: block;
		margin: 10px auto;
	}
	.join_us ul li h2{
		font-family: 'Microsoft YaHei';
		font-size: 20px;
		padding-bottom: 10px;
		color: #333;
		text-align: center;
	}
	.join_us ul li p{
		font-family: 'Microsoft YaHei';
		font-size: 14px;
		line-height: 20px;
		color: #666;
		text-align: center;
	}
	.flow{
		height: 570px;
		background-color: #fff;
	}
	.flow .qr .step{
		width: 1180px;
		height: 47px;
		margin:40px 10px 20px 10px;
		background: url(img/flow.png) no-repeat;
	}
	.flow .qr h1{
		font-family: 'Microsoft YaHei';
		font-size: 24px;
		padding-bottom: 10px;
		color: #333;
		text-align: center;
	}
	.flow .qr p{
		font-family: 'Microsoft YaHei';
		font-size: 16px;
		color: #333;
		text-align: center;
	}
	.flow .qr .qrpic{
		width: 200px;
		height: 200px;
		margin: 10px auto 10px;
		background: url(img/qrpic.png) no-repeat;
	}
</style>
