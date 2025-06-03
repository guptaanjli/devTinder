const adminAuth = (req,res,next)=> {
    console.log("admin auth getting checked");
    const token ="xyz";
    const isAdminAuthorized = token == "xyz";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorised req");
    }
    else{
        next();
    }
};

module.exports={adminAuth};