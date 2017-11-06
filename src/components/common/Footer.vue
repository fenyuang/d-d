<template>
  <div class="FooterPage">
    <div class="line"></div>
  	<div class="footer_wrap cf">
  		<div class="footer_content">
  			<ul class="cf">
  				<li><a href="">首页</a><font>|</font></li>
  				<li><a href="">预约维修</a><font>|</font></li>
  				<li><a href="">师傅招募</a><font>|</font></li>
  				<li><a href="">关于叮叮</a><font>|</font></li>
  			</ul>
  			<div class="address">
	  			<p>联系电话：0755-36529881（时间：9：00-21：00）</p>
	  			<p>公司地址：深圳市南山区科技南十二路28号康佳研发大厦B座7楼</p>
	  			<p>版权所有 ©   深圳叮叮科技有限公司  粤ICP备17117017号-1</p>
  			</div>
  		</div>
  		<div class="customer_order">
  			<p>用户下单</p>
  			<a href=""><img src="./img/scan.png" height="90" width="90"></a>
  			<p>关注公众微信号</p>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style soped>
.FooterPage {
    border-top: 1px solid #9c875a;
    width: 100%;
    background: #f0f0f0;
}
.FooterPage .line{
  width: 458px;
  height: 2px;
  background-color: #f17317;
  margin:0 auto;
  position: relative;
  top:-2px;
}
.footer_wrap {
    width: 1200px;
    margin: 0 auto;
}

.footer_wrap ul li a {
    font-size: 14px;
    color: #333;
    font-family: 'Microsoft YaHei';
    width: 110px;
    padding-right: 24px;
}

.footer_wrap ul li font {
    color: #ffffff;
}

.footer_wrap .footer_content .address p {
    font-size: 12px;
    color: #333;
    font-family: 'Microsoft YaHei';
    margin-bottom: 10px;
}

.footer_wrap .footer_content .address {
    margin-top: 38px;
    padding-bottom: 72px;
}

.footer_wrap ul li {
    float: left;
    width: 110px;
}

.footer_wrap .footer_content,
.footer_wrap .customer_order {
    float: left;
}

.footer_wrap .footer_content {
    margin-left: 370px;
    padding-top: 17px;
}

.footer_wrap .customer_order {
    margin-top: 16px;
    margin-left: 80px;
}

.footer_wrap .customer_order p {
    font-size: 12px;
    font-family: 'Microsoft YaHei';
    color: #333;
    text-align: center;
}

.footer_wrap .customer_order a {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
