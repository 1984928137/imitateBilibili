<template >
<div>
    <div style="display: flex; justify-content: center; margin-bottom:20px;margin-top:15px;">
        <!-- 主站 -->
        <div class="carouselDiv">
            <el-carousel :interval="4000" height="230px" >
                <el-carousel-item v-for="item in 5" :key="item" >
                    
                    <router-link to="" >
                    <img src="https://img2.baidu.com/it/u=3764489273,3540837296&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500" alt="" srcset="">
                    <!-- <span>{{item}}</span> -->
                    <!-- <span z-index = 3>sad</span> -->
                    <span class="imgAlt">叫阿数据</span>
                    </router-link>
                    
                </el-carousel-item>
                
            </el-carousel>
        </div>
        <div class="ulDiv">
            <ul class="ulDivUl">
                <li v-for="(item, index) in nums" :key="index">
                    <!-- {{item}} -->
                    <router-link to="">
                    <img src="https://img2.baidu.com/it/u=2088667655,1437823662&fm=26&fmt=auto&gp=0.jpg" alt="" :id="'imgDivSpan'+item.num" 
                        style="width:200px;height:110px;display: flex;">
                    
                       <div> <span class="ulDivImgAlt" :id="'ulDivImgAlt'+item.num">动态皮肤</span> 
                        <div class="divSpan" :id="'divSpan'+item.num">
                            <span>充值就免费送史诗级皮肤哦</span>
                        </div>
                       </div>
                    </router-link>
                </li>
            </ul>
            <ul class="ulDivUlTwo">
                <li v-for="(item,index) in numTwo" :key="index">
                    <!-- {{item}} -->
                    <router-link to="">
                    <img src="https://img2.baidu.com/it/u=2088667655,1437823662&fm=26&fmt=auto&gp=0.jpg" alt="" :id="'imgDivSpan'+item.num" 
                        style="width:200px;height:110px;display: flex;">
                        <div> <span class="ulDivImgAlt" :id="'ulDivImgAlt'+item.num">动态皮肤</span> 
                            <div class="divSpan" :id="'divSpan'+item.num">
                            <span>充值就免费送史诗级皮肤哦</span>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>


    <!-- 直播 --> <home-livetelecast :homeImgAvatarChild="homeImgAvatar.slice(0,15)" />
 
    <!-- 动画  --> <home-animation :homeImgAvatarChild="homeImgAvatar.slice(15,30)" />

        <!-- 番剧 --> <home-anime-true />

        <!-- 番剧动态 --> <home-anime :homeImgAvatarChild="homeImgAvatar.slice(45,60)" />

        <!-- 国创 --> <home-countrycreate  />

        <!-- 国创相关 --><home-countrycreate-circum :homeImgAvatarChild="homeImgAvatar.slice(75,90)" />

        <!-- 漫画 --> <home-cartoon  />

        <!-- 音乐 --> <home-music :homeImgAvatarChild="homeImgAvatar.slice(105,120)" />

        <!-- 舞蹈 --> <home-dance :homeImgAvatarChild="homeImgAvatar.slice(120,135)"/>

        <!-- 游戏 --> <home-game :homeImgAvatarChild="homeImgAvatar.slice(135,150)" />

        <!-- 知识 --> <home-knowledge :homeImgAvatarChild="homeImgAvatar.slice(30,45)"  />

        <!-- 课堂 --> <home-class-room />

        <!-- 科技 --> <home-technology :homeImgAvatarChild="homeImgAvatar.slice(90,105)" />

        <!-- 活动 --> <home-activity :homeImgAvatarChild="homeImgAvatar.slice(60,75)" />

        <!-- 汽车 --> <home-car :homeImgAvatarChild="homeImgAvatar.slice(150,165)" />

        <!-- 生活 --> <home-daily :homeImgAvatarChild="homeImgAvatar.slice(165,180)" />

        <!-- 美食 --> <home-cate :homeImgAvatarChild="homeImgAvatar.slice(180,195)" />

        <!-- 动物圈 --> <home-zoosphere :homeImgAvatarChild="homeImgAvatar.slice(195,210)"/>

        <!-- 鬼畜 --> <home-ghostanimal :homeImgAvatarChild="homeImgAvatar.slice(210,225)" />

        <!-- 时尚 --> <home-vogue :homeImgAvatarChild="homeImgAvatar.slice(225,240)" />

        <!-- 资讯 --> <home-information :homeImgAvatarChild="homeImgAvatar.slice(240,255)"/>

        <!-- 娱乐 --> <home-recreation :homeImgAvatarChild="homeImgAvatar.slice(255,270)"/>

        <!-- 专栏 --> <home-column :homeImgAvatarChild="homeImgAvatar.slice(270,285)"/>

        <!-- 电影 --> <home-movie :homeImgAvatarChild="homeImgAvatar.slice(285,300)"/>

        <!-- TV剧 --> <home-t-vdrama :homeImgAvatarChild="homeImgAvatar.slice(300,315)"/>

        <!-- 影视 --> <home-film :homeImgAvatarChild="homeImgAvatar.slice(315,330)"/>

        <!-- 纪录片 --> <home-documentary :homeImgAvatarChild="homeImgAvatar.slice(330,345)"/>
    
                            

    </div>
</template>
<script>


export default {
    name:'home',
    data() {
        return {
            imgs:[
                
            ],
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
            homeData:[],
            homeImgAvatar:[],
            // homeImgAvatarOne:homeImgAvatar.slice(0,14),
            // homeImgAvatarTwo
        }
    },
    created() {
        this.$axios.get('/homeData')
        .then((res)=>{
            this.homeData = res.data
        })
        .catch(err=>{
            console.log(err)
        });
        this.$axios.get('/homeImgAvatar')
        .then((res)=>{
            let arrFrom = res.data
            this.homeImgAvatar = Array.from(arrFrom)
            // this.homeImgAvatar = res.data
            console.log(this.homeImgAvatar)
        })
        .catch(err=>{
            console.log(err)
        });
    },
    mounted() {

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
    components:{
        homeAnime,
        homeCountrycreate,
        homeCountrycreateCircum,
        homeCartoon,
        homeMusic,
        homeDance,
        homeGame,
        homeKnowledge,
        homeClassRoom,
        homeTechnology,
        homeActivity,
        homeCar,
        homeDaily,
        homeCate,
        homeZoosphere,
        homeGhostanimal,
        homeVogue,
        homeInformation,
        homeRecreation,
        homeColumn,
        homeMovie,
        homeTVdrama,
        homeFilm,
        homeDocumentary,
        homeAnimeTrue,
        homeLivetelecast,
        homeAnimation,
    },
}

import homeAnime from './home/homeAnime.vue'
//  homeAnime import './home/homeAnime.vue'
import homeCountrycreate from './home/homeCountrycreate.vue'
import homeCountrycreateCircum from './home/homeCountrycreateCircum.vue'
import homeCartoon from './home/homeCartoon.vue'
import homeMusic from './home/homeMusic.vue'
import homeDance from './home/homeDance.vue'
import homeGame from './home/homeGame.vue'
import homeKnowledge from './home/homeKnowledge.vue'
import homeClassRoom from './home/homeClassRoom.vue'
import homeTechnology from './home/homeTechnology.vue'
import homeActivity from './home/homeActivity.vue'
import homeCar from './home/homeCar.vue'
import homeCate from './home/homeCate.vue'
import homeZoosphere from './home/homeZoosphere.vue'
import homeDaily from './home/homeDaily.vue'
import homeGhostanimal from './home/homeGhostanimal.vue'
import homeVogue from './home/homeVogue.vue'
import homeInformation from './home/homeInformation.vue'
import homeRecreation from './home/homeRecreation.vue'
import homeColumn from './home/homeColumn.vue'
import homeMovie from './home/homeMovie.vue'
import homeTVdrama from './home/homeTVdrama.vue'
import homeFilm from './home/homeFilm.vue'
import homeDocumentary from './home/homeDocumentary.vue'
import homeAnimeTrue from './home/homeAnimeTrue.vue'
import homeLivetelecast from './home/homeLivetelecast.vue'
import homeAnimation from './home/homeAnimation.vue'
</script>
<style >
    .carouselDiv {
        width: 550px;
    }
    .carouselDiv a{
        display: flex;
    }


    .ulDiv{
        display: flex;
        width: 640px;
        flex-wrap: wrap;
        /* left: 10px; */
        /* height: 230px; */
        /* margin-left: 10px; */
    }


    .ulDivUl{
        display: flex;
        /* width: 300px; */
        
        /* height: 100px; */
        /* flex-wrap: wrap; */
    }
    .ulDivUl li{
        display: flex;
        flex-wrap: wrap;
        margin-left: 10px;
        /* margin-top: 5px; */
        margin-bottom: 5px;
    }



    .ulDivUlTwo{
        display: flex;
        /* width: 300px; */
        
        /* height: 100px; */
        /* flex-wrap: wrap; */
    }
    .ulDivUlTwo li{
        display: flex;
        flex-wrap: wrap;
        margin-left: 10px;
        margin-top: 5px;
    }



    .imgAlt{
        position:absolute;
        color: #fff;
        margin-top: 200px;
        margin-left: 13px;
        z-index: 100;
        /* display: flex; */
        /* background-color: brown; */
    }

    .ulDivImgAlt{
        position: absolute;
        margin-top: -20px;
        width: 200px;
        /* height: 100px; */
        /* background-color: brown; */
        /* justify-items: flex-end; */
    }



    .divSpan{
        display: none;
        position: absolute;
        width: 200px;
        height: 92px;
        /* margin-top: 20px; */
        /* background-color: brown; */
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
    
</style>