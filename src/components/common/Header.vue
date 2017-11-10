<template>
  <div class="HeaderPage">
	<div class="header_bar">
		<div class="header">
			<div class="header_content cf">
				<div class="logo">
					<a href="" class="img_one"><img src="./img/logo.png"></a>
					<a href="" class="img_two"><img src="./img/font.png"></a>
				</div>
				<div class="font_list">
					<ul class="cf">
						<li class="spe"><a v-bind:class="[page=='home'&&'active']" href="/#/">首页</a></li>
					<!-- 	<li><a v-bind:class="[page=='order'&&'active']" href="/#/Order">预约维修</a></li> -->
						<li><a v-bind:class="[page=='recruit'&&'active']" href="/#/Recruit">师傅招募</a></li>
						<li><a v-bind:class="[page=='about'&&'active']" href="/#/About">关于叮叮</a></li>
				    </ul> 
				    <a class="phone_number"><img src="./img/small_p.png">400-999-1981</a>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: ['page']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HeaderPage {
    position: fixed;
    z-index: 10;
    margin: 0 auto;
    width: 100%;
    padding: 10px 0;
    background: rgba(236, 240, 241, 0.42);
}

* {
    font-family: 'Microsoft YaHei';
}

.header_bar {
    width: 100%;
}

.header_bar .header {
    max-width: 1200px;
    margin: 0 auto;
}

.header_bar .header .header_content .logo {
    float: left;
}

.header_bar .header .header_content .font_list {
    float: right;
    position: relative;
}

.header_bar .header .header_content .logo {
    margin-left: 10px;
    height: 44px;
}

.header_bar .header .header_content .logo .img_one {
    display: inline-block;
    width: 203px;
}

.header_bar .header .header_content .logo .img_two {
    display: inline-block;
    margin-left: 20px;
    width: 150px;
}

.header_bar .header .header_content .logo .img_two img {
    margin-top: 16px;
}

.header_bar .header .header_content .font_list ul {
    margin-right: 115px;
}

.header_bar .header .header_content .font_list ul li {
    float: left;
    width: 97px;
    height: 44px;
    line-height: 44px;
}

.header_bar .header .header_content .font_list ul li a {
    font-size: 14px;
    color: #333333;
}

.header_bar .header .header_content .font_list ul .active {
    color: #ea5514;
}

.header_bar .header .header_content .font_list ul li a:hover {
    color: #ea5514;
}

.header_bar .header .header_content .phone_number {
    position: absolute;
    right: -6px;
    top: 10px;
    font-size: 15px;
    color: #ea5514;
}

.header_bar .header .header_content .font_list .spe{
    width: 57px;
    padding-right: 30px;
    text-align: center;

}
</style>
