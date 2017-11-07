<template>
  <div class="FloatingPage">
	<div class="floating">
		<ul>
			<li><a href="http://177dd.udesk.cn/im_client/?web_plugin_id=38935" target="_blank"><img src="./img/counsel.png" height="50" width="50"></a></li>
			<li><a href="http://localhost:8090/#/About"><img src="./img/advice.png" height="50" width="50"></a></li>
			<li class="spe">
				<a href="">
					<img src="./img/weixin.png" height="50" width="50">
					<p class="scan" style="display:none;"><img src="./img/chat.png"></p>	
				</a>
			</li>
			<li><a href="#"><img src="./img/top.png" height="50" width="50"></a></li>
		</ul>

	</div>
  </div>
</template>

<script>
export default {
  name: 'FloatingPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function(){
  	$(".floating .spe img").hover(function(){
  		$(".floating .spe p").css("display","block")
  	},function(){
  		$(".floating .spe p").css("display","none")
	
  	})
  }

  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.floating{position: fixed;right: 0;top: 50%;margin-top: -100px;z-index: 10}
.floating .spe a{display: block;position: relative;}
.floating .spe p{position: absolute;right:41px;top:-35px;}
.floating li a{
	background-color: #ababab;
	display: inline-block;
	height: 50px;
	width: 50px;
}
.floating li a:hover{
	background-color: #777777;
}

</style>
