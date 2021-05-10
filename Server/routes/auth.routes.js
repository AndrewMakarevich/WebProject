const {Router, response} = require('express');
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = Router();

router.post('/register',
     [
         check('email', "Incorrect email").isEmail(),
         check('password', "The minimum password's length is 6 symbols").isLength({min: 6})
     ],
  async(req, res)=>{
     try{
        console.log('Body:', req.body);
         const errors = validationResult(req);

         if(!errors.isEmpty()){
             return res.status(400).json({
                 errors: errors.array(),
                 message: "Incorrect registration data"
             });
         }

         const {firstName, secondName, email, nickName, password} = req.body;
         const candidate = await User.findOne({email: email});

         if(candidate){
            res.status(400).json({message: 'User is already excists'});
         }

         const hashedPassword = await bcrypt.hash(password, 12);
         const user = new User({firstName: firstName, secondName: secondName, email: email, nickName: nickName, password: hashedPassword});
         await user.save();
         res.status(201).json({message: ' User created'});

     }catch(e){
         res.status(500).json({message: 'Something wrong, try again'});
     }
 });

 router.post(
     '/login',
     [
        check('email', "{Please enter correct email}").normalizeEmail().isEmail(),
        check('password', "EnterPassword").exists()
     ],
     async(req, res)=>{
         try{
           const errors = validationResult(req);

           if(!errors.isEmpty()){
                return res.status(400).json({
                errors: errors.array(),
                message: "Incorrect sign in data"
            });
           }
           const {email, password} = req.body;
           let user = await User.findOne({ email });
           if(!user){
            return res.status(400).json({message: "User is not found"});
           }

           const isMatch = await bcrypt.compare(password, user.password);

           if(!isMatch){
             return res.status(400).json({message: "Password is incorrect"});
           }

           const token = jwt.sign(
            {userId: user.id},
             config.get('jwtSecret') ,
             { expiresIn: '1h'}
         );
         res.json({token, userId: user.id, nickName: user.nickName, User:user});

         }catch(e){
            res.status(500).json({message: 'Something wrong, try again'});
         }
     }
 );
 module.exports = router;