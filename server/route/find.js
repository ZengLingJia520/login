const Users = require('../db.js')
const Router = require('koa-router')


const findRouter = new Router()
findRouter.get('/',async (ctx,next)=>{
    ctx.body = await Users.find(function(err,data){
        return new Promise(function(resolve,reject){

            if(!err){
                return resolve(data)
            }else{
                return reject(err)
            }
        })
    })
    
})


module.exports = findRouter