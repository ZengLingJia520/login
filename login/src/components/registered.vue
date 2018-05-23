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
        <el-row :gutter="0" class="again-pass-box input-box">
            <el-col :span="6"><p class="text">重复密码：</p></el-col>
            <el-col :span="16"><el-input @blur="againPassBlur" v-model="againPass.value" placeholder="请输入再次密码" type="password"></el-input></el-col>
        </el-row>
        <p class="tips tips-againpass">{{againPass.tips}}</p>
        <el-button type="primary" class="submit" @click="reg">提交</el-button>
    </div>
</template>

<script>
    import axios from 'axios'

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
                },
                againPass:{
                    value:'',
                    tips:'',
                    flag:false
                }
                
            }
        },
        created(){
            axios({
                method:'get',
                url:'/api/find'
            }).then(function(data){
                console.log(data)
            })
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
            againPassBlur(){
                if(this.againPass.value==''){
                    this.againPass.tips = '*密码不能为空'
                }else if(this.againPass.value != this.pass.value){
                    this.againPass.tips = '*两次密码不一致'
                }
                else{
                    this.againPass.tips = '';
                    this.againPass.flag = true;
                }
            },
            reg(){
                let _this = this
                if(this.user.flag && this.pass.flag && this.againPass.flag){

                    axios({
                        method:'post',
                        url:'/api/reg',
                        data:{
                            user:this.user.value,
                            pass:this.pass.value
                        }
                        
                    }).then(function(data){
                        console.log(data)
                        //提示消息
                        if(data.data.ok){
                            _this.$message({
                                message: data.data.msg,
                                type: 'success',
                                center: true
                            });
                        }else{
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
            },
            'againPass.value':function(){
                this.againPassBlur()
            },
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