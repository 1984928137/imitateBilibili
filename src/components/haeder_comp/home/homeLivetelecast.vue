<template >
    <div>
            <div class="liveLine">
                <div class="liveLineNav">
                    <span class="iconfont icon-zhiboTwo :before"></span>
                    <router-link to="">
                        <span class="liveLineNavSpan">正在直播</span>
                    </router-link>
                    <span class="liveLineNavSpanTwo">当前一共有 10527 个在线直播</span>
                    <el-row>
                        <el-button icon="el-icon-refresh" size="mini">换一换</el-button>
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    <div class="liveLineUl">
                        <ul>
                            <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                            <li v-for="(item,index) in ulNum" :key="index" >
                                <div class="userView">
                                    <img :src="item.src" alt="" :id="'imgId'+item.id">
                                    <span class="viewIcon iconfont icon-toufangcelve- :before"></span>
                                    <span class="viewNumber">12333</span>
                                        <!-- 观看人数 -->
                                </div>
                                <div class="userTab">
                                    <div class="avatarDiv">
                                        <el-avatar shape='circle' size='large' style="width:40px;height:40px;">
                                            <img :src="require('/Users/chenchs/blblAvatar/'+homeImgAvatarChild[index].userimgUrl)" alt="" style="width:40px;height:40px;">
                                        </el-avatar>
                                    </div>
                                    <div><span class="userName">说到底是德国</span> 
                                        <!-- 用户名称 -->
                                        <span class="userTitle">大概是德国</span>
                                        <!-- 用户标题 -->
                                        <span class="userClassify">分类</span>
                                        <!-- 类型分类 -->
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="TabsDiv">
                    <el-tabs v-model="activeName" @tab-click="handleClick" class="elTabs">
                        <el-tab-pane label="直播排行榜" name="first">
                            <div>
                                <ul>
                                    <li v-for="(item ,index) in homeImgAvatarChild.slice(8)" :key="index" class="livetelecastLi">
                                        <span class="livetelecastSpanOne">{{item.id - 8}}</span>
                                        <el-avatar shape='circle' :size='50'>
                                            <img :src="require('/Users/chenchs/blblAvatar/'+item.userimgUrl)" alt="">
                                        </el-avatar>
                                        <!-- <span class="userName"></span>  -->
                                        <!-- 用户名称 -->
                                        <span class="livetelecastLiSpanTwo"></span>
                                        <!-- 用户标题 -->
                                        <!-- <span class="viewNumber"></span> -->
                                        <!-- 观看人数 -->
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="关注的主播" name="second">配置管理</el-tab-pane>
                        <el-tab-pane label="为您推荐" name="third"><el-carousel :interval="4000" height="280px" >
                <el-carousel-item v-for="item in 3" :key="item" >
                    
                    <router-link to="" >
                    <img src="https://img2.baidu.com/it/u=3764489273,3540837296&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500" alt="" srcset="">
                    <!-- <span>{{item}}</span> -->
                    <!-- <span z-index = 3>sad</span> -->
                    <span class="imgAlt">叫阿数据</span>
                    </router-link>
                    
                </el-carousel-item>
                
            </el-carousel>
            </el-tab-pane>
                    </el-tabs>
                </div>
                
            </div>
        </div>
</template>
<script>

export default {
    name:'homeLivetelecast',
    
    data() {
        return {
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
            activeName: 'second',
            homeImgAvatars:this.homeImgAvatarChild,

            // req: require('/'+homeImgAvatarChild[0].userImgFileURL+'/'+homeImgAvatarChild[0].userimgUrl),
            // img:require('/Users/chenchs/blblAvatar/'+homeImgAvatarChild[0].userimgUrl)
        }
    },
    props:['homeImgAvatarChild'],
    mounted() {
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
      },
      
    },
}
</script>
<style scoped>
/* @import '../../../../static/global_css/a.css'; */
     .liveLine{
        justify-content: center;
        display: flex;
        margin-top: 20px;
        padding-top: 17px;
    }

    .liveLineNav{
        display: flex;
        align-items: center;
        min-width: 750px;
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
        /* background-color: rebeccapurple; */
        color: #fff;
        margin-top: 93px;
        margin-left: 7px;

    }
    
    .userTitle{
        display: flex;
        font-size: 14px;
        /* font-weight: 400; */
    }
    
    .avatarDiv{
        margin: 5px;
    }


    .elTabs{
        width: 320px;
        
    }

    


    .livetelecastLi{
        display: flex;
        align-items: center;
        /* max-height: 40px; */
        margin: 10px 0px;
    }
    .livetelecastSpanOne{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        color: red;
        font-size: 17px;
        min-width: 30px;
    }
    .livetelecastLiSpanTwo{
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


    .el-button--mini{
        padding: 3px 3px 3px 3px; 
        /* 
            修改按钮的大小
        */
    }
    .el-row{
        margin-left: 380px;
        /* 
            修改按钮的位置
        */
    }
    .TabsDiv >>> .el-tabs__nav-wrap::after{
        background-color: #fff;
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
</style>
