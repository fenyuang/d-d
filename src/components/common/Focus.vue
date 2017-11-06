<template>
	<div class="FocusPage">
		<div class="bannerbox">
			<ul>
				<li class="banner"><a href="javascript:;"><img src="./img/banner1.png" alt=""></a></li>
				<li class="banner"><a href="javascript:;"><img src="./img/banner2.png" alt=""></a></li>
			</ul>
			<ul class="focusBox" style="display: ;">
				<li class='cur'></li>
				<li></li>
			</ul>
			<div class="btnCommon leftB">&lt;</div>
			<div class="btnCommon rightB">&gt;</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FocusPage',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	mounted: function() {
		var curNum = 0;
		var curNum2 = 0;
		var liNums = $(".bannerbox .banner").length - 1;
		$(".bannerbox .banner").eq(0).css("left", "50%");
		$(".bannerbox").hover(function() {
			$(".leftB,.rightB").css("display", "block");
		}, function() {
			$(".leftB,.rightB").css("display", "none");
		});
		$(".leftB").click(function() {
			$(".banner").finish();
			var temp = curNum;
			curNum--;
			if (curNum == -1) {
				curNum = liNums;
			}
			$(".banner").eq(curNum).css("left", "150%").animate({
				left: "50%"
			});
			$(".banner").eq(temp).animate({
				left: "-150%"
			});
			$(".focusBox li").eq(curNum).addClass("cur").siblings().removeClass("cur");
		});
		$(".rightB").click(function() {
			$(".banner").finish();
			var temp = curNum;
			curNum++;
			if (curNum == $(".bannerbox .banner").length) {
				curNum = 0;
			}
			$(".banner").eq(curNum).css("left", "-50%").animate({
				left: "50%"
			});
			$(".banner").eq(temp).animate({
				left: "250%"
			});
			$(".focusBox li").eq(curNum).addClass("cur").siblings().removeClass("cur");
		});

		function autoScroll() {
			$(".banner").finish();
			var temp = curNum;
			curNum--;
			if (curNum == -1) {
				curNum = liNums;
			}
			$(".banner").eq(curNum).css("left", "150%").animate({
				left: "50%"
			});
			$(".banner").eq(temp).animate({
				left: "-150%"
			});
			$(".focusBox li").eq(curNum).addClass("cur").siblings().removeClass("cur");
		};
		var clearIn = setInterval(autoScroll, 3000);
		$(".bannerbox").hover(function() {
			clearInterval(clearIn);
		}, function() {
			clearIn = setInterval(autoScroll, 3000);
		});
		$(".focusBox li").hover(function() {
			$(".banner").finish();
			$(".focusBox li").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
			curNum2 = $(this).index();
			if (curNum == curNum2) {
				return;
			} else if (curNum < curNum2) {
				$(".banner").eq(curNum2).css("left", "150%").animate({
					left: "50%"
				});
				$(".banner").eq(curNum).animate({
					left: "-150%"
				});
			} else if (curNum > curNum2) {
				$(".banner").eq(curNum2).css("left", "-50%").animate({
					left: "50%"
				});
				$(".banner").eq(curNum).animate({
					left: "250%"
				});
			}
			curNum = curNum2;
			curNum2 = "";
		}, function() {

		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bannerbox {
		width:100%;
		height:600px;
	    max-width: 1920px;
		position:relative;
		overflow:hidden;
		margin: 0 auto;
	}
	.banner {
		width:1920px; /*图片宽度*/
		position:absolute;
		left: -250%;
		margin-left:-960px; /*图片宽度的一半*/
	}
	.btnCommon{
		width:50px;
		height:70px;
		font-size: 20px;
		color:#fff;
		background: rgba(0,0,0,0.5);
		position: absolute;
		top:45%;
		line-height:70px;
		text-align: center;
		cursor: pointer;
		z-index: 10;
		display: none;
	}
	.rightB{
		right:0;
	}
	.leftB{
		left:0;
	}
	.focusBox{
	    position: absolute;
	    left: 50%;
	    bottom: 5px;
	    transform: translateX(-50%);
	}
	.focusBox li{
		display: inline-block;
		margin-right: 10px;
		list-style-type: none;
	   	width: 16px;
	   	height: 16px;
	   	border-radius: 10px;
	   	background-color: #999;
	   	cursor: pointer;
	}
	.focusBox li.cur{
		background-color: #ea5514;
	}
	
</style>
