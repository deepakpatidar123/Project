const User = require('../models/user');

exports.postSignup= async(req, res, next) =>{
    try{
        if(!req.body.email){
            throw new Error('Email is mandatory');
        }
    //   const name = req.body.name;
    //   const email = req.body.email;
    //   const password = req.body.password;

    const {name, email, password} = req.body;
       await User.create( {name, email, password} )
      res.status(201).json({message: "successfull"});
    } catch(err){
        res.status(500).json({
            error: err
        })
    }

}
const login = async (req, res) => {
    try{
    const {email, password} = req.body;
    if(isstringinvalid(email) || isstringinvalid(password)){
       return res.status(400).json({message: 'Email id or password is missing', success: false})
    }
    console.log(password);
    const user = await User.findAll({ where : { email }})
        if(user.length > 0){
            if(user[0].password === password){
                res.status(200).json({success: true, message: 'User logged in successfully'})
            }else{
                return res.status(401).json({success: false, message: 'User not authorized'})
            }
        }else{
            return res.status(404).json({success: false, message: 'User Doesnot exists'})
        }
    }catch(err)  {
        res.status(500).json({message: err, success: false})
    }
}
