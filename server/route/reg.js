const Users = require('../db.js')
const Router = require('koa-router')
const sha1 = require('sha1')

const regRouter = new Router()
regRouter.post('/',async (ctx,next)=>{
    
    let postData = ctx.request.body
    let password = sha1(postData.pass);//加密
    
    //查找用户名
    var dbData = await Users.find({username:postData.user},function(err,data){
        return new Promise(function(resolve,reject){
            if(!err){
                return resolve(data)
            }else{
                return reject(err)
            }
        })
    })

    //判断是否有改用户名

    if(dbData.length == 0){//没有该用户名,
        ctx.body = await new Promise((resolve,reject)=>{
            //插入数据
            Users.create(
                {username:postData.user,password:password},
                (err,data)=>{

                    if(!err){
                        return resolve({ok:true,msg:'注册成功'})
                        
                    }else{
                        return reject(err)
                        
                    }
                }
            )
        })

        

    }else{
        ctx.body = {ok:false,msg:'该用户名已经存在'}
    }
})


module.exports = regRouter