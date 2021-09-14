<template >
    <div class="div">
        <!-- <commHeader /> -->
        <!-- 登录 -->
        <div class="QRcode">
            <!-- 二维码 -->
            <img :src="img" alt="" style="height:300px;">
        </div>
        <div class="userLogin">
            <!-- 用户登录注册 -->
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="密码登录" name="first">
                    <input type="text" placeholder="你的手机号／邮箱" class="userInput">
                    <input type="password" placeholder="密码" class="pwdInput">
                </el-tab-pane>
                
                <el-tab-pane label="短信登录" name="second">
                    <el-input placeholder="填写常用手机号" v-model="input3" class="input-with-select">
                        <el-select v-model="select" slot="prepend" placeholder="请选择">
                            <el-option label="中国大陆" value="1"></el-option>
                            <el-option label="中国香港特别行政区" value="2"></el-option>
                            <el-option label="中国澳门特别行政区" value="3"></el-option>
                            <el-option label="中国台湾" value="4"></el-option>
                            <el-option label="美国" value="5"></el-option>
                            <el-option label="比利时" value="6"></el-option>
                            <el-option label="澳大利亚" value="7"></el-option>
                            <el-option label="法国" value="8"></el-option>
                            <el-option label="加拿大" value="9"></el-option>
                            <el-option label="日本" value="10"></el-option>
                            <el-option label="新加坡" value="11"></el-option>
                            <el-option label="韩国" value="12"></el-option>
                            <el-option label="马来西亚" value="13"></el-option>
                            <el-option label="英国" value="14"></el-option>
                            <el-option label="意大利" value="15"></el-option>
                            <el-option label="德国" value="16"></el-option>
                            <el-option label="俄罗斯" value="17"></el-option>
                            <el-option label="新西兰" value="18"></el-option>
                            <el-option label="阿富汗" value="19"></el-option>
                            <el-option label="阿尔巴尼亚" value="20"></el-option>
                            <el-option label="阿尔及利亚" value="21"></el-option>
                            <el-option label="安道尔" value="22"></el-option>
                            <el-option label="安哥拉" value="23"></el-option>
                            <el-option label="--其它--" value="24"></el-option>
                        </el-select>
                    </el-input>
                    <el-input v-model="input" placeholder="请输入短信验证码" class="CAPTCHAclass"></el-input>
                    <el-button type="primary">获取验证码</el-button>
                </el-tab-pane>
            </el-tabs>
        </div>
                    <!-- <div style="width:300px;height:100px;"> 
                                <input type="text" v-model="test" placeholder="撒啊">
                                {{test}}
                                <button type="submit" @click="subPost(test)">提交</button>
                                {{datas}}
                            </div> -->
                            <!-- background-color: brown; -->
                            <!-- el-input__inner           -->
    </div>
</template>
<script>
// import commHeader from '@/components/commer_compon/Comm_header.vue'
export default {
    name:'login',
    data() {
        return {
            activeName: 'second',
            test:'',
            datas:'',
            input:'',
            input1: '',
            input2: '',
            input3: '',
            select: '',
            img:require('/Users/chenchs/blblImgSl/qjG.jpeg')
        }
    },
    mounted() {
        
    },
    components:{
        // commHeader
    },
    created() {
        this.$axios.get()
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
    .div{
        display: flex;
        justify-content: center;
    }




    .userLogin{
        justify-content: center;
        display: flex;
        min-width: 490px;
        max-width: 490px;
        min-height: 370px;
        max-height: 370px;
    }
    .userLogin>>>.el-input.el-input--suffix .el-input__inner{
        text-align: center;
        min-width: 130px;
        max-width: 130px;
    }
    .userLogin>>>.el-input-group__prepend .el-input__inner{
        max-width: 280px;
        min-width: 280px;
    }
    .userLogin>>>.CAPTCHAclass.el-input .el-input__inner{
         max-width: 411px;
        min-width: 411px;
        margin-top: 20px;
    }
    .userLogin >>> .el-tabs__nav-wrap::after{
        background-color: #fff;
        /* 
            修改下划线 的背景颜色
        */
    }
    .userLogin>>>.el-button.el-button--primary{
        position: absolute;
        /* margin-right: 400px; */
            margin-left: -113px;
            min-height: 38px;
            max-height: 38px;
            margin-top: 21px;
    }
    .userLogin>>>.el-tabs__nav-scroll{
        max-width: 411px;
        min-width: 411px;
    }
    .userLogin>>>.el-tabs__content{
        max-width: 411px;
        min-width: 411px;
        display: flex;
        flex-wrap: wrap;
    }
    .userInput{
        min-width: 411px;
        max-width: 411px;
        margin-top: 20px;
    }
    .pwdInput{
        max-width: 411px;
        min-width: 411px;
        margin-top: 20px;
    }


    .QRcode{
        max-width: 490px;
        min-width: 490px;
        display: flex;
        justify-content: center;
        max-height: 370px;
        min-height: 370px;
    }
</style>