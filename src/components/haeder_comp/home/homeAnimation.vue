<template >
    <div>
            <div class="liveLine">
                <div class="liveLineNav">
                    <!-- <span class="iconfont icon-zhiboTwo :before"></span> -->
                    <router-link to="">
                        <span class="liveLineNavSpan">动画</span>
                    </router-link>
                    <!-- <span class="liveLineNavSpanTwo">当前一共有 10527 个在线直播</span> -->
                    <el-row>
                        <el-button icon="el-icon-refresh" size="mini">换一换</el-button>
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    <div class="liveLineUl">
                        <ul>
                            <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                            <li v-for="(item,index) in animeImgNum" :key="index" >
                                <div class="userView">
                                    <img :src="item.imgs" alt="" :id="'imgId'+item.id">
                                    <span class="viewIcon " >观看人数图标</span>
                                    <span class="viewNumber">观看人数</span>
                                        <!-- 观看人数 -->
                                </div>
                                <div class="userTab">
                                    <div class="avatarDiv"><el-avatar shape='circle' size='large' src='' fit=''>
                                        <img :src="require('/Users/chenchs/blblAvatar/'+homeImgAvatarChild[index].userimgUrl)" alt="" style="width:40px;height:40px;">
                                        </el-avatar></div>
                                    <div><span class="userName">说到底是德国</span> 
                                        <!-- 用户名称 -->
                                        <span class="userTitle">大概是德国</span>
                                        <!-- 用户标题 -->
                                        <span>分类</span>
                                        <!-- 类型分类 -->
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="TabsDiv">
                    <!-- <el-tabs v-model="activeName" @tab-click="handleClick" class="elTabs">
                        <el-tab-pane label="直播排行榜" name="first"> -->
                            <div class="TabsDivList">
                                <span style="font-size: 22px;color: #000;">排行榜</span>
                                <el-row style="margin-left: 150px;">
                                <!-- <el-button icon="el-icon-refresh" size="mini">换一换</el-button> -->
                                <el-button   size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                            </el-row>
                            </div>
                        <ul>
                            <li v-for="(item,index) in animeNum " :key="index" class="animeLi">
                                <span class="animeLiSpanOne">{{item.id}}</span>
                                <el-avatar shape='circle' :size='50'  fit='' style="min-width:50px;">
                                    <img :src="require('/Users/chenchs/blblAvatar/'+homeImgAvatarChild[item.id+7].userimgUrl)" alt="">
                                </el-avatar>
                                <!-- <span class="userName"></span>  -->
                                <!-- 用户名称 -->
                                <span class="animeLiSpanTwo">{{item.title}}</span>
                                <!-- 用户标题 -->
                                <!-- <span class="viewNumber"></span> -->
                                <!-- 观看人数 -->
                            </li>
                        </ul>
                </div>
                        <!-- </el-tab-pane>
                        <el-tab-pane label="关注的主播" name="second">配置管理</el-tab-pane>
                        <el-tab-pane label="为您推荐" name="third"><el-carousel :interval="4000" height="280px" >
                            <el-carousel-item v-for="item in 3" :key="item" >
                    
                            <router-link to="" >
                            <img src="https://img2.baidu.com/it/u=3764489273,3540837296&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500" alt="" srcset="">
                            <span>{{item}}</span>
                            <span z-index = 3>sad</span>
                            <span class="imgAlt">叫阿数据</span>
                            </router-link>
                            
                        </el-carousel-item>
                        
                        </el-carousel>
                        </el-tab-pane>
                    </el-tabs> --> 
            </div>
           
        </div>
</template>
<script>
export default {
    name:'homeAnimation',
    data() {
        return {
            nums:[
                {num:'One'},
                {num:'Two'},
                {num:'Three'}
            ],
            numTwo:[
                {num:'Four'},
                {num:'Five'},
                {num:'Six'}
            ],
            test:'',
            datas:'',
            ulNum:[
                {id:'One',src:'https://img2.baidu.com/it/u=2110377421,3160366547&fm=26&fmt=auto&gp=0.jpg'},
                {id:'Two',src:'https://img1.baidu.com/it/u=604700311,383557791&fm=26&fmt=auto&gp=0.jpg'},
                {id:'Three',src:'https://img0.baidu.com/it/u=1320263966,3445126010&fm=26&fmt=auto&gp=0.jpg'},
                {id:'Four',src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2a.zol-img.com.cn%2Fproduct%2F102%2F420%2Fcev6JdZ7OLj.jpg&refer=http%3A%2F%2F2a.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633001959&t=04cb4635469a41a7af75141e54f895e8'},
                {id:'Five',src:'https://img2.baidu.com/it/u=1808298959,3955585912&fm=26&fmt=auto&gp=0.jpg'},
                {id:"Six",src:'https://img1.baidu.com/it/u=3271844904,868256332&fm=26&fmt=auto&gp=0.jpg'},
            ],
            animeImgNum:[
                {id:0,imgs:require('../../../assets/blblImgSl/dh1.jpg')},
                {id:1,imgs:require('../../../assets/blblImgSl/dh2.jpg')},
                {id:2,imgs:require('../../../assets/blblImgSl/dh3.jpg')},
                {id:3,imgs:require('../../../assets/blblImgSl/dh3.jpg')},
                {id:4,imgs:require('../../../assets/blblImgSl/dh5.jpg')},
                {id:5,imgs:require('../../../assets/blblImgSl/dh6.jpg')},
                {id:6,imgs:require('../../../assets/blblImgSl/dh7.jpg')},
                {id:7,imgs:require('../../../assets/blblImgSl/dh8.png')}
            ],
            activeName: 'second',
            homeData:[],
            homeImgAvatar:[],
            animeNum:[
                {id:1,title:'【手书】我睡不着！我睡不着!我睡不着!我睡不着!我睡不着!我睡不着!',},
                {id:2,title:' 听君一席话，全是废话！！',},
                {id:3,title:'《明日方舟》全新动画MV - 来袭',},
                {id:4,title:'【人间打气筒】Bar Bar Bar',},
                {id:5,title:' 毒书不能第二遍',},
                {id:6,title:' 非同一般的焦气',},
                {id:7,title:'【吐槽】啊卡力。。。',},
            ],

        }
    },
     mounted() {
        let dmt = document.getElementById('ulDivImgAltOne')
        console.log(dmt)

        let dmt1 = document.getElementById('divSpanOne')
        console.log(dmt1)

        function dmtId(divSpanName,spanName) {
            let dmt = document.getElementById(divSpanName)
            let dmtTwo = document.getElementById(spanName)
            console.log(dmt)
            
            dmtTwo.onmouseover = ()=>{
                dmtTwo.style.marginTop = '-110px'
                dmt.style.display = 'block'
                dmt.style.marginTop = '-90px'
            }
            dmtTwo.onmouseout = ()=>{
                dmtTwo.style.marginTop = '-20px'
                dmt.style.display = 'none'
                dmt.style.marginTop = '-20px'
            }

            dmt.onmouseover=function () {
                dmt.style.marginTop = '-90px'
                dmt.style.display = 'block'
                dmtTwo.style.marginTop = '-110px'
            }
            dmt.onmouseout = ()=>{
                dmt.style.marginTop = '-20px'
                dmt.style.display = 'none'
                dmtTwo.style.marginTop = '-20px'
            }
        }


        function imgDivSpan(imgName,divSpanName,spanName) {
            let imgNames = document.getElementById(imgName)
            let divSpanNames = document.getElementById(divSpanName)
            let spanNames = document.getElementById(spanName)
            imgNames.onmouseover = ()=>{
                spanNames.style.marginTop = '-110px'
                divSpanNames.style.marginTop = '-80px'
                divSpanNames.style.display = 'block'
            }
            imgNames.onmouseout = ()=>{
                spanNames.style.marginTop = '-20px'
                divSpanNames.style.marginTop = '-20px'
                divSpanNames.style.display = 'none'
            }
        }



        let ulDivSpanOne  =  dmtId('divSpanOne','ulDivImgAltOne') // 这里是 鼠标触碰后，弹出 类似  上拉列表的东西
        let ulDivSpanTwo  =  dmtId('divSpanTwo','ulDivImgAltTwo')
        let ulDivSpanThree   =  dmtId('divSpanThree','ulDivImgAltThree')
        let ulDivSpanFour  = dmtId('divSpanFour','ulDivImgAltFour')
        let ulDivSpanFive  = dmtId('divSpanFive','ulDivImgAltFive')
        let ulDivSpanSix  = dmtId('divSpanSix','ulDivImgAltSix')


        let imgDivSpanOne = imgDivSpan('imgDivSpanOne','divSpanOne','ulDivImgAltOne')
        let imgDivSpanTwo = imgDivSpan('imgDivSpanTwo','divSpanTwo','ulDivImgAltTwo')
        let imgDivSpanThree = imgDivSpan('imgDivSpanThree','divSpanThree','ulDivImgAltThree')
        let imgDivSpanFour = imgDivSpan('imgDivSpanFour','divSpanFour','ulDivImgAltFour')
        let imgDivSpanFive = imgDivSpan('imgDivSpanFive','divSpanFive','ulDivImgAltFive')
        let imgDivSpanSix  = imgDivSpan('imgDivSpanSix','divSpanSix','ulDivImgAltSix')
        





        function imgId(name, newUrl,oldUrl) {
            let dmt  =  document.getElementById(name)

            dmt.onmouseover = ()=>{
                dmt.src = newUrl
            }
            dmt.onmouseout = ()=>{
                dmt.src = oldUrl
            }
        }
        
        let imgIdOne = imgId('imgIdOne','https://img1.baidu.com/it/u=3404591146,2459137180&fm=26&fmt=auto&gp=0.jpg','https://img2.baidu.com/it/u=2110377421,3160366547&fm=26&fmt=auto&gp=0.jpg')
        let imgIdTwo = imgId('imgIdTwo','https://img1.baidu.com/it/u=1263399024,2187064681&fm=26&fmt=auto&gp=0.jpg','https://img1.baidu.com/it/u=604700311,383557791&fm=26&fmt=auto&gp=0.jpg')
        let imgIdThree = imgId('imgIdThree','https://img2.baidu.com/it/u=251338100,3343616559&fm=26&fmt=auto&gp=0.jpg','https://img0.baidu.com/it/u=1320263966,3445126010&fm=26&fmt=auto&gp=0.jpg')
        let imgIdFour  = imgId('imgIdFour','https://img0.baidu.com/it/u=3617738099,68995423&fm=26&fmt=auto&gp=0.jpg','https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2a.zol-img.com.cn%2Fproduct%2F102%2F420%2Fcev6JdZ7OLj.jpg&refer=http%3A%2F%2F2a.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633001959&t=04cb4635469a41a7af75141e54f895e8')
        let imgIdFive  = imgId('imgIdFive','https://img2.baidu.com/it/u=2056161456,932495633&fm=26&fmt=auto&gp=0.jpg','https://img2.baidu.com/it/u=1808298959,3955585912&fm=26&fmt=auto&gp=0.jpg')
        let imgIdSix = imgId('imgIdSix','https://img0.baidu.com/it/u=3352378438,1062893664&fm=26&fmt=auto&gp=0.jpg','https://img1.baidu.com/it/u=3271844904,868256332&fm=26&fmt=auto&gp=0.jpg')


        
    },
    props:['homeImgAvatarChild'],
    methods: {
        subPost(dataes){
            console.log(dataes)
            this.$axios.post('/post',{
                datas:this.test
            }).then(res=>{
                this.datas = res.data
            }).catch(err=>{
                console.log(err)
            })
            
        },
        handleClick(tab, event) {
        console.log(tab, event);
      }
    },
}
</script>
<style scoped>
    .TabsDiv{
        max-width: 280px;
    }

    .liveLine{
        justify-content: center;
        display: flex;
        margin-top: 20px;
        padding-top: 17px;
    }

    .liveLineNav{
        display: flex;
        align-items: center;
        min-width: 870px;
        max-width: 870px;
        flex-wrap: wrap;
    }
    .liveLineNav a{
        display: flex;
    }
    .liveLineNavSpan{
            margin-top: 3px;
    font-size: 22px;
    margin-left: 10px;
    color: #000;
    }
    .liveLineNavSpanTwo{
        margin-left: 25px;
        font-size: 10px;
        margin-top: 4px;
    }

    .liveLineUl{
        display: flex;
        /* max-width: 200px; */
        flex-wrap: wrap;
    }
    .liveLineUl img{
        width: 200px;
        height: 120px;
    }
    .liveLineUl li{
        display: flex;
        margin: 15px 7px;
        flex-wrap: wrap;
        max-width: 200px;
    }
    .liveLineUl ul{
        display: flex;
        flex-wrap: wrap;
    }



    .userView{
        display: flex;
    }
    .userTab{
        display: flex;
        flex-wrap: wrap;
        max-width: 200px;
    }
    .TabsDivList{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        max-width: 400px;
    }
    .viewNumber{
            display: flex;
    position: absolute;
    background-color: red;
    color: #fff;
    margin-left: 17px;
    }
    .viewIcon{
        display: flex;
        position: absolute;
        background-color: rebeccapurple;
        color: #fff;

    }
    .userName{
        display: flex;
        font-size: 16px;
        color: #000;
    }
    .userTitle{
        display: flex;
        font-size: 14px;
        /* font-weight: 400; */
    }
    .userClassify{
        display: flex;
        font-size: 13px;
        font-weight: 300;
    }
    .avatarDiv{
        margin: 5px;
    }


    .elTabs{
        width: 320px;
        
    }

    .TabsDivListButton{
        margin-left: 0;
    }


    .animeLi{
        display: flex;
        align-items: center;
        /* max-height: 40px; */
        margin: 10px 0px;
    }
    .animeLiSpanOne{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        color: red;
        font-size: 17px;
        min-width: 30px;
    }
    .animeLiSpanTwo{
        /* display: flex; */
        font-size: 14px;
        /* font-weight: 400; */
        align-items: center;
        margin-left: 5px;
        /* white-space: nowrap; */
        overflow:hidden; 

        text-overflow:ellipsis;

        display:-webkit-box; 

        -webkit-box-orient:vertical;

        -webkit-line-clamp:2;
        max-height: 40px;
        color: #000;

    }



    .el-carousel__indicators--horizontal{  
        bottom: 0;
        left: 80%;
        -webkit-transform:none;
        /* 
            轮播图的指示器的位置
        */
    }
    .el-carousel__button{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        /* 
            轮播图 指示器 的形状 ，现在为圆形
        */
    }
    .el-button--mini{
        padding: 3px 3px 3px 3px; 
        /* 
            修改按钮的大小
        */
    }
    .el-row{
        margin-left: 280px;
        /* 
            修改按钮的位置
        */
    }
    .el-tabs__nav-wrap::after{
        background-color: rgb(117, 29, 29);
        /* 
            修改下划线 的背景颜色
        */
    }
    .el-tabs__item{
        padding: 0px 6px;
        /* 
            修改 Tbs标签 的左右两边 的间距
        */
    }
    /* .el-tabs__nav-wrap .is-top::after{
        background-color: red;
    } */
</style>