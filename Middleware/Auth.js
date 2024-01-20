const Allauth = (req,res,next)=>{
    console.log('We are on the first Auth');
    next()
}

const SpecificAuth =(req,res,next)=>{
    console.log('We are on the second Auth');
    next()
}

module.exports = {Allauth,SpecificAuth}