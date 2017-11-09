<template>
  <div class="OrderPage">
  <HeaderTag page="order"></HeaderTag>
      <div class="banner1">
         <div class="banner_content"></div>   
      </div>
  <div class="order_content">
      <div class="order_wrap">
         <div class="service_list">
              <h1>您需要的服务是？</h1>
               <ul class="cf">
                  <li v-on:click="getFirstLevelData('002')">
                      <div class="li_wrap cf">
                          <div class="img_left dis" v-bind:style="{display:firstLevelId=='002'?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div>
                          <div class="one"><img src="./pict/household.png"></div>
                          <div class="two">
                            <h3>家电维修</h3>
                            <p>空调，冰箱，电视,燃气热水器，饮水机等</p>
                          </div>     
                      </div>
                  </li>
                  <li v-on:click="getFirstLevelData('003')">
                      <div class="li_wrap cf">
                          <div class="img_left dis" v-bind:style="{display:firstLevelId=='003'?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div>
                          <div class="one"><img src="./pict/phone.png" height="86" width="86"></div>
                          <div class="two">
                            <h3>手机维修</h3>
                            <p>手机/电脑维修,电池更换/网络调试等</p>
                          </div>
                      </div>
                  </li>
                  <li v-on:click="getFirstLevelData('004')">
                    <div class="li_wrap cf">
                        <div class="img_left dis" v-bind:style="{display:firstLevelId=='004'?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div>
                        <div class="one"><img src="./pict/furniture.png" height="86" width="86"></div>
                        <div class="two">
                          <h3 >家居维修</h3>
                          <p>门窗家居维修，灯具安装/灯具电路等</p>
                        </div>  
                    </div>
                  </li>
                  <li v-on:click="getFirstLevelData('006')">
                      <div class="li_wrap cf">
                          <div class="img_left dis" v-bind:style="{display:firstLevelId=='006'?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div>
                          <div class="one"><img src="./pict/bathroom.png" height="86" width="86"></div>
                          <div class="two">
                            <h3>卫浴洁具</h3>
                            <p>龙头/管件,马桶,浴霸水路管件更换维修等</p>
                          </div>   
                      </div>
                  </li>
                  
              </ul>
         </div>
          <div class="repair_content">
               <h1>{{firstLevelTitle}}</h1>
               <div>
                 <ul>
                   <!-- <div v-if="firstLevelBeans.length==0">无数据</div> -->
                   <li v-for="item in firstLevelBeans" v-on:click="getSecondLevelData(item.a)"><div class="img_left dis" v-bind:style="{display:secondLevelId==item.a?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.b}}</span></li>
                 </ul>
               </div>
          </div>
           <div class="repair_content">
               <h1>{{secondLevelTitle}}</h1>
               <div>
                 <ul>
                    <!-- <div v-if="secondLevelBeans.length==0">无数据</div> -->
                    <li v-for="item in secondLevelBeans" v-on:click="getThreeLevelData(item.a)"><div class="img_left dis" v-bind:style="{display:threeLevelId==item.a?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.b}}</span></li>
                 </ul>
               </div> 
          </div>
          <div class="repair_content">
               <h1>{{threeLevelTitle}}</h1>
               <div>
                 <ul>
                   <!-- <div v-if="threeLevelBeans.length==0">无数据</div> -->
                   <li v-for="item in threeLevelBeans" v-on:click="getFourLevelData(item.a)"><div class="img_left dis" v-bind:style="{display:fourLevelId==item.a?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.b}}</span></li>
                 </ul>
               </div> 
          </div>
          <div class="repair_content">
               <h1>{{fourLevelTitle}}</h1>
               <div>
                 <ul>
                   <!-- <div v-if="fourLevelBeans.length==0">无数据</div> -->
                   <li v-for="item in fourLevelBeans" v-on:click="getFiveLevelData(item.a)"><div class="img_left dis" v-bind:style="{display:fiveLevelId==item.a?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.b}}</span></li>
                 </ul>
               </div> 
          </div>
          <div class="repair_content">
               <h1>{{fiveLevelTitle}}</h1>
               <div>
                 <ul>
                   <!-- <div v-if="fiveLevelBeans.length==0">无数据</div> -->
                   <li v-for="item in fiveLevelBeans" v-on:click="getSixLevelData(item.a)"><div class="img_left dis" v-bind:style="{display:sixLevelId==item.a?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.b}}</span></li>
                 </ul>
               </div> 
          </div>
          <div class="repair_content">
               <h1>{{sixLevelTitle}}</h1>
               <div>
                 <ul>
                   <!-- <div v-if="sixLevelBeans.length==0">无数据</div> -->
                   <li v-for="item in sixLevelBeans" v-on:click="getSevenLevelData(item.a)"><div class="img_left dis" v-bind:style="{display:sevenLevelId==item.a?'block':'none'}"><img src="./pict/checked.png" height="40" width="40"></div><span>{{item.b}}</span></li>
                 </ul>
               </div> 
          </div>
          <div class="order_bottom" style="display:block;">
            <h1>根据你的设备问题，给出以下维修方案</h1>
            <div class="bottom_list" >
                <table>
                    <tr class="td_spe">
                        <td>故障问题</td>
                        <td>维修方案</td>
                        <td>维修费用（元)</td>
                    </tr>
                    <tr>
                        <td>冰箱不启动</td>
                        <td>更换电池</td>
                        <td class="spe_orange">￥400</td>
                    </tr>
                    <tr>
                        <td>冰箱不启动</td>
                        <td>更换电池</td>
                        <td class="spe_orange">￥400</td>
                    </tr>
                    <tr>
                        <td>冰箱不启动</td>
                        <td>更换电池</td>
                        <td class="spe_orange">￥400</td>
                    </tr>
                    <tr>
                        <td>冰箱不启动</td>
                        <td>更换电池</td>
                        <td class="spe_orange">￥400</td>
                    </tr>
                    <tr>
                      <td colspan="3"><input type="text" name=""></td>
                    </tr>
                </table>
            </div>
            <div class="scan_place">
                <div class="price"><span class="span_one">此次维修总价</span><span class="span_two">￥400</span></div>
                <img src="./pict/scan_big.png" height="188" width="188">
                <p>微信下单,岂止简单</p>
                <p>让您随时关注订单动态</p>
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
      msg: 'Welcome to Your Vue.js App',
      firstLevelId:'',
      secondLevelId:'',
      threeLevelId:'',
      fourLevelId:'',
      fiveLevelId:'',
      sixLevelId:'',
      sevenLevelId:'',
      firstLevelTitle:'',
      secondLevelTitle:'',
      threeLevelTitle:'',
      fourLevelTitle:'',
      fiveLevelTitle:'',
      sixLevelTitle:'',
      sevenLevelTitle:'',
      firstLevelBeans : [],
      secondLevelBeans:[],
      threeLevelBeans:[],
      fourLevelBeans:[],
      fiveLevelBeans:[],
      sixLevelBeans:[],
      sevenLevelBeans:[]
    }
  },
  methods:{
    getFirstLevelData:function(parentId){
      var _this = this;
      this.firstLevelId = parentId
      $.ajax({
       url:"http://app.dingdingkuaixiu.com/articleinfo/findlabelbusinessbyflabel",
       data:{
         id: parentId
       },
       dataType:"json",
       success: function(rs){
         if (rs.code=="0000") {
           _this.firstLevelTitle = rs.result.c;
           _this.firstLevelBeans = rs.result.beans||[];
           _this.secondLevelId='';
           _this.threeLevelId='';
           _this.fourLevelId='';
           _this.fiveLevelId='';
           _this.sixLevelId='';
           _this.sevenLevelId='';
          _this.secondLevelTitle='';
          _this.threeLevelTitle='';
          _this.fourLevelTitle='';
          _this.fiveLevelTitle='';
          _this.sixLevelTitle='';
          _this.sevenLevelTitle='';
           _this.secondLevelBeans=[];
           _this.threeLevelBeans=[];
           _this.fourLevelBeans=[];
           _this.fiveLevelBeans=[];
           _this.sixLevelBeans=[];
           _this.sevenLevelBeans=[];
         }else{
           alert(rs.error);
         }
       },
       error:function(){
         alert("网络错误")
       }
      })
    },
    getSecondLevelData:function(id){
      for(var x in this.firstLevelBeans){
        if(this.firstLevelBeans[x].a==id){
          this.secondLevelId = this.firstLevelBeans[x].a;
          this.secondLevelTitle = this.firstLevelBeans[x].c;
          this.secondLevelBeans=this.firstLevelBeans[x].beans||[];
          this.threeLevelId='';
          this.fourLevelId='';
          this.fiveLevelId='';
          this.sixLevelId='';
          this.sevenLevelId='';
          this.threeLevelTitle='';
          this.fourLevelTitle='';
          this.fiveLevelTitle='';
          this.sixLevelTitle='';
          this.sevenLevelTitle='';
          this.threeLevelBeans=[];
          this.fourLevelBeans=[];
          this.fiveLevelBeans=[];
          this.sixLevelBeans=[];
          this.sevenLevelBeans=[]
          break;
        }
      }
    },
    getThreeLevelData:function(id){
      for(var x in this.secondLevelBeans){
        if(this.secondLevelBeans[x].a==id){
          this.threeLevelId = this.secondLevelBeans[x].a;
          this.threeLevelTitle = this.secondLevelBeans[x].c;
          this.threeLevelBeans=this.secondLevelBeans[x].beans||[];
          this.fourLevelId='';
          this.fiveLevelId='';
          this.sixLevelId='';
          this.sevenLevelId='';
          this.fourLevelTitle='';
          this.fiveLevelTitle='';
          this.sixLevelTitle='';
          this.sevenLevelTitle='';
          this.fourLevelBeans=[];
          this.fiveLevelBeans=[];
          this.sixLevelBeans=[];
          this.sevenLevelBeans=[];
          break;
        }
      }
    },
    getFourLevelData:function(id){
      for(var x in this.threeLevelBeans){
        if(this.threeLevelBeans[x].a==id){
          this.fourLevelId = this.threeLevelBeans[x].a;
          this.fourLevelTitle = this.threeLevelBeans[x].c;
          this.fourLevelBeans=this.threeLevelBeans[x].beans||[];
          this.fiveLevelId='';
          this.sixLevelId='';
          this.sevenLevelId='';
          this.fiveLevelTitle='';
          this.sixLevelTitle='';
          this.sevenLevelTitle='';
          this.fiveLevelBeans=[];
          this.sixLevelBeans=[];
          this.sevenLevelBeans=[];
          break;
        }
      }
    },
    getFiveLevelData:function(id){
      for(var x in this.fourLevelBeans){
        if(this.fourLevelBeans[x].a==id){
          this.fiveLevelId = this.fourLevelBeans[x].a;
          this.fiveLevelTitle = this.fourLevelBeans[x].c;
          this.fiveLevelBeans=this.fourLevelBeans[x].beans||[];
          this.sixLevelId='';
          this.sevenLevelId='';
          this.sixLevelTitle='';
          this.sevenLevelTitle='';
          this.sixLevelBeans=[];
          this.sevenLevelBeans=[];
          break;
        }
      }
    },
    getSixLevelData:function(id){
      console.log(2)
      this.qrCode();
      for(var x in this.fiveLevelBeans){
        if(this.fiveLevelBeans[x].a==id){
          this.sixLevelId = this.fiveLevelBeans[x].a;
          this.sixLevelTitle = this.fiveLevelBeans[x].c;
          this.sixLevelBeans=this.fiveLevelBeans[x].beans||[];
          this.sevenLevelId='';
          this.sevenLevelTitle='';
          this.sevenLevelBeans=[]
          break;
        }
      }
    },
    getSevenLevelData:function(id){
      this.sevenLevelId = id;
      console.log(1)
      this.qrCode();
      return;
      for(var x in this.fiveLevelBeans){
        if(this.fiveLevelBeans[x].a==id){
          this.sixLevelId = this.fiveLevelBeans[x].a;
          this.sixLevelTitle = this.fiveLevelBeans[x].c;
          this.sixLevelBeans=this.fiveLevelBeans[x].beans||[];
          break;
        }
      }
    },
    qrCode:function(){
      var str = "http://www.dingdingkuaixiu.com/?secondLevelId="+this.secondLevelId+"&threeLevelId="+this.threeLevelId+"&fourLevelId="+this.fourLevelId+"&fiveLevelId="+this.fiveLevelId+"&sixLevelId="+this.sixLevelId+"&sevenLevelId="+this.sevenLevelId+"#/wash/"+this.firstLevelId
      console.log(str)
    }
  },
  mounted: function(){

  },
  components: {
    HeaderTag, FooterTag, Floating
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.OrderPage .banner1{
  position: relative;
  width: 100%;
  height: 600px;
  margin: 0 auto;}
.OrderPage .banner1 .banner_content{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e0e0e0;
    background-image: url(./pict/banner_top.png);
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
}

.OrderPage{
  background-color: #fafafa;
}
.OrderPage .order_content{
  padding-top: 65px;
  width: 1200px;
  margin: 0 auto;
}
.OrderPage .order_content .service_list ul li{
  float: left;
  width: 281px;
  height: 142px;
  border: 1px solid #dddddd;
  margin-bottom: 23px;
  margin-right: 15px;
  margin-top: 22px;
}
.OrderPage .order_content .service_list ul li .li_wrap{
  border-bottom: 1px solid #ea5514;
  height: 141px;
 /* background: url(./pict/checked.png) no-repeat;*/
}

.OrderPage .order_content .service_list ul li .one,.OrderPage .order_content .service_list ul li .two{float: left;}
.OrderPage .order_content .service_list ul li{
  position: relative; 
  cursor: pointer;
}
.OrderPage .order_content .service_list ul li .two{
  width: 140px;
  position: absolute;
  right: 9px;
  top: 42px;
}
.OrderPage .order_content .service_list ul li .one{
  margin-left: 18px;
  margin-top: 32px;
}
.OrderPage .order_content  .dis{
display: none;
position: absolute;
left: 0;top:0;
}
.OrderPage .order_content .service_list ul li h3{
  font-size: 20px;
  color: #333333;
  font-weight: normal;
}
.OrderPage .order_content .service_list ul li p{
  font-size: 14px;
  color: #666666;
}
.OrderPage .order_content .order_wrap h1{
  font-size: 24px;
  color: #333333;
  font-weight: normal;
}
.OrderPage .order_content .order_wrap .repair_content ul li{
  display: inline-block;
  width: 219px;
  height: 44px;
  margin-right: 14px;
  border: 1px solid  #ddd;
  position: relative;
  margin-bottom: 5px;
  cursor: pointer;
  text-align: center;
  line-height: 44px;
}
.OrderPage .order_content .order_wrap .repair_content ul{margin-bottom: 22px;margin-top: 21px;}
.OrderPage .order_content .order_wrap .repair_content ul li span{
  font-size: 16px;
  color: #333333;
}
.OrderPage .order_content .order_wrap .order_bottom .bottom_list{
  margin-top: 51px;
}

.OrderPage .order_content .order_wrap .order_bottom .bottom_list td{
  width: 400px;
  text-align: center;
  padding-bottom: 8px;
  height: 33px;
  line-height: 33px;
  font-size: 16px;
  color: #333333;
}

.OrderPage .order_content .order_wrap .order_bottom .bottom_list .td_spe{
  border-bottom: 1px solid #dddddd;
 
}
.OrderPage .order_content .order_wrap .order_bottom .bottom_list .td_spe td{
   color: #999999 !important;
}

.OrderPage .order_content .order_wrap .order_bottom .bottom_list tr input{
  width: 1000px;
  height: 48px;
  border:1px solid #ea5413;
}
.OrderPage .order_content .order_wrap .order_bottom .price .span_one{
  display: inline-block;
  margin-left: 12px;
  font-size: 16px;
  color: #333;
  padding-bottom: 18px;

}
.OrderPage .order_content .order_wrap .order_bottom .price .span_two{
  font-size: 20px;
  color: #ea5413;
}


.OrderPage .order_content .order_wrap .order_bottom .scan_place{
 width: 188px;
 margin: 0 auto;
 margin-bottom: 100px;

}
.OrderPage .order_content .order_wrap .order_bottom .scan_place p{
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  color: #333333;
}

</style>
