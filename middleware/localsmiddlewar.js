import session from "express-session";


export const localsMiddlewre = (req,res,next) =>{

res.locals.message = req.session.message

console.log(req.session);

next()

}