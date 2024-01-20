const login = (req,res)=>{
    res.send({message : 'login page'})
}
const register = (req,res)=>{
    res.send({message : 'register page'})
}
const about = (req,res)=>{
    res.send({message : 'about page'})
}
const contact = (req,res)=>{
    res.send({message : 'contact page'})
}

module.exports = {login,register,about,contact}