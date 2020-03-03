const router = require('express').Router();
const user = require('./../models/user');
router.post('/',(req,res)=>{
    const email = req.body.email;
    user.findOne({email:email}).then(user => {
        console.log(typeof(user));
        if(user.password===req.body.password)res.json(user);
        else res.json('login details wrong');
    }).catch(err=>console.log(err));

});
module.exports = router; 