'use strict';
const router = require('express').Router();

module.exports=()=>{
    let routes = {
        'get':{
            '/':(req,res,next)=>{
                res.render('login');
            },
            '/rooms':(req,res, next)=>{
                res.render('rooms');
            },
            '/chat':(req,res,next)=>{
                res.render('chat');
            }

        }
    }
}