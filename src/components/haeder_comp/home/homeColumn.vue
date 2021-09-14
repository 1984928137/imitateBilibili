<template >
    <div>
        <div>
            <div class="liveLine">
                <div class="liveLineNav">
                    <!-- <span class="iconfont icon-zhiboTwo :before"></span> -->
                    <router-link to="">
                        <span class="liveLineNavSpan">专栏</span>
                    </router-link>
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
                                    <span class="viewIcon">观看人数图标</span>
                                    <span class="viewNumber">观看人数</span>
                                        <!-- 观看人数 -->
                                </div>
                                <div class="userTab">
                                    <div class="avatarDiv"><el-avatar shape='circle' size='large' src='' fit=''></el-avatar></div>
                                    <div><span class="userName">说到底是德国</span> 
                                        <!-- 用户名称 -->
                                        <span class="userTitle">大概是德国</span>
                                        <!-- 用户标题 -->
                                        <!-- <span>分类</span> -->
                                        <!-- 类型分类 -->
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="TabsDiv">
                    <div class="TabsDivList">
                            <span class="TabsDivSpan">排行榜</span>
                            <el-row>
                                <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                            </el-row>
                    </div>
                            <div>
                                <ul>
                                    <li v-for="item in 7" :key="item" class="animeLi">
                                        
                                        <span class="TabsDivSpanOne">{{item}}</span>
                                        <el-avatar shape='circle' :size='50' src='' fit='' style="min-width: 50px;"></el-avatar>
                                        <!-- <span class="userName"></span>  -->
                                        <!-- 用户名称 -->
                                        <span class="userTitle"></span>
                                        <!-- 用户标题 -->
                                        <!-- <span class="viewNumber"></span> -->
                                        <!-- 观看人数 -->
                                    </li>
                                </ul>
                            </div>
                        
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'homeTechnology',
    data() {
        return {
            ulNum:[
                {id:'One',src:'https://img2.baidu.com/it/u=2110377421,3160366547&fm=26&fmt=auto&gp=0.jpg'},
                {id:'Two',src:'https://img1.baidu.com/it/u=604700311,383557791&fm=26&fmt=auto&gp=0.jpg'},
                {id:'Three',src:'https://img0.baidu.com/it/u=1320263966,3445126010&fm=26&fmt=auto&gp=0.jpg'},
                {id:'Four',src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2a.zol-img.com.cn%2Fproduct%2F102%2F420%2Fcev6JdZ7OLj.jpg&refer=http%3A%2F%2F2a.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633001959&t=04cb4635469a41a7af75141e54f895e8'},
                {id:'Five',src:'https://img2.baidu.com/it/u=1808298959,3955585912&fm=26&fmt=auto&gp=0.jpg'},
                {id:"Six",src:'https://img1.baidu.com/it/u=3271844904,868256332&fm=26&fmt=auto&gp=0.jpg'},
            ],
            activeName: 'second'
        }
    },
    methods: {
        handleClick(a,b){
            console.log(a,b)
        }
    },
}
</script>
<style scoped>
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
        max-width: 1047px;
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
        width: 150px;
        height: 115px;
    }
    .liveLineUl li{
        display: flex;
        margin: 15px 7px;
        flex-wrap: wrap;
        max-width: 400px;
        min-width: 335px;
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
    }
    .viewIcon{
        display: flex;
        position: absolute;
        background-color: rebeccapurple;
        color: #fff;

    }
    .userName{
        display: flex;
    }
    .userTitle{
        display: flex;
    }
    .avatarDiv{
        margin: 5px;
    }
    .TabsDivSpanOne{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        color: red;
        font-size: 17px;
        min-width: 30px;
    }
    .animeLi{
        display: flex;
        align-items: center;
        /* max-height: 40px; */
        margin: 10px 0px;
    }
    .TabsDivSpan{
        font-size: 22px;
        color: rgb(0, 0, 0);
    }
    .TabsDivList{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        max-width: 400px;
    }



    .elTabs{
        width: 320px;
        
    }
    .el-button--mini{
        padding: 3px 3px 3px 3px; 
        /* 
            修改按钮的大小
        */
    }
    .TabsDiv >>> .el-row{
        margin-left: 200px;
        margin-top: 0px;
    }
    .el-row{
        margin-left: 280px;
        /* 
            修改按钮的位置
        */
    }
    .el-tabs__nav-wrap::after{
        background-color: rgb(57, 214, 128);
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