<template>
    <el-tabs value="registered" class="tab">
        <el-tab-pane label="注册" name="registered">
            <registered></registered>
        </el-tab-pane>
        <el-tab-pane label="登录" name="login">
            <login></login>
        </el-tab-pane>
        
    </el-tabs>
</template>

<script>
    import registered from './registered'
    import login from './login'
    export default {
        components:{
            registered,
            login
        }
    }
</script>

<style lang="stylus" scoped>
    .tab
        margin 1rem
</style>