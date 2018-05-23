const Users = require('../db.js')
const Router = require('koa-router')
const sha1 = require('sha1')

const loginRouter = new Router()
loginRouter.post('/',async (ctx,next)=>{
    
    let postData = ctx.request.body
    let password = sha1(postData.pass);//解密
    
    //查找是否有该用户名
    var findData = await new Promise((resolve,reject)=>{
        Users.find({username:postData.user},(err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })

    //没有（没有改用户）
    if(findData.length ==0){
        ctx.body = {ok:false,msg:'用户名不存在'}
    }else{
    //有（判断密码是否正确）
        // 密码正确
        if(findData[0].password == password){
            ctx.body = {ok:true,msg:'登录成功'}
        }else{
            ctx.body = {ok:false,msg:'密码错误'}
        }
    }
})


module.exports = loginRouter