const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/log')

let db = mongoose.connection
// 防止Mongoose: mpromise 错误
mongoose.Promise = global.Promise;

db.on('error',()=>{
    console.log('数据库链接错误')
})
db.on('open',()=>{
    console.log('数据库链接成功')
})

//声明schema
const userSchema = new mongoose.Schema({
    username:String,
    password:String
})

const Users = mongoose.model('Users',userSchema)

module.exports = Users