<template>
    <div class="logo-box">
        <div class="logos">
            <div class="logo">
                <img :src="imgUrl" alt="" width="100%" height="100%">
            </div>
            <p class="w">欢迎{{$store.state.user}}</p>
        </div>
    </div>
</template>

<script>
    import store from '../vuex/store'
    

    export default {
        data(){
            return {
                imgUrl:require('../img/logo.png')
            }
        }
    }
</script>

<style lang="stylus">
.logo-box
    margin 0
    padding 0
    width 100%
    height 100%
    background #c1c1c1
    .logos
        position absolute
        top 44%
        left 50%
        transform translate(-50%,-50%)
        -o-transform translate(-50%,-50%)
        -webkit-transform translate(-50%,-50%)
        -moz-transform translate(-50%,-50%)
        -ms-transform translate(-50%,-50%)
        .logo
            width 6rem
            margin 0 auto 0
        .w
            font-size 1.8rem
            
</style>