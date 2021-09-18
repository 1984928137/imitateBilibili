<template >
    <div>
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
            <div style="display: flex;justify-content: center;">
                <div>
                    <span>前方高能</span>
                </div>
                <div class="totalDiv">
                    <div class="Sto">
                        <ul class="stoDivUl">
                            <li v-for="(item,index) in animationSto" :key="index">
                                <router-link :to="item.urls">
                                    <img :src="item.src" alt="" style="width:200px;heigth:100px;">
                                    <span>{{item.title}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="stoOne">
                        <ul class="stoOneDivUl">
                            <li v-for="(item,index) in animationStoOne" :key="index">
                                <router-link :to="item.urls">
                                    <img :src="item.src" alt="" style="width:100px;heigth:60px;">
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
                        <span class="liveLineNavSpan">MAD-AMV</span>
                    </router-link>
                    <div>
                    <el-tabs class="tabsDiv" >
                        <el-tab-pane label="新动态" class="" ><div class="liveLineUl">
                        <ul>
                            
                            <li v-for="(item,index) in animationMadAmv" :key="index" >
                                <div class="userView">
                                    <router-link :to="item.urls">
                                        <img :src="item.src" alt="" >
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
                                        <!-- 观看人数 -->
                                </div>
                                <div class="userTab">
                                   
                                    <div>
                                        <span class="userTitle">{{item.title}}</span>
                                        <!-- 用户标题 -->
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </div>
                        </el-tab-pane>
                        <el-tab-pane label="最新投稿"><div class="liveLineUl">
                        <ul>
                            
                            <li v-for="(item,index) in animationMadAmvTwo" :key="index" >
                                <div class="userView">
                                    <router-link :to="item.urls">
                                        <img :src="item.src" alt="" >
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
                                        <!-- 观看人数 -->
                                </div>
                                <div class="userTab">
                                   
                                    <div>
                                        <span class="userTitle">{{item.title}}</span>
                                        <!-- 用户标题 -->
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </div></el-tab-pane>
                        
                        
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
                               
                                <li v-for="(item,index) in animationMadAmvPhb" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link :to="item.urls">
                                            <img :src="item.src" alt="" >
                                        </router-link>
                                            <!-- 观看人数 -->
                                    </div>
                                    <div class="userTab">
                                    
                                        <div>
                                            <span class="userTitle">{{item.title}}</span>
                                            <!-- 用户标题 -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            </div>
                            </el-tab-pane>
                            <el-tab-pane label="原创"><div class="liveLineUlTwo">
                            <ul>
                               
                                <li v-for="(item,index) in animationMadAmvPhb" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link :to="item.urls">
                                            <img :src="item.src" alt="" >
                                        </router-link>
                                            <!-- 观看人数 -->
                                    </div>
                                    <div class="userTab">
                                    
                                        <div>
                                            <span class="userTitle">{{item.title}}</span>
                                            <!-- 用户标题 -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            </div></el-tab-pane>
                            
                            
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
                        <span class="liveLineNavSpan">MMD-3D</span>
                    </router-link>
                    <div>
                    <el-tabs class="tabsDiv" >
                        <el-tab-pane label="新动态" class="" ><div class="liveLineUl">
                        <ul>
                            
                            <li v-for="(item,index) in animationMadThreeD" :key="index" >
                                <div class="userView">
                                    <router-link :to="item.urls">
                                        <img :src="item.src" alt="" >
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
                                        <!-- 观看人数 -->
                                </div>
                                <div class="userTab">
                                   
                                    <div>
                                        <span class="userTitle">{{item.title}}</span>
                                        <!-- 用户标题 -->
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </div>
                        </el-tab-pane>
                        <el-tab-pane label="最新投稿"><div class="liveLineUl">
                        <ul>
                            
                            <li v-for="(item,index) in animationMadThreeDTwo" :key="index" >
                                <div class="userView">
                                    <router-link :to="item.urls">
                                        <img :src="item.src" alt="" >
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
                                        <!-- 观看人数 -->
                                </div>
                                <div class="userTab">
                                   
                                    <div>
                                        <span class="userTitle">{{item.title}}</span>
                                        <!-- 用户标题 -->
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </div></el-tab-pane>
                        
                        
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
                                
                                <li v-for="(item,index) in animationMadThreeDPhb" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link :to="item.urls">
                                            <img :src="item.src" alt="" >
                                        </router-link>
                                            <!-- 观看人数 -->
                                    </div>
                                    <div class="userTab">
                                    
                                        <div>
                                            <span class="userTitle">{{item.title}}</span>
                                            <!-- 用户标题 -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            </div>
                            </el-tab-pane>
                            <el-tab-pane label="原创"><div class="liveLineUlTwo">
                            <ul>
                                
                                <li v-for="(item,index) in animationMadThreeDPhb" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link :to="item.urls">
                                            <img :src="item.src" alt="" >
                                        </router-link>
                                            <!-- 观看人数 -->
                                    </div>
                                    <div class="userTab">
                                    
                                        <div>
                                            <span class="userTitle">{{item.title}}</span>
                                            <!-- 用户标题 -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            </div></el-tab-pane>
                            
                            
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
                        <span class="liveLineNavSpan">短片-手书-配音</span>
                    </router-link>
                    <div>
                    <el-tabs class="tabsDiv" >
                        <el-tab-pane label="新动态" class="" ><div class="liveLineUl">
                        <ul>
                            
                            <li v-for="(item,index) in ulNum" :key="index" >
                                <div class="userView">
                                    <router-link to="">
                                        <img :src="item.src" alt="" >
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
                                        <!-- 观看人数 -->
                                </div>
                                <div class="userTab">
                                   
                                    <div>
                                        <span class="userTitle">{{item.title}}</span>
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
                                
                                <li v-for="(item,index) in ulNum" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link to="">
                                            <img :src="item.src" alt="" >
                                        </router-link>
                                            <!-- 观看人数 -->
                                    </div>
                                    <div class="userTab">
                                    
                                        <div>
                                            <span class="userTitle">{{item.title}}</span>
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
                        <span class="liveLineNavSpan">手办-模玩</span>
                    </router-link>
                    <div>
                    <el-tabs class="tabsDiv" >
                        <el-tab-pane label="新动态" class="" ><div class="liveLineUl">
                        <ul>
                            
                            <li v-for="(item,index) in ulNum" :key="index" >
                                <div class="userView">
                                    <router-link to="">
                                        <img :src="item.src" alt="" >
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
                                        <!-- 观看人数 -->
                                </div>
                                <div class="userTab">
                                   
                                    <div>
                                        <span class="userTitle">{{item.title}}</span>
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
                                
                                <li v-for="(item,index) in ulNum" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link to="">
                                            <img :src="item.src" alt="" >
                                        </router-link>
                                            <!-- 观看人数 -->
                                    </div>
                                    <div class="userTab">
                                    
                                        <div>
                                            <span class="userTitle">{{item.title}}</span>
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
                        <span class="liveLineNavSpan">特摄</span>
                    </router-link>
                    <div>
                    <el-tabs class="tabsDiv" >
                        <el-tab-pane label="新动态" class="" ><div class="liveLineUl">
                        <ul>
                            
                            <li v-for="(item,index) in ulNum" :key="index" >
                                <div class="userView">
                                    <router-link to="">
                                        <img :src="item.src" alt="" >
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
                                        <!-- 观看人数 -->
                                </div>
                                <div class="userTab">
                                   
                                    <div>
                                        <span class="userTitle">{{item.title}}</span>
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
                                
                                <li v-for="(item,index) in ulNum" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link to="">
                                            <img :src="item.src" alt="" >
                                        </router-link>
                                            <!-- 观看人数 -->
                                    </div>
                                    <div class="userTab">
                                    
                                        <div>
                                            <span class="userTitle">{{item.title}}</span>
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
                        <span class="liveLineNavSpan">综合</span>
                    </router-link>
                    <div>
                    <el-tabs class="tabsDiv" >
                        <el-tab-pane label="新动态" class="" ><div class="liveLineUl">
                        <ul>
                            
                            <li v-for="(item,index) in ulNum" :key="index" >
                                <div class="userView">
                                    <router-link to="">
                                        <img :src="item.src" alt="" >
                                    </router-link>
                                    <!-- <span class="viewIcon">观看人数图标</span> -->
                                    <!-- <span class="viewNumber">观看人数</span> -->
                                        <!-- 观看人数 -->
                                </div>
                                <div class="userTab">
                                   
                                    <div>
                                        <span class="userTitle">{{item.title}}</span>
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
                                
                                <li v-for="(item,index) in ulNum" :key="index" >
                                    <span>{{index+1}}</span>
                                    <div class="userView">
                                        <router-link to="">
                                            <img :src="item.src" alt="" >
                                        </router-link>
                                            <!-- 观看人数 -->
                                    </div>
                                    <div class="userTab">
                                    
                                        <div>
                                            <span class="userTitle">{{item.title}}</span>
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
    name:'animation',
    data() {
        return {
            navUl:[
                {id:0,title:'全部'},
                {id:1,title:'MAD-AMV'},
                {id:2,title:'MMD-3D'},
                {id:3,title:'短片-手书-配音'},
                {id:4,title:'手办-模玩'},
                {id:5,title:'特摄'},
                {id:6,title:'综合'}
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
            animationStoOne:[],
            animationMadAmv:[],
            animationMadAmvPhb:[],
            animationMadAmvTwo:[],
            animationMadThreeD:[],
            animationMadThreeDTwo:[],
            animationMadThreeDPhb:[],
            // animationStoTwo:[this.animationSto[5],this.animationSto[6],this.animationSto[7]]
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
            console.log(res.data)
            let num = res.data
            this.animationSto = num.slice(0,5)
            console.log(this.animationSto)
            this.animationStoOne = num.slice(5)
            console.log(this.animationStoOne)
        }).catch(err=>{
            console.log(err)
        })
        this.$axios.get('/animationMadAmv').then(res =>{
            this.animationMadAmv = res.data
        }).catch(err=>{
            console.log(err)
        })
        this.$axios.get('/animationMadAmvPhb').then(res =>{
            this.animationMadAmvPhb = res.data
        }).catch(err=>{
            console.log(err)
        })
        this.$axios.get('/animationMadAmvTwo').then(res =>{
            this.animationMadAmvTwo = res.data
        }).catch(err=>{
            console.log(err)
        })
        this.$axios.get('/animationMadThreeD').then(res =>{
            this.animationMadThreeD = res.data
        }).catch(err=>{
            console.log(err)
        })
        this.$axios.get('/animationMadThreeDTwo').then(res =>{
            this.animationMadThreeDTwo = res.data
        }).catch(err=>{
            console.log(err)
        })
        this.$axios.get('/animationMadThreeDPhb').then(res =>{
            this.animationMadThreeDPhb = res.data
        }).catch(err=>{
            console.log(err)
        })
    },
}
</script>
<style scoped>
    @import url('../../../static/global_css/navGlobal.css');
</style>