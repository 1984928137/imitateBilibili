<template >
<div>
    <div class="divClass"  id="appFireCom">
        <!-- 顶部重用组件 -->
        <ul class="headUl" >
           
            <li v-for="(item,index) in ilData" :key="index">
                <router-link :to='item.routers' :id="'headNavA'+item.routers.name" >
                    <span class="iconfont icon-bilibili-fill :before" v-if="item.id == 1"></span>
                    <span class="iconfont icon-shouji :before" v-if="(item.id == 8)"></span>
                    <span>{{item.title}}</span>
                </router-link>
                    <div v-if="item.id == 3" class="dropdown-content" :id="'dropdown'+item.routers.name" >
                       <div style="width:80px ;height:20px;position: absolute;margin-top: -30px;margin-left:11px;">
                           <div class="dropdownTriangle"></div> </div>
                        
                        <ul class="dropdownTriangleUl">
                            <li class="dropdownContentLI"><router-link to="login"><img src="https://img1.baidu.com/it/u=769568653,1888735815&fm=26&fmt=auto&gp=0.jpg" alt="" srcset=""></router-link></li>
                            <li></li>
                        </ul>
                    
                        
                        <br>
                        <p>aaa</p>emptyBox
                    </div>
                    <!-- </div> -->
                    <div  v-if="item.id == 4" class="dropdown-content" :id="'dropdown'+item.routers.name" >
                        <div style="width:50px ;height:20px;position: absolute;margin-top: -30px; margin-left:9px;">
                            <div class="dropdownTriangle" style="margin-left:14px"></div></div>
                        <div>
                                <ul>
                                    <li class="dropdownTwoLi">
                                        <img src="https://img1.baidu.com/it/u=769568653,1888735815&fm=26&fmt=auto&gp=0.jpg" alt="" srcset="">
                                        <br>
                                    </li>
                                </ul>
                            
                        </div>
                    </div>
                    <div v-if="item.id == 6"  class="dropdown-content"  :id="'dropdown'+item.routers.name" >
                    <div style="width:100px ;height:20px;position: absolute;margin-top: -30px;">
                        <div class="dropdownTriangle"></div>
                    </div>
                        <img src="https://img1.baidu.com/it/u=769568653,1888735815&fm=26&fmt=auto&gp=0.jpg" alt="" srcset="">
                        <br>
                        <p>aaa</p>
                    </div>
                    <div v-if="item.id == 8"  class="dropdown-content" :id="'dropdown'+item.routers.name" >
                    <div style="width:100px ;height:20px;position: absolute;margin-top: -30px;">
                        <div class="dropdownTriangle"></div>
                    </div>
                    <img src="https://img1.baidu.com/it/u=769568653,1888735815&fm=26&fmt=auto&gp=0.jpg" alt="" srcset="">
                        <br>
                        <p>aaa</p>
                    </div>
                    <!-- </div> -->
            </li>
        </ul>
        <Input size="large" icon='soltsolt'  search enter-button :placeholder="Vplaceholder" 
            :style="searchInputStyle" type="text" v-model="searchs" @on-click='onSearch(searchs)' />  

        <!-- icon='solt' solt仅仅是个占位符，没有其他意义 -->
        <router-link to='login'>
            <Button @click="onLogin(false)" :style="loginBtnStyle" type="default" icon=" iconfont icon-denglu :before" shape="circle">
            </Button>
        </router-link>
        <div>
            <ul class="headUlTwo">
                <!-- <li><span class="iconfont icon-bilibili-fill :before"></span></li> -->
                <li v-for="(item,index) in ilDataTwo" :key="index">
                    <router-link :to='item.routers'>
                        <span>{{item.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <Button :style="contributeBtnStyles" type="primary"  >投稿</Button>
    </div>
            <div> <commNav :propData='propData' /></div>
    </div>


    


</template>




<script>
import commNav from '@/components/commer_compon/commNav.vue'

export default {
    name:'comm_hadeer',
    data() {
        return {
            ilData:[
                // {id:0,routers:{name:''},title:<span class="iconfont icon-bilibili-fill :before"></span>},
                {id:1,routers:{name:'home'},title:'主站',},
                {id:2,routers:{name:'anime'},title:'番剧',},
                {id:3,routers:{name:'gamecentre'},title:'游戏中心',firstDivStyle:'width: 64px;height: 25px;',},
                {id:4,routers:{name:'livetelecast'},title:'直播',divStyle:'width:48px;margin-left:-7px;',dropdownStyle:'margin-left:-51px;'},
                {id:5,routers:{name:'vipbuy'},title:'会员购',},
                {id:6,routers:{name:'cartoon'},title:'漫画',divStyle:'width:48px;margin-left:-7px;',dropdownStyle:'margin-left:-51px;'},
                {id:7,routers:{name:'match'},title:'赛事',},
                // {id:8,title:{template:`<span class="iconfont icon-bilibili-fill :before"></span>`}},
                {id:8,routers:{name:'downloadapp'},title:'下载APP',divStyle:'width:90px;margin-left:-25px;'}
            ],
            ilDataTwo:[
                // {id:0,routers:{name:''},title:<span class="iconfont icon-bilibili-fill :before"></span>},
                {id:1,routers:{name:'bigvip'},title:'大会员'},
                {id:2,routers:{name:'message'},title:'消息'},
                {id:3,routers:{name:'trends'},title:'动态'},
                {id:4,routers:{name:'collect'},title:'收藏'},
                {id:5,routers:{name:'history'},title:'历史记录'},
                {id:6,routers:{name:'creatrcentre'},title:'创作中心'},
            ],
            searchs:'',
            
            Vplaceholder:'复古风动画大神入驻！',   //用来绑定 服务器传输过来的 热点资讯新闻  后面是要把这里置为空，然后换上服务器数据
            datas:[],
            loginBtnStyle:`
                width: 47px; 
                height: 43px; 
                color: rgb(28, 147, 245); 
                margin-left: 25px;
                margin-top: 20px;
                min-width: 47px;
            `,
            contributeBtnStyles:`
                width: 100px; 
                height: 43px; 
                color: rgb(255, 253, 254); 
                margin-left: 15px;
                margin-top: 20px; 
                background-color: rgb(250, 146, 146); 
                border: 0;
                margin-right: 20px;
            `,
            searchInputStyle:`
                width: 430px; 
                padding-left: 22px; 
                height: 30px; 
                margin-top: 20px;
                min-width: 200px;
            `,
            classMarginLeft:'',
            propData:true
        }
    },
    methods: {
        onSearch(val){
            console.log(val)
        },
        onLogin(val){
            console.log(val,this.propData)
            
            this.propata = val
        },
        onNav(val){

        }
    },
    created() {
        this.$axios.get('').then(res=>{
            this.datas = res.data
        }).catch(err=>{
            console.log(err)
        })
    },
    mounted() {

        function documentId(name,nameTwo) {
            let dmt = document.getElementById(name)
            let dmtTwo = document.getElementById(nameTwo)
            return dmt.onmouseover = ()=>{
                dmtTwo.style.display = 'block'
            },dmt.onmouseout = ()=>{
                dmtTwo.style.display = 'none'
            }
        }
        function documentIdDrop(name) {
            let dmt = document.getElementById(name)
             dmt.onmouseover = ()=>{
                dmt.style.display = 'block'
            },dmt.onmouseout = ()=>{
                dmt.style.display = 'none'
            }
        }

        let dropdownOne = documentId('headNavAgamecentre','dropdowngamecentre') //Ul 列表 里的 游戏中心等 菜单  ， 鼠标触碰是否显示
        let dropdownTwo = documentId('headNavAlivetelecast','dropdownlivetelecast')
        let dropdownThree = documentId('headNavAcartoon','dropdowncartoon')
        let dropdownFour = documentId('headNavAdownloadapp','dropdowndownloadapp')


        let dropdownStyleOne = documentIdDrop('dropdowngamecentre')  // 这是Ul 下的 下拉列表  ， 离开下拉列表后 ， 下拉列表才消失
        let dropdownStyleTwo = documentIdDrop('dropdownlivetelecast') 
        let dropdownStyleThree = documentIdDrop('dropdowncartoon') 
        let dropdownStyleFour = documentIdDrop('dropdowndownloadapp') 


        
    },
    watch:{
        $route:{
            handler:function (newval,oldVal) {
                console.log(1,newval,oldVal,this)
                // this.daDivWacth = false
                // this.daDivWacth = true
                if(this.$route.name === 'login'){
                    this.propData = false
                }
                if(this.$route.name !== 'login'){
                    this.propData = true
                }
            },
            deep:true,
            immediate:true
        }
        
    },
    components:{
        commNav
    }
};
</script>
<style >
    .divClass{
        display: flex;
        /* color: rgb(255, 253, 254); */
        /* background-color: rgb(250, 146, 146); */
        /* border: 0; */
        background-image: url('../../../static/image/backgroundImage.jpeg');
        height: 190px;
        background-size: 50% 100%;
    }
    .headUl{
        min-width: 449px;
        display: flex;
        /* flex: auto; */
        padding-left: 18px;
        margin-top: 25px;
        /* width: 30%; */
        height: 24px;
    }
    .headUl li{
        padding-left: 7px;
        display: flex;
        height: 30px;
        align-items: center;
        /* line-height: 5px; */
    }
    .headUl li a{
        color: #fff;
    }
    .headUl li a span{
        text-align: center;
        /* display: flex; */
        font-size: 16px;
        vertical-align: middle;
    }
    .headUl li a:hover{
        color: rgb(115, 207, 250);
    }
    .headUlTwo{
        min-width: 332px;
        display: flex;
        /* flex: auto; */
        padding-left: 18px;
        margin-top: 25px;
        /* width: 30%; */
        height: 24px;
    }
    .headUlTwo li{
        padding-left: 7px;
        display: flex;
        height: 30px;
        align-items: center;
        /* line-height: 5px; */
    }
    .headUlTwo li a{
        color: #fff;
    }
    .headUlTwo li a span{
        text-align: center;
        /* display: flex; */
        font-size: 16px;
        vertical-align: middle;
    }
    .headUlTwo li a:hover{
        color: rgb(115, 207, 250);
    }
    .ivu-input-icon{
        width: 60px;
        
    }
    

    /* .dropdown {
        position: relative;
        display: inline-block;
        height: 20px; 
    } */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #fff;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        /* padding-top: -50px; */
        margin-top: 440px;
        margin-left: -34px;
        height: 400px;
        width: 400px;
    }
    /* .dropdown:hover .dropdown-content  {
        display: block;
    } */
    .dropdownTriangle{
        position: absolute;
        width:0;height:0; 
    line-height:0; 
    border-width:10px; 
    border-style:solid; 
    border-color: transparent   transparent #fff transparent ; 
        /* padding-top: -40px; */
        /* margin-top: -30px; */
        margin-left: 31px;
    }
    .emptyBox {
        width:72px;
        height:16px;
        display:flex;
        position: absolute;
        margin-left: -5px;
    }
    .dropdownTriangleUl{
        display: flex;
        flex-wrap: wrap;
        /* height: 200px; */
    }
    .dropdownTriangleUl li{
        display: flex;
        /* flex: content; */
        /* height: 150px; */
    }
    .dropdownTriangleUl li:first-child{
        height: 150px;
    }
    .dropdownTriangleUl li img{
        flex-wrap: wrap;
        /* display: inline-block; */
        display: flex;
        margin-top: -50px;
        margin-left: -10px;
        /* width: 240px; */
        height: 150px;
    }
    .dropdownContentLI{
        margin-top: 20px;
    }
    .dropdownTwoLi{
        margin-top: 40px;
    }
    .dropdownTwoLi img{
        width: 200px;
        /* height: 120px; */
    }
</style>