<template>
  <div class="OrderPage">
  <HeaderTag page="order"></HeaderTag>
  <div class="order_content">
      <div class="order_list">
        <div class="line_light">
           <div class="choose_list">
               <ul class="cf">
                  <li>选择服务类型</li>
                  <li>选择设备型号</li>
                  <li>确认故障类型</li>
                  <li>给出解决方案</li>
                  <li>微信扫描下单</li>
               </ul>
           </div>
           <div class="white_line ">
             <p class="orange_line step_one"></p>
             <span class="point_one">1</span>
             <span class="point_two">2</span>
             <span class="point_three">3</span>
             <span class="point_four">4</span>
             <span class="point_five">5</span>
           </div>
        </div> 
      </div>  
  </div>
	<FooterTag></FooterTag>
	<Floating></Floating>
  </div>
</template>

<script>
import HeaderTag from '../common/Header.vue'
import FooterTag from '../common/Footer.vue'
import Floating from '../common/Floating.vue'
export default {
  name: 'OrderPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    HeaderTag, FooterTag, Floating
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.OrderPage{
  background-color: #fafafa;
}
.OrderPage .order_content{
  padding-top: 65px;
}
.OrderPage .order_content .order_list{
  width: 1200px;
  height: 70px;
  background-color: #4a6075;
  margin: 0 auto;
}
.OrderPage .order_content .order_list ul{width: 1115px;margin: 0 auto;}
.OrderPage .order_content .order_list ul li{
  display: inline-block;
  color: #ffffff;
  font-size: 14px;
  line-height: 10px;
  width: 220px;
  text-align: center;
  margin-top: 13px;

}
.OrderPage .order_content .order_list .white_line{
  width: 880px;
  height: 4px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 22px;
  position: relative;
}
.OrderPage .order_content .order_list .white_line .orange_line{
  height: 4px;
  background-color: #ea5413;
 
}
.OrderPage .order_content .order_list .white_line span{
  display: inline-block;
  background-color:#ea5413;
  border-radius: 50%;
  color:#fff;
  width: 18px; 
  height:18px;
  text-align: center;
  position: absolute;
}
.OrderPage .order_content .order_list .white_line .point_one{
  left: -17px;
  top: -7px;
}
.OrderPage .order_content .order_list .white_line .point_two{
  left: 209px;
  top: -7px;
}
.OrderPage .order_content .order_list .white_line .point_three{
  left:  431px;
  top: -7px;
} 
.OrderPage .order_content .order_list .white_line .point_four{
  left: 653px;
  top: -7px;
}
.OrderPage .order_content .order_list .white_line .point_five{
  right:-17px;
  top: -7px;
}

.step_one{ width:12%;}
.step_two{ width:38%;}
.step_three{ width:63%;}
.step_four{ width:88%;}
.step_five{ width:100%;}
</style>
