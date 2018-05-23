<template>
    <div>
        <el-row :gutter="0" class="user-box input-box">
            <el-col :span="6"><p class="text">用户名：</p></el-col>
            <el-col :span="16"><el-input @blur="userBlur" v-model="user.value" placeholder="请输入用户名"></el-input></el-col>
        </el-row>
        <p class="tips tips-user">{{user.tips}}</p>
        <el-row :gutter="0" class="pass-box input-box">
            <el-col :span="6"><p class="text">密码：</p></el-col>
            <el-col :span="16"><el-input @blur="passBlur" v-model="pass.value" placeholder="请输入密码" type="password"></el-input></el-col>
        </el-row>
        <p class="tips tips-pass">{{pass.tips}}</p>
        
        <el-button type="primary" class="submit" @click="login">提交</el-button>
        
    </div>
</template>

<script>
    import axios from 'axios'
    import store from '@/vuex/store'
    
    export default {
        data(){
            return {
                user:{
                    value:'',
                    tips:'',
                    flag:false
                },
                pass:{
                    value:'',
                    tips:'',
                    flag:false
                }
                
                
            }
        },
        methods:{
            userBlur(){
                if(this.user.value==''){
                    this.user.tips = '*用户名不能为空'
                }else{
                    this.user.tips = '';
                    this.user.flag = true;
                }
            },
            passBlur(){
                if(this.pass.value==''){
                    this.pass.tips = '*密码不能为空'
                }else{
                    this.pass.tips = '';
                    this.pass.flag = true;
                }
            },
            login(){
                var _this = this
                if(this.user.flag && this.pass.flag){
                    axios({
                        method:'post',
                        url:'/api/login',
                        data:{
                            user:this.user.value,
                            pass:this.pass.value
                        }
                        
                    }).then(function(data){
                        console.log(data)
                       
                        if(data.data.ok){
                            //提示消息
                            _this.$message({
                                message: data.data.msg,
                                type: 'success',
                                center: true
                            });
                            //页面跳转
                            _this.$store.commit('updataUser',_this.user.value)
                            _this.$router.push({path:'/logo'})
                            
                        }else{
                            //提示消息
                            _this.$message.error({
                                message: data.data.msg,
                                center: true
                            });
                        }
                    })
                }
            }
           
            
        },
        watch:{
            'user.value':function(){
                this.userBlur()
            },
            'pass.value':function(){
                this.passBlur()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .input-box
        height 4rem
        // margin-top 1rem
        .text
            font-size 1.4rem
            line-height 4rem
            padding 0
            margin 0
    .tips
        padding 0
        margin 0.5rem 0
        color red
        height 1.4rem
            
</style>