const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const reg = require('./route/reg.js')
const login = require('./route/login.js')
const find = require('./route/find.js')

const app = new Koa()
const router = new Router()

app.use(bodyParser())

router
    .use('/reg',reg.routes(),reg.allowedMethods())          //注册
    .use('/login',login.routes(),login.allowedMethods())    //登陆
    .use('/find',find.routes(),find.allowedMethods())       //查找所有数据（测试用）
    // .get('/find',(ctx)=>{
    //     ctx.body = {ok:true,msg:'成功'}
    // })

app
    .use(router.routes())
    .use(router.allowedMethods())


app.listen(3000,()=>{
    console.log('服务器已经开启：http://localhost:3000')
})