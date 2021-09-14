<template >
    <div>
        <!-- 国创 -->
         <div>
    <div class="mainDiv">
        <div>
        
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
            <ul>
                <li>
                    <!-- 轮播图 -->
                    <div class="" >
                        <el-carousel :interval="4000" height="400px" @change="(val,valTwo)=>{changes(val,valTwo)}" >
                            <el-carousel-item v-for="(item ,index) in carouselNum" :key="index" name >
                                
                                <router-link to="" >
                                <img :id="'carouselImgId'+index" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg10-build.jiwu.com%2Falbum%2Fmanual%2F2021%2F07%2F31%2F162516730630.jpg&refer=http%3A%2F%2Fimg10-build.jiwu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633775631&t=0c77eff2b3e5929042541535df556584" alt="" srcset="" style="width:1100px;" :item='index'>
                                <!-- <span>{{item}}</span> -->
                                <!-- <span z-index = 3>sad</span> -->
                                
                                </router-link>
                                
                            </el-carousel-item>
                            
                        </el-carousel>
                    </div>
                </li>
                <!-- <li>sdad</li> -->
            </ul>
            </div>
            <div>
                <div class="divButtom">
                    <!-- 文本 -->
                    <span id="liSpanOne" style="display: block;">全部11</span>
                    <span id="liSpanTwo" style="display: none;">全部22</span>
                    <span id="liSpanThree" style="display: none;">全部33</span>
                    <span id="liSpanFour" style="display: none;">全部44</span>
                    <span id="liSpanFive" style="display: none;">全部55</span>
                    
                </div>
                <div class="imgSmallDiv">
                    <!-- 轮播图指示器图像 -->
                    <ul>
                        <li v-for="item in 5" :key="item">
                            <img src="../../../src/assets/blblImgSl/zb3.jpg" alt="" class="imgClass">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="animeUpdataDiv">
                <div class="animeUpdataDivNav">
                    <span>最近更新</span>
                    <el-row>
                        <el-button  size="mini">新番时间表<i class="el-icon-arrow-right"></i></el-button>
                    </el-row>
                    <span>排行榜</span>
                    <el-button  size="mini">更多<i class="el-icon-arrow-right"></i></el-button>
                </div>
                <div style="display: flex;">
                    <ul class="animeUpdataDivul">
                        <li v-for="(item ,index) in datas" :key="index">
                            <div class="animeUpdataDivUlLiDiv">
                                <div>
                                    <router-link to="">
                                        <img src="item.square_cover" alt="">
                                    </router-link>
                                </div>
                                <div>
                                    <router-link to="">
                                        <span>{{item.title}}</span>
                                    </router-link>
                                    <div>
                                        <span>更新至</span>
                                        <router-link to="">
                                            <span>{{item.bgmcount}}话</span>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                    <div class="animeUpdataDivListDiv">
                    <ul>
                        <li v-for="(item,index) in animeUpdataDivUlLiData[0]" :key="index">
                            <div>
                                <router-link to="">
                                    <img src="" alt="">
                                </router-link>
                            </div>
                            <div>
                                <router-link to="">
                                    <span>{{item.title}}</span>
                                </router-link>
                                <span>{{item.updata}}</span>
                                <router-link to="">
                                    <span>{{item.setTime}}</span>
                                </router-link>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
                
            </div>
            <div class="contentAllDiv" id="contentAllDiv">
               <el-row>
                    <el-button  size="mini" style="color: #000">全部 <i class="el-icon-d-arrow-left" style="transform:rotate(-90deg);color: #000;"></i></el-button>
                </el-row> 
            </div>
            <div class="filterList">
                <div >
                    <div>
                        <router-link to="">
                            <span>热播</span>
                        </router-link>
                        <el-button  size="mini" style="color: #000">全部 <i class="el-icon-d-arrow-left" style="transform:rotate(-180deg);color: #000;"></i></el-button>
                    </div>
                    <div class="filterListHot">
                        <ul>
                            <li v-for="(item,index) in filterList[0]" :key="index" >
                                <router-link to="">
                                    <span>{{item.title}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="filterListTime">
                    <div>
                        <router-link to="">
                            <span>时间</span>
                        </router-link>
                        <el-button  size="mini" style="color: #000">全部 <i class="el-icon-d-arrow-left" style="transform:rotate(-180deg);color: #000;"></i></el-button>
                    </div>
                    <div>
                        <ul>
                            <li v-for="(item,index) in filterList[1]" :key="index">
                                <router-link to="">
                                    <span>{{item.title}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="filterListStyle">
                    <div>
                        <router-link to="">
                            <span>风格</span>
                        </router-link>
                        <el-button  size="mini" style="color: #000">全部 <i class="el-icon-d-arrow-left" style="transform:rotate(-180deg);color: #000;"></i></el-button>
                    </div>
                    <div>
                        <ul>
                            <li v-for="(item,index) in filterList[2]" :key="index">
                                <router-link to="">
                                    <span>{{item.title}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="filterListSearch">
                    <div>
                        <router-link to="">
                            <span>热搜</span>
                        </router-link>
                        <el-button  size="mini" style="color: #000">全部 <i class="el-icon-d-arrow-left" style="transform:rotate(-180deg);color: #000;"></i></el-button>
                    </div>
                    <div>
                        <ul>
                            <li v-for="(item,index) in filterList[3]" :key="index">
                                <router-link to="">
                                    {{item.title}}<span>话</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <span>编辑精选</span>
                        <el-button  size="mini" style="color: #000" icon='el-icon-refresh'>换一换 </el-button>
                    </div>
                    <div>
                        <div>
                            <router-link to="">
                                <img src="" alt="">
                                <div>
                                    <span>title</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <span>话题精选</span>
                    </div>
                    <div style="width:200px;">
                        <el-carousel :interval="4000" height="100px" @change="(val,valTwo)=>{changes(val,valTwo)}" >
                            <el-carousel-item v-for="(item ,index) in carouselNum" :key="index" name >
                                
                                <router-link to="" >
                                <img :id="'carouselImgId'+index" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg10-build.jiwu.com%2Falbum%2Fmanual%2F2021%2F07%2F31%2F162516730630.jpg&refer=http%3A%2F%2Fimg10-build.jiwu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633775631&t=0c77eff2b3e5929042541535df556584" alt="" srcset="" style="width:200px;" :item='index'>
                                <!-- <span>{{item}}</span> -->
                                <!-- <span z-index = 3>sad</span> -->
                                
                                </router-link>
                                
                            </el-carousel-item>
                            
                        </el-carousel>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <div>
                            <span>连载动画</span>
                        </div>
                        <div>
                            <div>
                                <span>新动态</span>
                            </div>
                            <div>
                                <span>
                                    最新投稿
                                </span>
                            </div>
                            <div>
                                <el-button  size="mini" style="color: #000" icon='el-icon-arrow-right'>更多</el-button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div>
                                    <router-link to="">
                                        <img src="" alt="">
                                        <span>长沙市</span>
                                    </router-link>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <span>热门</span>
                        <div>
                            <el-button  size="mini" style="color: #000" icon='el-icon-arrow-right'>三日</el-button>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div>
                                    <div>
                                        <span></span>
                                    </div>
                                    <div>
                                        <router-link to="">
                                            <div>
                                                <img src="" alt="">
                                            <!-- 前面3行才有图片 后面没有 -->
                                            </div>
                                            <span>title</span>
                                            <span>person</span>
                                        </router-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <div>
                            <span>完结动画</span>
                        </div>
                        <div>
                            <div>
                                <span>新动态</span>
                            </div>
                            <div>
                                <span>
                                    最新投稿
                                </span>
                            </div>
                            <div>
                                <el-button  size="mini" style="color: #000" icon='el-icon-arrow-right'>更多</el-button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div>
                                    <router-link to="">
                                        <img src="" alt="">
                                        <span>长沙市</span>
                                    </router-link>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <span>热门</span>
                        <div>
                            <el-button  size="mini" style="color: #000" icon='el-icon-arrow-right'>三日</el-button>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div>
                                    <div>
                                        <span></span>
                                    </div>
                                    <div>
                                        <router-link to="">
                                            <div>
                                                <img src="" alt="">
                                            <!-- 前面3行才有图片 后面没有 -->
                                            </div>
                                            <span>title</span>
                                            <span>person</span>
                                        </router-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <div>
                            <span>资讯</span>
                        </div>
                        <div>
                            <div>
                                <span>新动态</span>
                            </div>
                            <div>
                                <span>
                                    最新投稿
                                </span>
                            </div>
                            <div>
                                <el-button  size="mini" style="color: #000" icon='el-icon-arrow-right'>更多</el-button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div>
                                    <router-link to="">
                                        <img src="http://i1.hdslb.com/bfs/archive/c17f2a69ec9eb981bfc90a8485275c839d82d824.png" alt="">
                                        <span>长沙市</span>
                                    </router-link>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <span>热门</span>
                        <div>
                            <el-button  size="mini" style="color: #000" icon='el-icon-arrow-right'>三日</el-button>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div>
                                    <div>
                                        <span></span>
                                    </div>
                                    <div>
                                        <router-link to="">
                                            <div>
                                                <img src="" alt="">
                                            <!-- 前面3行才有图片 后面没有 -->
                                            </div>
                                            <span>title</span>
                                            <span>person</span>
                                        </router-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <div>
                            <span>官方延伸</span>
                        </div>
                        <div>
                            <div>
                                <span>新动态</span>
                            </div>
                            <div>
                                <span>
                                    最新投稿
                                </span>
                            </div>
                            <div>
                                <el-button  size="mini" style="color: #000" icon='el-icon-arrow-right'>更多</el-button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div>
                                    <router-link to="">
                                        <img src="" alt="">
                                        <span>长沙市</span>
                                    </router-link>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <span>热门</span>
                        <div>
                            <el-button  size="mini" style="color: #000" icon='el-icon-arrow-right'>三日</el-button>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div>
                                    <div>
                                        <span></span>
                                    </div>
                                    <div>
                                        <router-link to="">
                                            <div>
                                                <img src="" alt="">
                                            <!-- 前面3行才有图片 后面没有 -->
                                            </div>
                                            <span>title</span>
                                            <span>person</span>
                                        </router-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
</template>
<script>
export default {
    name:'countrycreate',
    data() {
        return {
            datas:[],
            test:0,
            carouselNum: [
                {src:''},
                {src:''},
                {src:''},
                {src:''},
                {src:''},
            ],
            navUl:[
                {id:0,title:'全部'},
                {id:1,title:'连载动画'},
                {id:2,title:'完结动画'},
                {id:3,title:'资讯'},
                {id:4,title:'官方延伸'},
                {id:5,title:'新番时间表'},
                {id:6,title:'番剧索引'}
            ],
            filterList:[
                [
                    {id:0,title:'追番人数'},
                    {id:1,title:'最高评分'},
                    {id:2,title:'播放数量'},
                ],
                [
                    {id:0,title:'2021'},
                    {id:1,title:'2020'},
                    {id:2,title:'2019'},
                    {id:3,title:'2018'},
                    {id:4,title:'2017'},
                    {id:5,title:'2016'},
                    {id:6,title:'2015'},
                    {id:7,title:'2014~2010'},
                ],
                [
                    {id:0,title:'原创'},
                    {id:1,title:'漫画改'},
                    {id:2,title:'小说改'},
                    {id:3,title:'布袋戏'},
                    {id:4,title:'游戏改'},
                    {id:5,title:'特摄'},
                    {id:6,title:'热血'},
                ],
                [
                    {id:0,title:'奥特曼'},
                    {id:1,title:'银魂'},
                    {id:2,title:'7月新番'},
                    {id:3,title:'史莱姆'},
                    {id:4,title:'黑心企业'},
                ],
            ],
            animeUpdataDivUlLiData:[
               [
                   {title:'通灵王',setTime:'看到第1话 23:42',updata:'更新至第22话'},
                   {title:'伊甸星原 EDENS ZERO',setTime:'看到第6话 21:58',updata:'更新至第21话'},
                   {title:'忧国的莫里亚蒂 后半',setTime:'尚未观看',updata:'全13话'},
                   {title:'巴克·亚罗/BACK ARROW',setTime:'尚未观看',updata:'全24话'},
                   {title:'咒术回战',setTime:'尚未观看',updata:'全24话'},
                   {title:'工作细胞 第二季',setTime:'尚未观看',updata:'全8话'},
                   {title:'全员恶玉',setTime:'尚未观看',updata:'全12话'},
                   {title:'ISLAND',setTime:'尚未观看',updata:'全12话'},
                   {title:'你与我最后的战场，亦或是世界起始的圣战',setTime:'尚未观看',updata:'全12话'},
                   {title:'忧国的莫里亚蒂',setTime:'尚未观看',updata:'全11话'},
                   
               ],
               [
                   {src:'https://www.bilibili.com/bangumi/play/ss38922?from_spmid=666.4.0.0',title:'转生成为了只有乙女游戏破灭Flag的邪恶大小姐 第二季'},
                   {src:'https://www.bilibili.com/bangumi/play/ss38214?from_spmid=666.4.0.0',title:'致不灭的你，不死的旅程开始了'},
                   {src:'https://www.bilibili.com/bangumi/play/ep407932?from_spmid=666.4.0.0',title:'小林家的龙女仆 第二季'},
                    {src:'https://www.bilibili.com/bangumi/play/ep409815?from_spmid=666.4.0.0',title:'关于我转生变成史莱姆这档事 第二季'},
                    {src:'https://www.bilibili.com/bangumi/play/ss38385?from_spmid=666.4.0.0',title:'奥特曼系列热播中！一起重温经典'},
                    {src:'https://www.bilibili.com/blackboard/topic/activity-aquatopepc.html',title:'白沙的水族馆'},


                    {src:'https://www.bilibili.com/video/BV1ko4y1U7Xw?from_spmid=666.4.0.0',title:'【7月】漂流少年 06'},
                    {src:'https://www.bilibili.com/video/BV1pK411N7xH?from_spmid=666.4.0.0',title:'【10月】总之就是非常可爱 01【独家正版】'},
                    {src:'https://www.bilibili.com/video/BV1S44y1i766?from_spmid=666.4.0.0',title:'【1月/完结】转生成蜘蛛又怎样！ 24【独家正版】'},
                    {src:'https://www.bilibili.com/video/BV1hy4y1T7MR?from_spmid=666.4.0.0',title:'【7月】我们的重制人生 03【独家正版】'},
                    {src:'https://www.bilibili.com/video/BV1vP4y1a7ps?from_spmid=666.4.0.0',title:'【7月】精灵幻想记 10【独家正版】'},
                    {src:'https://www.bilibili.com/video/BV1K64y1q7ch?from_spmid=666.4.0.0',title:'【7月】转生成为了只有乙女游戏破灭Flag的邪恶大小姐 第二季 07'},
                    {src:'https://www.bilibili.com/video/BV1UU4y1471x?from_spmid=666.4.0.0',title:'【1月】弱势角色友崎君 03【独家正版】'},
                    {src:'https://www.bilibili.com/video/BV1DM4y137Hz?from_spmid=666.4.0.0',title:'【7月】开挂药师的奇幻世界悠闲生活 10'},
                    {src:'https://www.bilibili.com/video/BV1nv41187EB?from_spmid=666.4.0.0',title:'【1月/完结】弱势角色友崎君 12【独家正版】'},
                    {src:'https://www.bilibili.com/video/BV1jU4y1776m?from_spmid=666.4.0.0',title:'【7月】瓦尼塔斯的手记 05 【独家正版】'},
                    {src:'',title:''},
                    {src:'',},
                    {src:'',},
                    {src:'',},
                    {src:'',},
                    {src:'',},
                    {src:'',},
                    {src:'',},
                    {src:'',},
                    {src:'',},
                    {src:'',},
                    {src:'',},
               ]
            ]
        }
    },
    methods: {
        changes(val,oldVal){
            console.log(val,oldVal);
            // console.log(document.getElementById('carouselImgId'+val));
            let span = (name)=>document.getElementById(name)
            if (val == 0) {
                // let span = document.getElementById('liSpanOne')
                span('liSpanOne').style.display='block'
            }else{
                span('liSpanOne').style.display= 'none'
            }
            if (val == 1) {
                // let span = document.getElementById('liSpanOne')
                span('liSpanTwo').style.display='block'
            }else{
                span('liSpanTwo').style.display= 'none'
            }
            if (val == 2) {
                // let span = document.getElementById('liSpanOne')
                span('liSpanThree').style.display='block'
            }else{
                span('liSpanThree').style.display= 'none'
            }
            if (val == 3) {
                // let span = document.getElementById('liSpanOne')
                span('liSpanFour').style.display='block'
            }else{
                span('liSpanFour').style.display= 'none'
            }
            if (val == 4) {
                // let span = document.getElementById('liSpanOne')
                span('liSpanFive').style.display='block'
            }else{
                span('liSpanFive').style.display= 'none'
            }

            // if (val < (this.carouselNum.length-1)) {
                // val++
            this.test = val
            // }else{
                // this.test = 0
            // }
            
        }
    },
    mounted() {
        // document.getElementById
        // let a = name('liSpanOne')
    },
    created() {
        this.$axios.get('/animeUpdataDivUlLiData').then(res=>{
            this.datas = res.data
            console.log(this.datas)
        }).catch(err=>{
            console.log(err)
        })
        // this.$axios.get('/phb').then(res=>{
        //     this.datas = res.data
        //     console.log(this.datas)
        // }).catch(err=>{
        //     console.log(err)
        // })
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
        /* background-image: url('../../../src/assets/blblImgSl/dh5.jpg'); */
    }
    .carouselDiv {
        max-width: 1100px;
        min-width: 1100px;
        margin-top: 25px;
    }
    .carouselDiv a{
        display: flex;
    }
    .divButtom{
        width: 200px;
        height: 20px;
        background-color: brown;
        color: #000;
        display: flex;
        position: absolute;
        margin-top: -40px;
        margin-left: 20px;
        z-index: 20;
    }
    .imgClass{
        width: 60px;
        height: 45px;
        /* border-radius: 5px; */
    }
    .imgSmallDiv{
        display: flex;
        position: absolute;
        width: 300px;
        margin-top: -70px;
        z-index: 20;
        margin-left: 720px;
    }
    .imgSmallDiv ul{
        display: flex;
    }
    .imgSmallDiv ul li{
        display: flex;
        margin: 5px;
        border: solid 2px white;
        border-radius: 6px;
    }
    /* .navRouter{
        /* display: flex; */
        /* color: rgb(224, 222, 222); */
        
    /* }  */
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
    .contentAllDiv{
        display: flex;
        justify-content: center;
    }
    .animeUpdataDiv{
        /* display: flex; */
        max-width: 1100px;
    }
    .animeUpdataDivul{
        display: flex;
        flex-wrap: wrap;
        max-width: 900px;
    }
    .animeUpdataDivUlLiDiv{
        /* min-width: 900px; */
        width: 200px;
        height: 80px;
    }
    .animeUpdataDivNav{
        display: flex;
    }
    .animeUpdataDivListDiv{
        display: flex;
        min-width: 250px;
    }
    .filterList{
        display: flex;
    }
    .filterListHot{
        display: flex;
        flex-wrap: wrap;
        max-width: 270px;
        min-width: 270px;
    }
    .filterListHot ul{
        display: flex;
        flex-wrap: wrap;
    }
    .filterListHot ul li{
        display: flex;
        margin: 10px;
    }
    .filterListHot ul li:first-child{
        display: flex;
        margin-left: 0px;
    }
    .filterListTime{
        display: flex;
        flex-wrap: wrap;
        max-width: 270px;
        min-width: 270px;
    }
    .filterListTime ul{
        display: flex;
        flex-wrap: wrap;
        
    }
    .filterListTime ul li{
        display: flex;
        margin: 10px;
    }
    .filterListTime ul li:first-child{
        display: flex;
        margin-left: 0px;
    }
    .filterListTime ul li:nth-child(6){
        display: flex;
        margin-left: 0px;
    }
    .filterListStyle{
        display: flex;
        flex-wrap: wrap;
        max-width: 270px;
        min-width: 270px;
    }
    .filterListStyle ul{
        display: flex;
        flex-wrap: wrap;
    }
    .filterListStyle ul li{
        display: flex;
        margin: 10px;
    }
    .filterListStyle ul li:first-child{
        display: flex;
        margin-left: 0px;
    }
    .filterListStyle ul li:nth-child(5){
        display: flex;
        margin-left: 0px;
    }
    .filterListSearch{
        display: flex;
        flex-wrap: wrap;
        max-width: 270px;
        min-width: 270px;
    }
    .filterListSearch ul{
        display: flex;
        flex-wrap: wrap;
    }
    .filterListSearch ul li{
        display: flex;
        margin: 10px;
    }
    .filterListSearch ul li:first-child{
        display: flex;
        margin-left: 0px;
    }
    .filterListSearch ul li:nth-child(5){
        display: flex;
        margin-left: 0px;
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
</style>