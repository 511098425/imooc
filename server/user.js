const express = require('express');
const utils = require('utility');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

const _filter = {'pwd':0,'__v':0};

Router.get('/info',function (req,res) {
    const {userId} = req.cookies;
    if (!userId){
        return res.json({code:1})
    }
    User.findOne({_id:userId},_filter ,function (err,doc) {
        if (err){
            return res.json({code:1,msg:'查询出现异常'});
        }
        return res.json({code:0,data:doc});
    })
})

Router.get('/list',function (req,res) {
    const { type }= req.query
    User.find({type},function (err,doc) {
        return res.json({code:0,data:doc});
    })
})
Router.post('/login',function (req,res) {
    const {user,pwd}=req.body;
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function (err,doc) {
        if (!doc){
            return res.json({code:1,msg:"用户名或密码错误"})
        }
        res.cookie('userId',doc._id);
        return res.json({code:0,data:doc});

    })
})
//注册
Router.post('/register',function (req,res) {
    const {user,pwd,type}=req.body;
    User.findOne({user},function (err,doc) {
        if (doc){
            return res.json({code:1,msg:"用户名已存在"})
        }
        const userModel = new User({user,type,pwd:md5Pwd(pwd)});
        userModel.save(function (e,d) {
            if (e){
                return res.json({code:1,msg:'新增异常'});
            }
            return res.json({code:0,data:user})
        });
    })
})
Router.post('/update',function (req,res) {
    const userId = req.cookies.userId;
    console.log("传入userId:",userId)
    if (!userId){
        return json.dumps({code:1})
    }
    const body = req.body;
    User.findByIdAndUpdate(userId,body,function (err,doc) {
        const data = Object.assign({},{
            user:doc.user,
            type:doc.type
        },body);
        return ({code:0,data:data});
    })
});

function md5Pwd(pwd) {
    const salt = 'immoc_is_good_3957x8yza6!@#IUHJ~~';
    return utils.md5(utils.md5(pwd+salt));
}


module.exports = Router