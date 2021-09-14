<template >
    <div class="div">
            <div class="liveLine">
                <div class="liveLineNav">
                    <router-link to="">
                        <span class="liveLineNavSpan">番剧</span>
                    </router-link>
                    <div>
                    <el-tabs class="tabsDiv" >
                        <el-tab-pane label="最近更新" class="" ><div class="liveLineUl">
                        <ul>
                            <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                            <li v-for="(item,index) in ulNum" :key="index" >
                                <div class="userView">
                                    <router-link to="">
                                        <img :src="item.src" alt="" :id="'imgId'+item.id">
                                    </router-link>
                                    <span class="viewIcon">观看人数图标</span>
                                    <span class="viewNumber">观看人数</span>
                                        <!-- 观看人数 -->
                                </div>
                                <div class="userTab">
                                   
                                    <div>
                                        <span class="userTitle">大概是德国</span>
                                        <!-- 用户标题 -->
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </div>
                        </el-tab-pane>
                        <el-tab-pane label="周一"><div>周一</div> </el-tab-pane>
                        <el-tab-pane label="周二"><div>周一</div></el-tab-pane>
                        <el-tab-pane label="周三"><div>周一</div></el-tab-pane>
                        <el-tab-pane label="周四">周四</el-tab-pane>
                        <el-tab-pane label="周五">周五</el-tab-pane>
                        <el-tab-pane label="周六">周六</el-tab-pane>
                        <el-tab-pane label="周日">周日</el-tab-pane>
                        
                    </el-tabs>
                    </div>
                    <el-row>
                        <el-button icon="el-icon-refresh" size="mini">换一换</el-button>
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    
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
                                        <span class="animeLiSpanTwo"></span>
                                        <!-- 用户标题 -->
                                        <!-- <span class="viewNumber"></span> -->
                                        <!-- 观看人数 -->
                                    </li>
                                </ul>
                            </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name:'homeAnimeTrue',
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
            activeName: 'second',
        }
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
        /* align-items: center; */
        min-width: 870px;
        max-width: 870px;
        max-height: 435px;
        min-height: 435px;
        /* flex-wrap: wrap; */
    }
    .liveLineNav a{
        display: flex;
    }
    .liveLineNavSpan{
            /* margin-bottom: 2px; */
    font-size: 22px;
    margin-left: 10px;
    color: #000;
    position: absolute;
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
        font-size: 16px;
        color: rgb(0, 0, 0);
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
    .TabsDivSpan{
        font-size: 22px;
        color: rgb(0, 0, 0);
    }
    .TabsDivSpanOne{
        display: flex;
    /* -webkit-box-align: center; */
    /* -ms-flex-align: center; */
    align-items: center;
    /* -webkit-box-pack: center; */
    /* -ms-flex-pack: center; */
    justify-content: center;
    width: 30px;
    color: red;
    font-size: 17px;
    min-width: 30px;
    }
    .TabsDiv{
        min-width: 280px;
    }






    
    .div >>> #tab-0{
        padding-left: 10px;
    }
    .div >>> #tab-7{
        padding-right: 10px;

    }
    .el-tabs__content {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    /* max-width: 960px; */
    min-width: 860px;
}
    .tabsDiv >>> .el-tabs__item.is-active.is-top {
        color: #409EFF;
        background-color: skyblue;
        border-radius: 20px;
    }
    .tabsDiv>>>.el-tabs__nav-scroll{
        margin-left: 80px;
    }
    .el-button--mini{
        padding: 3px 3px 3px 3px; 
        /* 
            修改按钮的大小
        */
    }
    .TabsDiv >>> .el-row{
        margin-left: 260px;
        margin-top: 0px;
    }
    .el-row{
        /* margin-left: 80px; */
            position: absolute;
    /* margin: 0 0px 400px 700px; */
    margin-left: 720px;
    margin-top: 5px;
        /* 
            修改按钮的位置
        */
    }
    .div >>> .el-tabs__nav-wrap::after{
        background-color: #fff;
        /* 
            修改下划线 的背景颜色
        */
    }
   .div >>> .el-tabs__active-bar.is-top{
        background-color: #fff;
        height: 0px;
        /* 
            修改下划线 的颜色
        */
    }
    .tabsDiv >>>.el-tabs__item{
        padding: 0px 10px;
        height: 30px;
        line-height: 30px;
    }
    .tabsDiv>>>.el-tabs__nav{
        background-color: rgba(229, 226, 226, 0.5);
        border-radius: 20px;
    }
    /* .el-tabs__nav-wrap.is-top::after{
        background-color: #fff;
    } */
    .el-tabs__item{
        padding: 0px 6px;
        /* 
            修改 Tbs标签 的左右两边 的间距
        */
    }
    .tabsDiv{
            margin-left: 0px;
    }
    /* .el-tabs__nav-wrap .is-top::after{
        background-color: red;
    } */
</style>