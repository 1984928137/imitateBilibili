<template >
    <div>
        <!-- 舞蹈 -->
        <div>
            <div class="mainDiv">
                <div class="navRouter">
                <ul>
                    <li v-for="(item,index) in navUl" :key="index">
                        <router-link to="">
                            <span>{{item.title}}</span>
                        </router-link>
                    </li>
            </ul>
                </div>
                <div class="carouselDiv">
                    <div>
                <ul>
                    <li>
                        <!-- 轮播图 -->
                        <div class="" >
                            <el-carousel :interval="4000" height="280px"  >
                                <el-carousel-item v-for="(item ,index) in animationCar" :key="index" >
                                    
                                    <router-link :to="item.urls" >
                                    <img :src="item.src" alt="" srcset="" style="width:600px;" >
                                    <!-- <img :src="item.src" alt=""> -->
                                    <!-- <span>{{item}}</span> -->
                                    <!-- <span z-index = 3>sad</span> -->
                                    
                                    </router-link>
                                    
                                </el-carousel-item>
                                
                            </el-carousel>
                        </div>
                    </li>
                </ul> 
                    </div>
                    <!-- <li>sdad</li> -->
                    <ul>
                    <li>
                        <div>
                            <ul class="carouselDivUl">
                                <li v-for="(item, index) in animationNav" :key="index" class="carouselDivUlli">
                                    <div class="carouselDivUlliDiv">
                                        <router-link :to="item.urls">
                                            <img :src="item.src" alt="" srcset="" style="width:170px;height:100px;">
                                        </router-link>
                                    </div>
                                    <div class="carouselDivUlliDiv">
                                        <span>{{item.title}}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            <div>
                <div></div>
                <div>
                    <div>
                        <ul>
                            <li v-for="(item,index) in animationStoOne" :key="index">
                                <router-link :to="item.urls">
                                    <img :src="src" alt="">
                                    <span>{{item.title}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li v-for="(item,index) in animationStoTwo" :key="index">
                                <router-link :to="item.urls">
                                    <img :src="src" alt="">
                                    <span>{{item.title}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="liveLine">
                <div class="liveLineNav">
                    <router-link to="">
                        <span class="liveLineNavSpan">宅舞</span>
                    </router-link>
                    <div>
                    <el-tabs class="tabsDiv" >
                        <el-tab-pane label="新动态" class="" ><div class="liveLineUl">
                        <ul>
                            <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                            <li v-for="(item,index) in ulNum" :key="index" >
                                <div class="userView">
                                    <router-link to="">
                                        <img :src="item.src" alt="" :id="'imgId'+item.id">
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
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
                        <el-tab-pane label="最新投稿"><div>周一</div> </el-tab-pane>
                        
                        
                    </el-tabs>
                    </div>
                    <el-row>
                        
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    
                </div>
                <div class="liveLineNavTwo">
                    
                        <div>
                        <el-tabs class="TabsDiv" >
                            <el-tab-pane label="全部" class="" ><div class="liveLineUlTwo">
                            <ul>
                                <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                                <li v-for="(item,index) in ulNum" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link to="">
                                            <img :src="item.src" alt="" :id="'imgId'+item.id">
                                        </router-link>
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
                            <el-tab-pane label="原创"><div>周一</div> </el-tab-pane>
                            
                            
                        </el-tabs>
                        </div>
                    
                    <el-row>
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    
                </div>
            </div>
            <div class="liveLine">
                <div class="liveLineNav">
                    <router-link to="">
                        <span class="liveLineNavSpan">街舞</span>
                    </router-link>
                    <div>
                    <el-tabs class="tabsDiv" >
                        <el-tab-pane label="新动态" class="" ><div class="liveLineUl">
                        <ul>
                            <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                            <li v-for="(item,index) in ulNum" :key="index" >
                                <div class="userView">
                                    <router-link to="">
                                        <img :src="item.src" alt="" :id="'imgId'+item.id">
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
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
                        <el-tab-pane label="最新投稿"><div>周一</div> </el-tab-pane>
                        
                        
                    </el-tabs>
                    </div>
                    <el-row>
                        
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    
                </div>
                <div class="liveLineNavTwo">
                    <div>
                        <el-tabs class="TabsDiv" >
                            <el-tab-pane label="全部" class="" ><div class="liveLineUlTwo">
                            <ul>
                                <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                                <li v-for="(item,index) in ulNum" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link to="">
                                            <img :src="item.src" alt="" :id="'imgId'+item.id">
                                        </router-link>
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
                            <el-tab-pane label="原创"><div>周一</div> </el-tab-pane>
                            
                            
                        </el-tabs>
                    
                    <el-row>
                        
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    </div>
                </div>
            </div>
            <div class="liveLine">
                <div class="liveLineNav">
                    <router-link to="">
                        <span class="liveLineNavSpan">明星舞蹈</span>
                    </router-link>
                    <div>
                    <el-tabs class="tabsDiv" >
                        <el-tab-pane label="新动态" class="" ><div class="liveLineUl">
                        <ul>
                            <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                            <li v-for="(item,index) in ulNum" :key="index" >
                                <div class="userView">
                                    <router-link to="">
                                        <img :src="item.src" alt="" :id="'imgId'+item.id">
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
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
                        <el-tab-pane label="最新投稿"><div>周一</div> </el-tab-pane>
                        
                        
                    </el-tabs>
                    </div>
                    <el-row>
                        
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    
                </div>
                <div class="liveLineNavTwo">
                    <div>
                        <el-tabs class="TabsDiv" >
                            <el-tab-pane label="全部" class="" ><div class="liveLineUlTwo">
                            <ul>
                                <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                                <li v-for="(item,index) in ulNum" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link to="">
                                            <img :src="item.src" alt="" :id="'imgId'+item.id">
                                        </router-link>
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
                            <el-tab-pane label="原创"><div>周一</div> </el-tab-pane>
                            
                            
                        </el-tabs>
                    
                    <el-row>
                        
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    </div>
                </div>
            </div>
            <div class="liveLine">
                <div class="liveLineNav">
                    <router-link to="">
                        <span class="liveLineNavSpan">中国舞</span>
                    </router-link>
                    <div>
                    <el-tabs class="tabsDiv" >
                        <el-tab-pane label="新动态" class="" ><div class="liveLineUl">
                        <ul>
                            <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                            <li v-for="(item,index) in ulNum" :key="index" >
                                <div class="userView">
                                    <router-link to="">
                                        <img :src="item.src" alt="" :id="'imgId'+item.id">
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
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
                        <el-tab-pane label="最新投稿"><div>周一</div> </el-tab-pane>
                        
                        
                    </el-tabs>
                    </div>
                    <el-row>
                        
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    
                </div>
                <div class="liveLineNavTwo">
                    <div>
                        <el-tabs class="TabsDiv" >
                            <el-tab-pane label="全部" class="" ><div class="liveLineUlTwo">
                            <ul>
                                <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                                <li v-for="(item,index) in ulNum" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link to="">
                                            <img :src="item.src" alt="" :id="'imgId'+item.id">
                                        </router-link>
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
                            <el-tab-pane label="原创"><div>周一</div> </el-tab-pane>
                            
                            
                        </el-tabs>
                    
                    <el-row>
                        
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    </div>
                </div>
            </div>
            <div class="liveLine">
                <div class="liveLineNav">
                    <router-link to="">
                        <span class="liveLineNavSpan">舞蹈综合</span>
                    </router-link>
                    <div>
                    <el-tabs class="tabsDiv" >
                        <el-tab-pane label="新动态" class="" ><div class="liveLineUl">
                        <ul>
                            <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                            <li v-for="(item,index) in ulNum" :key="index" >
                                <div class="userView">
                                    <router-link to="">
                                        <img :src="item.src" alt="" :id="'imgId'+item.id">
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
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
                        <el-tab-pane label="最新投稿"><div>周一</div> </el-tab-pane>
                        
                        
                    </el-tabs>
                    </div>
                    <el-row>
                        
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    
                </div>
                <div class="liveLineNavTwo">
                    <div>
                        <el-tabs class="TabsDiv" >
                            <el-tab-pane label="全部" class="" ><div class="liveLineUlTwo">
                            <ul>
                                <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                                <li v-for="(item,index) in ulNum" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link to="">
                                            <img :src="item.src" alt="" :id="'imgId'+item.id">
                                        </router-link>
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
                            <el-tab-pane label="原创"><div>周一</div> </el-tab-pane>
                            
                            
                        </el-tabs>
                    
                    <el-row>
                        
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    </div>
                </div>
            </div>
            <div class="liveLine">
                <div class="liveLineNav">
                    <router-link to="">
                        <span class="liveLineNavSpan">舞蹈教程</span>
                    </router-link>
                    <div>
                    <el-tabs class="tabsDiv" >
                        <el-tab-pane label="新动态" class="" ><div class="liveLineUl">
                        <ul>
                            <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                            <li v-for="(item,index) in ulNum" :key="index" >
                                <div class="userView">
                                    <router-link to="">
                                        <img :src="item.src" alt="" :id="'imgId'+item.id">
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
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
                        <el-tab-pane label="最新投稿"><div>周一</div> </el-tab-pane>
                        
                        
                    </el-tabs>
                    </div>
                    <el-row>
                        
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    
                </div>
                <div class="liveLineNavTwo">
                    <div>
                        <el-tabs class="TabsDiv" >
                            <el-tab-pane label="全部" class="" ><div class="liveLineUlTwo">
                            <ul>
                                <!-- <li><video src="https://live.bilibili.com/23244237?hotRank=0" height="100" width="200"></video></li> -->
                                <li v-for="(item,index) in ulNum" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link to="">
                                            <img :src="item.src" alt="" :id="'imgId'+item.id">
                                        </router-link>
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
                            <el-tab-pane label="原创"><div>周一</div> </el-tab-pane>
                            
                            
                        </el-tabs>
                    
                    <el-row>
                        
                        <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'dance',
    data() {
        return {
            navUl:[
                {id:0,title:'全部'},
                {id:1,title:'宅舞'},
                {id:2,title:'街舞'},
                {id:3,title:'明星舞蹈'},
                {id:4,title:'中国舞'},
                {id:5,title:'舞蹈综合'},
                {id:6,title:'舞蹈教程'}
            ],
            carouselNum: [
                {src:require('../../assets/blblImgSl/dh5.jpg')},
                {src:'https://img1.baidu.com/it/u=3230716594,4179920638&fm=26&fmt=auto&gp=0.jpg'},
                {src:'https://img1.baidu.com/it/u=3230716594,4179920638&fm=26&fmt=auto&gp=0.jpg'},
                {src:'https://img1.baidu.com/it/u=3230716594,4179920638&fm=26&fmt=auto&gp=0.jpg'},
                {src:'https://img1.baidu.com/it/u=3230716594,4179920638&fm=26&fmt=auto&gp=0.jpg'},
            ],
            ulNum:[
                {id:'One',src:'https://img2.baidu.com/it/u=2110377421,3160366547&fm=26&fmt=auto&gp=0.jpg'},
                {id:'Two',src:'https://img1.baidu.com/it/u=604700311,383557791&fm=26&fmt=auto&gp=0.jpg'},
                {id:'Three',src:'https://img0.baidu.com/it/u=1320263966,3445126010&fm=26&fmt=auto&gp=0.jpg'},
                {id:'Four',src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2a.zol-img.com.cn%2Fproduct%2F102%2F420%2Fcev6JdZ7OLj.jpg&refer=http%3A%2F%2F2a.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633001959&t=04cb4635469a41a7af75141e54f895e8'},
                {id:'Five',src:'https://img2.baidu.com/it/u=1808298959,3955585912&fm=26&fmt=auto&gp=0.jpg'},
                {id:"Six",src:'https://img1.baidu.com/it/u=3271844904,868256332&fm=26&fmt=auto&gp=0.jpg'},
            ],
            animationNav:[],
            animationCar:[],
            animationSto:[],
            animationStoOne:[this.animationSto[0],this.animationSto[1],this.animationSto[2],this.animationSto[3],this.animationSto[4]],
            animationStoTwo:[this.animationSto[5],this.animationSto[6],this.animationSto[7]]
        }
    },
    created() {
        this.$axios.get('/animationNav').then(res =>{
            this.animationNav = res.data
        }).catch(err=>{
            console.log(err)
        })
        this.$axios.get('/animationCar').then(res =>{
            this.animationCar = res.data
        }).catch(err=>{
            console.log(err)
        })
        this.$axios.get('/animationSto').then(res =>{
            this.animationSto = res.data
        }).catch(err=>{
            console.log(err)
        })
    },
}
</script>
<style scoped>
    .mainDiv{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        margin-top: 10px;
        /* max-width: 1100px; */
        min-width: 1100px;
        flex-wrap: wrap;
        /* background-image: url('../../../src/assets/blblImgSl/dh5.jpg'); */
    }
    .navRouter{
        display: flex;
    }
   .navRouter ul {
        display: flex;
        margin-top: 10px;
    }
    .navRouter ul li{
        display: flex;
        margin-left: 40px;
    }
    .navRouter ul li a{
        color: #000;
    }
    .navRouter ul li a:hover{
        color: skyblue;
    }
    .navRouter ul li:first-child a{
        color: skyblue;
        /* margin-left: 0px; */
    }
    .navRouter ul li:first-child{
        margin-left: 0px;
    }
    .carouselDiv {
        /* max-width: 1100px; */
        display: flex;
        min-width: 600px;
        margin-top: 25px;
    }
    .carouselDiv ul{
        width: 600px;
        /* display: flex; */
    }
    .carouselDiv a{
        display: flex;
    }
    .carouselDivUl{
        display: flex;
        max-width: 600px;
        flex-wrap: wrap;
    }
    .carouselDivUlli{
        /* display: flex; */
        max-width: 190px;
        min-width: 190px;
    }
    .carouselDivUlliDiv{
        width: 170px;
    }
    .carouselDivUl li:first-child{
        margin-left: 10px;
    }
    .carouselDivUl li:nth-child(4){
        margin-left: 10px;
    }

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
    .userTitle{
        display: flex;
        font-size: 16px;
        color: rgb(0, 0, 0);
        /* font-weight: 400; */
    }
    .liveLineNavTwo{
        min-height: 500px;
        max-height: 500px;
    }
    .liveLineUlTwo{
        display: flex;
        max-width: 330px;
        flex-wrap: wrap;
    }
    .liveLineUlTwo img{
        width: 90px;
        height: 60px;
        border-radius: 10px;
    }
    .liveLineUlTwo li{
        display: flex;
        margin: 5px 7px;
        flex-wrap: wrap;
        max-width: 330px;
    }
    .liveLineUlTwo ul{
        display: flex;
        flex-wrap: wrap;
    }


    .carouselDiv>>>.el-carousel__indicators--horizontal{  
        /* bottom: 0; */
        /* left: 80%; */
        /* -webkit-transform:none; */
        display: none;
        /* 
            轮播图的指示器的位置
        */
    }
    .carouselDiv>>>.el-carousel__button{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        /* 
            轮播图 指示器 的形状 ，现在为圆形
        */
    }
    .el-button--mini{
        padding: 3px 3px 3px 3px; 
        color: rgb(252, 128, 149);
        /* 
            修改按钮的大小
        */
    }
    .liveLineNav >>> #tab-0{
        padding-left: 10px;
    }
    .liveLineNav >>> #tab-1{
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
        /* background-color: skyblue; */
        border-radius: 20px;
    }
    .tabsDiv>>>.el-tabs__nav-scroll{
        margin-left: 120px;
    }
    .el-row{
        /* margin-left: 80px; */
            position: absolute;
    /* margin: 0 0px 400px 700px; */
    margin-left: 800px;
    margin-top: 5px;
        /* 
            修改按钮的位置
        */
    }
    .liveLineNav >>> .el-tabs__nav-wrap::after{
        background-color: #fff;
        /* 
            修改下划线 的背景颜色
        */
    }
   .liveLineNav >>> .el-tabs__active-bar.is-top{
        /* background-color: ; */
        height: 1px;
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

    .TabsDiv >>> .el-tabs__item.is-active.is-top {
        color: #409EFF;
        /* background-color: skyblue; */
        border-radius: 20px;
    }
    .TabsDiv>>>.el-tabs__nav-scroll{
        margin-left: 100px;
    }
    .liveLineNavTwo >>> .el-tabs__nav-wrap::after{
        background-color: #fff;
        /* 
            修改下划线 的背景颜色
        */
    }
   .liveLineNavTwo >>> .el-tabs__active-bar.is-top{
        /* background-color: ; */
        height: 1px;
        /* 
            修改下划线 的颜色
        */
    }
    .TabsDiv >>>.el-tabs__item{
        padding: 0px 10px;
        height: 30px;
        line-height: 30px;
    }
    .TabsDiv>>>.el-tabs__nav{
        background-color: rgba(229, 226, 226, 0.5);
        border-radius: 20px;
    }
    .TabsDiv >>> .el-tabs__content {
        overflow: hidden;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        /* max-width: 960px; */
        min-width: 330px;
    }
    .liveLineNavTwo >>> .el-row{
        /* margin-left: 80px; */
            position: absolute;
    /* margin: 0 0px 400px 700px; */
    margin-left: 300px;
    margin-top: -630px;
        /* 
            修改按钮的位置
        */
    }
    .liveLineNavTwo >>> .el-tabs__content {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    /* max-width: 960px; */
    min-width: 330px;
    max-height: 500px;
    min-height: 500px;
}
.liveLineNavTwo >>> #tab-0{
        padding-left: 10px;
    }
    .liveLineNavTwo >>> #tab-1{
        padding-right: 10px;

    }
</style>