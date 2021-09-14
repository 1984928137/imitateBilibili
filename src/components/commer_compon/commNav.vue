<template >
<keep-alive>


    <div  v-if="propData" class="Nav" id="navDiv" >
        <div class="navFirstChildDiv">
        <!-- 导航栏重用组件 -->
        <div >
        <ul class="navUl">
            <li v-for="(item,index) in liData" :key="index">
                <!-- <span class="iconfont icon-shouji :before"></span> -->
                <router-link :to="item.routers">
                <div class="divImgSpan" :style="item.styles">
                    <img :src="item.imgs" alt="" >
                    <span>{{item.title}}</span>
                </div>
                </router-link>
            </li>
        </ul>
        </div>
        <div class="verticalLine"></div>
        <div class="primaryMenu"  >
        <ul class="navUlTwo">
            <li v-for="(item,index) in liDataTwo" :key="index" class="liTwo">
                <!-- <span class="iconfont icon-shouji :before"></span> -->
                <router-link :to="item.routers">
                    <span>{{item.title}}</span>
                    <span class="liTwoToSpan">999+</span>
                </router-link>
            </li>
            
        </ul>
        <ul class="navUlTwo">
            <li v-for="(item,index) in liDataThree" :key="index" class="liTwo">
                <!-- <span class="iconfont icon-shouji :before"></span> -->
                <router-link :to="item.routers" >
                    <span>{{item.title}}</span>
                    <span class="liTwoToSpan">999+</span>
                </router-link>
            </li>
            <li class="liTwo">
            <a href="#/"><span class="liTwoSpan">更多</span>
            <span class="iconfont icon-jiantoxia-hei :before arrows" ></span>
            <!-- <img src="../../assets/arrows.png" alt="" srcset=""> -->
            </a></li>
        </ul>
        </div>
        <div class="verticalLine" style="margin-left: 10px;"></div>
        <div class="link">
        <ul class="navUlTwo">
            <li v-for="(item,index) in liDataFive" :key="index" class="liThree">
                <router-link :to='item.routers'>
                    <span :class="item.icons">&nbsp;{{item.title}}</span>
                    <!-- <span>{{item.title}}</span> -->
                </router-link>
            </li>
        </ul>
        <ul class="navUlTwo">
            <li v-for="(item,index) in liDataSix" :key="index" class="liThree">
                <router-link :to='item.routers'>
                    <span :class="item.icons">&nbsp;{{item.title}}</span>
                    <!-- <span>{{item.title}}</span> -->
                </router-link>
            </li>
        </ul>
        </div>
        </div>
    </div>
</keep-alive>
</template>
<script>
export default {
    name:'commnav',
    
    data() {
        return {
            daDivWacth:true,
            liData:[
                {id:0,routers:{name:'home'},title:'首页',imgs:require('../../assets/home.png'),styles:'background-color: rgba(248, 93, 93,0.7);'},
                {id:1,routers:{name:'trends'},title:'动态',imgs:require('../../assets/trends.png'),styles:'background-color: orange;'},
                {id:2,routers:{name:'popular'},title:'热门',imgs:require('../../assets/popular.png'),styles:'background-color: rgba(12, 110, 190,0.7);'},
                {id:3,routers:{name:'channel'},title:'频道',imgs:require('../../assets/channel.png'),styles:'background-color: rgba(2, 150, 2, 0.7);'},

            ],
            liDataTwo:[
                {id:4,routers:{name:'animation'},title:'动画'},
                {id:5,routers:{name:'music'},title:'音乐'},
                {id:6,routers:{name:'dance'},title:'舞蹈'},
                {id:7,routers:{name:'knowledge'},title:'知识'},
                {id:8,routers:{name:'life'},title:'生活'},
                {id:9,routers:{name:'vogue'},title:'时尚'},
                {id:10,routers:{name:'recreation'},title:'娱乐'},
                {id:11,routers:{name:'theater'},title:'放映厅'},

            ],
            liDataThree:[
                {id:12,routers:{name:'anime'},title:'番剧'},
                {id:13,routers:{name:'countrycreate'},title:'国创'},
                {id:14,routers:{name:'game'},title:'游戏'},
                {id:15,routers:{name:'technology'},title:'科技'},
                {id:16,routers:{name:'ghostanimal'},title:'鬼畜'},
                {id:17,routers:{name:'information'},title:'资讯'},
                {id:18,routers:{name:'film'},title:'影视'},
                // {id:19,routers:{name:''},title:'更多'},


            ],
            liDataFour:[
                {id:19,routers:{name:'humour'},title:'搞笑'},
                {id:20,routers:{name:'exercise'},title:'运动'},
                {id:21,routers:{name:'cate'},title:'美食'},
                {id:22,routers:{name:'car'},title:'汽车'},
                {id:23,routers:{name:'zoosphere'},title:'动物圈'},
                {id:24,routers:{name:'daily'},title:'日常'},
            ],
            liDataFive:[
                {id:25,routers:{name:'column'},title:'专栏',icons:'iconfont icon-zhuanlan :before'},
                {id:26,routers:{name:'activity'},title:'活动',icons:'iconfont icon-huodong :before'},
                {id:27,routers:{name:'blackRoom'},title:'小黑屋',icons:'iconfont icon-tianping :before'},
            ],
            liDataSix:[
                {id:28,routers:{name:'livetelecast'},title:'直播',icons:'iconfont icon-zhibo :before'}, //
                {id:29,routers:{name:'classRoom'},title:'课堂',icons:'iconfont icon-ketang :before'},
                {id:30,routers:{name:'songHotList'},title:'新歌热榜',icons:'iconfont icon-ge :before'},
            ],
            liDivData:'999+',
            // imgs:require('../../assets/bili_logo.png')
            propDatas:this.prop
            
        }
    },
    props:['propData'],
    watch:{
        propData:{
            handler:function (newval,oldVal) {
                console.log(1,newval,oldVal)
                // this.daDivWacth = false
                // this.daDivWacth = true
                if(this.$route.name === 'login'){
                    // this.daDivWacth = false
                }
                if(this.$route.name !== 'login'){
                    // this.daDivWacth = true
                }
            },
            deep:true,
            immediate:true
        },
        
        
    },
    Created() {
        // console.log(this)
        // this.daDivWacth = flase
        if(!(this.$route.name === 'login')){
            this.data.daDivWacth = true
        }
    },
    
    beforeMount() {
        // this.daDivWacth = 'flase'
    },
    bemounted() {
        // console.log(this.watchData)
        // this.dataDivWacth = 'flase'
    },
    updated() {
        // if(!(this.$route.name === 'login')){
        //     this.data.daDivWacth = true
        // }
    },
    beforeMount() {
        // if(!(this.$route.name === 'login')){
        //     this.data.daDivWacth = true
        // }
    },
}
</script>
<style >
    .Nav{

        display: flex;
        padding-top: 20px;
        /* padding-left: 10px; */
        justify-content: center;
        width: 100%;
    }
    .navFirstChildDiv{
        width: 1050px;
        display: flex;
    }
    .navUl{
        display: flex;
        /* width: 10px; */
        min-width: 207px;
        /* margin-left: 100px; */
    }
    .navUl li:first-child{
        margin-left: 0;
        /* padding-left: 0; */
    }
    .navUl li{
        display: flex;
        padding-left: 7px;
        margin-left: 2px;
    }
    
    .navUl li a{
        display: flex;
        color: #000;
        /* background-color: #000; */
    }
    .navUl li a:hover{
        color: rgb(128, 214, 248);
    }
    .navUl li a span{
        display: flex;
        justify-content: center;

    }
    .navUl li a img{
        width: 25px;
        height: 25px;
        /* display:flex; */
        /* float:left; */
        margin-bottom: 5px;
        /* padding-top: 10px; */
    }
    .divImgSpan{
        padding-top: 8px;
        /* margin-bottom: 2px; */
        width: 43px;
        height: 43px;
        text-align: center;
        border-radius: 50%;
        background-color: rgba(2, 150, 2, 0.822);
        /* display: flex; */
        margin: 0;
        /* padding: 0; */
    }
    .verticalLine{
        border-left: 1px;
        height: 50px;
        width: 1px;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        /* padding-left: 10px; */
        margin-left: 14px;
        margin-top: 7px;
        margin-right: 4px;
    }
    .primaryMenu{
        min-width: 551px;
    }
    .navUlTwo{
        display: flex;
        /* width: 10px; */
    }
    .navUlTwo li:first-child{
        margin-left: 0;
        /* padding-left: 0; */
    }
    .navUlTwo li{
        display: flex;
        padding-left: 6px;
        margin-left: 1px;
    }
    
    .navUlTwo li a{
        display: flex;
        color: #000;
        /* background-color: #000; */
    }
    .navUlTwo li a:hover{
        color: rgb(128, 214, 248);
    }
    .navUlTwo li a span{
        display: flex;
        justify-content: center;

    }
    .liTwo{
        /* padding-top: 7px; */
        align-items: center;
        /* font-size: 15px; */
        margin-top: 8px;
        margin-bottom: 7px;
        /* vertical-align: middle; */
    }
    
    .liTwoSpan{
        /* vertical-align: middle; */
        align-items: center;
        margin-right: 5px;
        /* font-size: 14px; */
    }
    .liTwoToSpan{
        width: 30px;
        height: 14px;
        background-color: rgba(135, 207, 235, 0.7);
        color: #fff;
        font-size: 8px;
        font-weight: bold;
        text-align: center;
        align-items: center;
        /* justify-content: center; */
        margin-top: 4px;
        border-radius: 3px;
        margin-left: 2px;
    }
    .arrows{
        vertical-align: middle;
        /* font-size: 13px; */
        align-items: flex-start;
        /* padding: 0; */
    }
    .liThree{
        display: flex;
        /* padding-top: 7px; */
        margin-bottom: 3px;
    }
    .liThree span{
        margin-left: 5px;
        align-items: center;
    }
    .link{
        /* margin-right: 100px; */
        min-width: 252px;
    }
</style>