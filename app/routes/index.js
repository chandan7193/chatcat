'use strict';
const h = require('../helpers');
console.log(h);

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
                res.render('chatroom');
            },
        },
        'post':{

        }       

    }
 

    return h.route(routes);
}
