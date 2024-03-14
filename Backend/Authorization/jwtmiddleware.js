import jwt, { decode } from "jsonwebtoken"
const  jwtMiddleware=(req,res,next)=>{
    const SecretKey = "Secret-key";
    const authHeader= req.headers['authorization']
    const toke= authHeader && authHeader.split(' ')[1] 
    if(!toke) res.status(401)
    try{
         jwt.verify(token,SecretKey) ;
         req.user= user 
         next() ;
    }
    catch(err)
    {
        console.log(err) ;
        res.status(401).json({error:"Invalid token"})
    }
}
export default jwtMiddleware