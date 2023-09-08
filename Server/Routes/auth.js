const express = require("express")
const router = express.Router()
const UserModel = require('../Models/User')
const jwt = require("jsonwebtoken")
const secretKey = "secretKey"
const verifyToken = require("../middleware/authenticate")

router.post("/signup", async (req, res) => {
    const { f_name, l_name, email, phone, password } = req.body
    if (f_name && l_name && email, phone && password) {
        let existingUser = await UserModel.findOne({ email: email })
        if (!existingUser) {
            try {
                let newUser = await UserModel.create({
                    f_name, l_name, email, phone, password
                })
                res.status(201).json({success: true, data: newUser})
            } catch (error) {
                res.status(500).json(error)
            }   
        } else {
            res.json("user already exists")
        }

    } else {
        res.status(400).json("Bad request")
    }

})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        let user = await UserModel.findOne({ email: email })
        if (user) {
            if (password == user.password) {
                jwt.sign(user.id, secretKey, (err, token)=>{
                    res.json({ message: "Success",token})
                })
            }
            else {
                res.json("Incorrect Password")
            }
        } else {
            res.json("No Record Exists")
        }
            
    } else {
        res.status(400).json({ error: "Bad request" })
    }

})

router.get('/getUser', verifyToken, (req, res)=>{
    jwt.verify(req.token, secretKey, async (err, authData) => {
        if (err) {
          res.status(403).json({error: "invalid token"})
        } else {
            try {
                let user = await UserModel.findOne({_id: authData})
                res.json(user)
            } catch (error) {
                res.json(err)
            }
        }
    })
})


module.exports = router