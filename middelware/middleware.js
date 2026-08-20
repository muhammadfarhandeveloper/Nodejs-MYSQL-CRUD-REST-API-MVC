

function MiddlewareCheckfun(req,res,next){

    if(!req.headers['token']){
        res.send("Invalid Request")
    }

    next();

}
module.exports = MiddlewareCheckfun;